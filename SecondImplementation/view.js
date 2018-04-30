// Abstract the UI Elements, therefore the View is encapsulated..
// Whenever the UI Changes, No need to change a lot of files, only change this JS file.

class CountDownView{

    // Properties to abstract the UI Elements
    static get btnStart(){
        return document.querySelector("#btnStart");
    }

    static get btnStop(){
        return document.querySelector("#btnStop");
    }

    static get btnReset() {
        return document.querySelector("#btnReset");
    }

    static get spanMinutes() {
        return document.querySelector("#spanMinutes");
    }

    static get spanSeconds() {
        return document.querySelector("#spanSeconds");
    }

    // Abstract away the UI for set
    static setTimeValue(minutes, seconds){
    
        CountDownView.spanMinutes.textContent = minutes;
        CountDownView.spanSeconds.textContent = seconds;
    }

    static disableButton(button, isDisabled){
        button.disabled = isDisabled;
    }
}

export default CountDownView;