class Moment {
    constructor() {
        this.timer = 0;
        this.stopAfter = 20;
        this.interval = setInterval(() => {
            if (this.timer > this.stopAfter) {
                this.stopTimer();
            } else {
                this.triggerTimer(this.givenDateStr, this.yrs);
            }
        }, 1000);
    }

    triggerTimer(param, yrs) {
        this.givenDateStr = param;
        this.yrs = yrs;
        this.givenDate = new Date(this.givenDateStr);
        this.timestamp = `<b>Input: </b> <br> DateStr: ${this.givenDateStr} <br> Date:  ${this.givenDate} ${this.calculate(this.givenDate, this.yrs)}`;
        // console.log(`>>>>>>>>>>> ${this.timestamp} `);
        postMessage(this.timestamp);
        this.timer++;
    }

    calculate(d, y) {
        const dateMath = new DateMath(d, new Date(), y);
        return `<br><br> <b>Result:</b> Your age is <b> ${dateMath.inYears()} years </b>, <b> ${dateMath.inWeeks()} week(s)</b>, <b> ${dateMath.inMonths()} month(s) </b>, <b> ${dateMath.inDays()} days</b>, <b> ${dateMath.inHours()} hour(s)</b>, <b> ${dateMath.inMins()} minutes</b>, <b> ${dateMath.inSecs()} seconds</b>, <b> ${dateMath.inMilliSecs()} milli seconds</b>.....` +
            `<br>Your age will be <b>${dateMath.calcYears()}</b> in <b>${y}</b> years`

    }

    stopTimer() {
        console.log('Stop Updating Timer called....')
        clearInterval(this.interval);
    }
}

class DateMath {
    constructor(id, cd, yrs) {
        this.id = id; // input Date
        this.cd = cd; // current Date
        this.yrs = yrs;
        this.round = 0; // number that indicates upto how many decimals can round
    }

    calcYears() {
        const cdY = this.cd.getFullYear();
        const idY = this.id.getFullYear();
        return cdY - idY + this.yrs - 1; // deducting 1 because current year is not completed
    }

    inMilliSecs() {
        const ct = this.cd.getTime();
        const it = this.id.getTime();
        const millisecs = ((ct - it) / (24 * 3600 * 1000)) * 24 * 60 * 60 * 1000;
        return Number(Math.round(millisecs + "e" + this.round) + "e-" + this.round);
    }

    inSecs() {
        const ct = this.cd.getTime();
        const it = this.id.getTime();
        const secs = ((ct - it) / (24 * 3600 * 1000)) * 24 * 60 * 60;
        return Number(Math.round(secs + "e" + this.round) + "e-" + this.round);
    }

    inMins() {
        const ct = this.cd.getTime();
        const it = this.id.getTime();
        const mins = ((ct - it) / (24 * 3600 * 1000)) * 24 * 60
        return Number(Math.round(mins + "e" + this.round) + "e-" + this.round);
    }

    inHours() {
        const ct = this.cd.getTime();
        const it = this.id.getTime();
        return parseInt((ct - it) / (24 * 3600 * 1000)) * 24;
    }

    inDays() {
        const ct = this.cd.getTime();
        const it = this.id.getTime();
        return parseInt((ct - it) / (24 * 3600 * 1000));
    }

    inWeeks() {
        const ct = this.cd.getTime();
        const it = this.id.getTime();
        return parseInt((ct - it) / (24 * 3600 * 1000 * 7));
    }

    inMonths() {
        const cdm = this.cd.getMonth();
        const idm = this.id.getMonth();

        const cdY = this.cd.getFullYear();
        const idY = this.id.getFullYear();

        return (cdm + 12 * cdY) - (idm + 12 * idY);
    }

    inYears() {
        return parseInt(this.cd.getFullYear() - this.id.getFullYear() - 1); // deducting 1 because current year is not completed
    }
}

const moment = new Moment();
moment.triggerTimer('06/15/2014', 24);