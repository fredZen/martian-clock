(ns app.main-test
  (:require
   [app.main :as main]
   [cljs.test :refer [deftest is testing]]))

(deftest seconds-of-day
  (testing "in local time zone"
    (is (= (-> 14 (* 60) (+ 48) (* 60) (+ 37))
           (main/seconds-of-day (js/Date. "2011-10-10T14:48:37.000"))))))

(deftest ->hms
  (testing "with only hours"
    (is (= {:hours 2 :minutes 0 :seconds 0}
           (-> "2011-10-10T14:00:00.000" (js/Date.) main/seconds-of-day main/->hms))))
  (testing "with minutes"
    (is (= {:hours 2.5 :minutes 30 :seconds 0}
           (-> "2011-10-10T14:30:00.000" (js/Date.) main/seconds-of-day main/->hms))))
  (testing "with seconds"
    (is (= {:hours 2.51 :minutes 30.6 :seconds 36}
           (-> "2011-10-10T14:30:36.000" (js/Date.) main/seconds-of-day main/->hms)))))

(deftest ->time
  (is (= 3600 (main/->time 1)))
  (is (= 3660 (main/->time 1 1)))
  (is (= 3661 (main/->time 1 1 1))))

(deftest time-correction-factor
  (is (= 1 (main/time-correction-factor [])))
  (is (= 2 (main/time-correction-factor [{:pause (main/->time 24)}]))))

(deftest martian-remap
  (is (= {:terran 1234
          :martian {:current 0, :wrap 1, :reverse true}}
         (main/martian-remap 1234 [])))
  (is (= {:terran 2468
          :martian {:current 0, :wrap 1, :reverse true}}
         (main/martian-remap 1234 [{:start 10000, :pause (main/->time 24)}])))
  (is (= {:terran (main/->time 2)
          :martian {:current 0, :wrap 1, :reverse true}}
         (main/martian-remap (main/->time 13)
                             [{:start (main/->time 1)
                               :pause (main/->time 24)}])))
  (is (= {:terran (main/->time 1)
          :martian {:current (main/->time 12)
                    :wrap (main/->time 24)
                    :reverse true}}
         (main/martian-remap (main/->time 6 30)
                             [{:start (main/->time 1)
                               :pause (main/->time 24)}]))))
