
import CountDownTime from "../SecondImplementation/CountDownTime.js";
import CountDownView from "../SecondImplementation/view.js";

(function (window) {

    var currentTime;
    var intervalCallback;

    setDefaultValues();

    function setDefaultValues() {
        currentTime = CountDownTime.DefaultPomodoroTime;
        updateUI(currentTime);
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
        updateUI(currentTime);
    }

    window.start = function() {
        CountDownView.disableButton(CountDownView.btnStart,  true);
        CountDownView.disableButton(CountDownView.btnStop,  false);
        CountDownView.disableButton(CountDownView.btnReset,  false);
        intervalCallback = setInterval(updateTime, 1000);
    }

    window.stop = function() {
        CountDownView.disableButton(CountDownView.btnStart,  false);
        CountDownView.disableButton(CountDownView.btnStop,  true);
        CountDownView.disableButton(CountDownView.btnReset,  false);
        clearInterval(intervalCallback);
    }

    window.reset = function() {
        setDefaultValues();
        CountDownView.disableButton(CountDownView.btnStart,  false);
        CountDownView.disableButton(CountDownView.btnStop,  false);
        CountDownView.disableButton(CountDownView.btnReset,  true);
        clearInterval(intervalCallback);
    }

    function updateUI(currentTime) {
        CountDownView.setTimeValue(currentTime.minutes, currentTime.seconds);
    }

})(window);