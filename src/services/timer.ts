/**
 * @class Timer
 * @description A simple timer class that can be used to start, stop, and reset a timer.
 * @param {number} min - The number of minutes to start the timer with.
 * @param {number} sec - The number of seconds to start the timer with.
 * @param {function} onTimerComplete - A callback function that will be called when the timer reaches 0.
 * @example
 * const timer = new Timer({min: 1, sec: 30}, () => console.log('Timer Complete!'));
 * timer.startTimer();
 * timer.stopTimer();
 * timer.getRemainingTime();
 */

export class Timer {
    startTime = 0;
    endTimer = 0;
    elapsedTime = 0;
    targetTime = 0;
    isRunning = false;
    interval = 0;
    remainingTime = 0;
    laps = 0;
    initialDuration = 0;
    onTimerComplete = (fn:any)=>{fn()};
    isComplete = false;
    constructor(props: {min: number, sec: number}, callback: (fn:()=>{}) => void) {
        this.initialDuration = props.min *60*1000+ props.sec*1000;
        this.remainingTime = this.initialDuration;
        this.onTimerComplete = callback;
    }
    getRemainingTime() {
        const minutes = Math.floor(this.remainingTime/1000/60) % 60
        const seconds = Math.floor(this.remainingTime/1000) % 60
        if(this.remainingTime <= 0) return '0 : 00'
        return `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`
    }
    startTimer() {
        this.startTime = Date.now()-this.elapsedTime;
        this.isRunning = true;
        this.interval = setInterval(() => {
            if (this.isRunning) {
                this.elapsedTime =  Date.now() - this.startTime ;
                this.remainingTime = this.initialDuration - this.elapsedTime;
                if(this.remainingTime <= 50){
                    this.stopTimer();
                    this.isComplete = true;
                    this.onTimerComplete(()=> console.log("Timer Complete: ", this.elapsedTime, "ms"));
                }
            }
        }, 100) as unknown as number;
    }
    stopTimer() {
        this.isRunning = false;
        clearInterval(this.interval);
    }
  }