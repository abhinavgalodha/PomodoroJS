import CountDownTime from "../ThirdImplementation/CountDownTime.js";
import CountDownView from "../ThirdImplementation/view.js";
import TriState from "../ThirdImplementation/state.js";

(function (window) {

    var currentTime;
    var intervalCallback;
    var buttonsState = new TriState();
    var test = CountDownView.btnGroup;

    setDefaultValues();

    function setDefaultValues() {
        currentTime = CountDownTime.DefaultPomodoroTime;
        updateCountDownTimerUI(currentTime);
    }

    function updateTime() {
        currentTime.seconds = currentTime.seconds - 1;
        if (currentTime.seconds === 0) {
            currentTime.seconds = CountDownTime.DefaultPomodoroTime.seconds;
            currentTime.minutes = currentTime.minutes - 1;
            if (currentTime.minutes === 0) {
                currentTime.minutes = CountDownTime.DefaultPomodoroTime.minutes;
            }
        }
        updateCountDownTimerUI(currentTime);
    }

    window.start = function() {
        intervalCallback = setInterval(updateTime, 1000);
        CountDownView.enableDisableButtons(CountDownView.btnStart);
    }

    window.stop = function() {
        clearInterval(intervalCallback);
        CountDownView.enableDisableButtons(CountDownView.btnStop);
    }

    window.reset = function() {
        setDefaultValues();
        clearInterval(intervalCallback);
        CountDownView.enableDisableButtons(CountDownView.btnReset);
    }

    function updateCountDownTimerUI(currentTime) {
        CountDownView.setTimeValue(currentTime.minutes, currentTime.seconds);
    }

})(window);