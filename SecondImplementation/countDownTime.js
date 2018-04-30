class CountDownTime {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
    }

    static get DefaultPomodoroTime(){
        return new CountDownTime(24,59);
    }
}


export default CountDownTime;