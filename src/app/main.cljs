;;; Copyright 2019 Frederic Merizen
;;;
;;; SPDX-License-Identifier: MIT

(ns app.main
  (:require
   [clojure.string :as string]
   ["d3" :as d3]
   ["d3-transform" :as d3-transform]))

(defn ->time
  ([hours] (->time hours 0))
  ([hours minutes] (->time hours minutes 0))
  ([hours minutes seconds]
   (-> hours (* 60) (+ minutes) (* 60) (+ seconds))))

(def pause-schedule
  [{:start (->time 24) :pause (->time 0 39 35)}])

(def terran-size 200)
(def martian-size 50)
(def width (* terran-size 2))
(def height (* (+ terran-size martian-size) 2))
(def terran-center {:x terran-size :y (+ terran-size (* martian-size 2))})
(def martian-center {:x terran-size :y martian-size})
(def update-interval 1000)

(def seconds-per-day (* 24 60 60))

(defn seconds-of-day
  [date offset]
  (-> date
      .getTime
      (+ offset)
      (/ 1000)
      (- (-> date .getTimezoneOffset (* 60)))
      (mod seconds-per-day)))

(defn round3 [x]
  (-> x (* 1000) (Math/round) (/ 1000)))

(defn ->hms [time]
  {:hours (-> time (/ 60 60) (mod 12) round3)
   :minutes (-> time (/ 60) (mod 60) round3)
   :seconds (-> time (mod 60) round3)})

(defn time-correction-factor [pause-schedule]
  (/ (apply + seconds-per-day (map :pause pause-schedule))
     seconds-per-day))

(defn martian-remap [time pause-schedule]
  (let [time (* time (time-correction-factor pause-schedule))
        {:keys [terran martian]} (reduce (fn [{:keys [terran]}
                                              {:keys [start pause]}]
                                           (let [overlap (- terran start)]
                                             (cond
                                               (< overlap 0) (reduced {:terran terran})
                                               (> overlap pause) {:terran (- terran pause)}
                                               :else (reduced {:terran start
                                                               :martian {:current overlap
                                                                         :wrap pause
                                                                         :reverse true}}))))
                                         {:terran time}
                                         pause-schedule)]
    {:terran terran
     :martian (or martian {:current 0 :wrap 1 :reverse true})}))

(defn time->hands
  [{:keys [terran martian]}]
  (let [{:keys [hours minutes seconds]} (->hms terran)]
    (array
     {:name "hours"
      :center terran-center
      :style {:length (/ terran-size 2) :width 5}
      :value {:wrap 12 :current hours}}

     {:name "minutes"
      :center terran-center
      :style {:length (/ terran-size 1.5) :width 2}
      :value {:wrap 60 :current minutes}}

     {:name "seconds"
      :center terran-center
      :style {:length terran-size :width 1}
      :value {:wrap 60 :current seconds}}

     {:name "martian"
      :center martian-center
      :style {:length martian-size :width 1}
      :value martian})))

(defn hands-at
  [date offset]
  (-> date (seconds-of-day offset) (martian-remap pause-schedule) time->hands))

(defn clock []
  (-> d3 (.select "#clock")))

(defn by-name [d & _] (:name d))

(defn lines
  ([date]
   (lines date 0))
  ([date offset]
   (-> (clock)
       (.selectAll  "line")
       (.data (hands-at date offset) by-name))))

(defn fpart [x]
  (- x (Math/trunc x)))

(defn position-hand [l]
  (.attr l
         "transform"
         (-> (d3-transform/transform)
             (.translate (fn [{{:keys [x y]} :center} & _] (array x y)))
             (.rotate (fn [{{:keys [wrap current reverse]} :value :as h}]
                        (let [[current offset] (if reverse
                                                 [(- current) 0.5]
                                                 [current 0])]
                          (-> current (/ wrap) (+ offset) fpart (* 360))))))))

(defn update-clock!
  ([]
   (update-clock! (js/Date.)))
  ([now]
   (-> (lines now update-interval)
       .transition
       (.duration update-interval)
       (.ease d3/easeLinear)
       position-hand)))

(defn create-hand [lines]
  (-> lines
      (.append "line")
      (.attr "x1" 0)
      (.attr "y1" 0)
      (.attr "x2" 0)
      (.attr "y2" (fn [{{:keys [length]} :style} & _] (- length)))
      position-hand
      (.style "stroke-width" (fn [{{:keys [width]} :style} & _] width))
      (.style "stroke" "rgb(255,0,0)")))


(defn draw-dials [clock]
  (-> clock
      (.selectAll "circle")
      (.data (array {:center terran-center :radius terran-size}
                    {:center martian-center :radius martian-size}))
      .enter
      (.append "circle")
      (.attr "cx" (fn [d & _] (-> d :center :x)))
      (.attr "cy" (fn [d & _] (-> d :center :y)))
      (.attr "r" (fn [d & _] (-> d :radius)))))

(defn init-clock! []
  (-> (clock) (.attr "viewBox" (string/join " " [0 0 width height])) draw-dials)
  (let [now (js/Date.)]
    (-> (lines now)
        .enter
        create-hand)
    (update-clock! now)))

(defonce interval (atom nil))

(defn disbale-zooming [e]
  (when-not (= 1 (.-scale e))
    (.preventDefault e)))

(defn main! []
  (js/document.addEventListener "touchmove" disbale-zooming false)
  (init-clock!)
  (reset! interval (js/setInterval update-clock! update-interval)))

(defn unload! []
  (js/document.removeEventListener "touchmove" disbale-zooming false))

(defn reload! []
  (js/clearInterval @interval)
  (main!))
