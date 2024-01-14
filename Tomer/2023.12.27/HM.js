class TimeUtil {
    clock;

    constructor(tzIsraelOffetHours) {
        this.clock = new Date();
        this.clock.setMinutes(this.clock.getMinutes() + (tzIsraelOffetHours * 60));
    }

    displayTimerInDiv(divId) {
        setInterval(() => {
            const hours = this.clock.getHours().toString().padStart(2, '0');
            const minutes = this.clock.getMinutes().toString().padStart(2, '0');
            const seconds = this.clock.getSeconds().toString().padStart(2, '0');

            document.getElementById(divId).innerHTML = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
}

export default TimeUtil;