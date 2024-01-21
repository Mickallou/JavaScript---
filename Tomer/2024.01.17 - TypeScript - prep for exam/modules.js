export var GRANT_STATUS1;
(function (GRANT_STATUS1) {
    GRANT_STATUS1["OPENED"] = "Opened";
    GRANT_STATUS1["APPLIED"] = "Applied";
    GRANT_STATUS1["IN_PROCESS"] = "In Process";
    GRANT_STATUS1["REJECTED"] = "Rejected";
    GRANT_STATUS1["APPROVED"] = "Approved"; // 4
})(GRANT_STATUS1 || (GRANT_STATUS1 = {}));
export default class GrandApplication1 {
    constructor(grantValue) {
        this.grantValue = grantValue;
        this.status = GRANT_STATUS1.OPENED;
    }
    printStatus() {
        console.log(`Status: ${this.status}`);
    }
    moveToNextStage() {
        if (this.status == GRANT_STATUS1.OPENED) {
            this.status = GRANT_STATUS1.APPLIED;
        }
    }
}
