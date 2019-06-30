(ns app.main
  (:require
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

(def seconds-per-day (* 24 60 60))

(defn seconds-of-day
  ([]
   (seconds-of-day (js/Date.)))
  ([date]
   (let [offset (.getTimezoneOffset date)]
     (-> date
         (.getTime)
         (/ 1000)
         (- (* offset 60))
         (mod seconds-per-day)))))

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

(defn hands
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


(defn fpart [x]
  (- x (Math/trunc x)))

(defn update-clock! []
  (let [hands (-> (seconds-of-day) (martian-remap pause-schedule) hands)
        lines (-> d3
                  (.select "#clock")
                  (.attr "height" height)
                  (.attr "width" width)
                  (.selectAll "line")
                  (.data hands))]
    (-> lines
        (.exit)
        (.remove))

    (-> lines
        (.enter)
        (.append "line")
        (.attr "x1" 0)
        (.attr "y1" 0)
        (.attr "x2" 0)
        (.style "stroke" "rgb(255,0,0)"))

    (-> lines
        (.attr "y2" (fn [{{:keys [length]} :style} & _] (- length)))
        (.style "stroke-width" (fn [{{:keys [width]} :style} & _] width))
        (.attr "transform" (-> (d3-transform/transform)
                               (.translate (fn [{{:keys [x y]} :center} & _] (array x y)))
                               (.rotate (fn [{{:keys [wrap current reverse]} :value}]
                                          (let [[current offset] (if reverse
                                                                   [(- current) 0.5]
                                                                   [current 0])]
                                            (-> current (/ wrap) (+ offset) fpart (* 360))))))))))

(defonce interval (atom nil))

(defn main! []
  (reset! interval (js/setInterval update-clock! 50)))

(defn reload! []
  (js/clearInterval @interval)
  (main!))
