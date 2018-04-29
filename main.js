(function (window) {

    var minutesDefault = 24;
    var secondsDefault = 59;

    var currentMinutes;
    var currentSeconds;
    var intervalCallback;

    setDefaultValues();

    function setDefaultValues() {
        currentMinutes = minutesDefault;
        currentSeconds = secondsDefault;
        updateUI();
    }

    function updateTime() {
        currentSeconds = currentSeconds - 1;
        if (currentSeconds === 0) {
            currentSeconds = secondsDefault;
            currentMinutes = currentMinutes - 1;
            if (currentMinutes === 0) {
                currentMinutes = minutesDefault;
            }
        }
        updateUI();
    }

    window.start = function() {
        disableStartBtn(true);
        disableStopBtn(false);
        disableResetBtn(false);
        intervalCallback = setInterval(updateTime, 1000);
    }

    window.stop = function() {
        disableStartBtn(false);
        disableStopBtn(true);
        disableResetBtn(false);
        clearInterval(intervalCallback);
    }

    window.reset = function() {
        setDefaultValues();
        disableStartBtn(false);
        disableStopBtn(false);
        disableResetBtn(true);
        clearInterval(intervalCallback);
    }

    function updateUI() {
        document.querySelector("#spanMinutes").textContent = currentMinutes;
        document.querySelector("#spanSeconds").textContent = currentSeconds;
    }

    function disableStartBtn(disabled){
        document.querySelector("#btnStart").disabled = disabled;
    }

    function disableStopBtn(disabled){
        document.querySelector("#btnStop").disabled =disabled;
    }

    function disableResetBtn(disabled){
        document.querySelector("#btnReset").disabled = disabled;
    }

})(window);