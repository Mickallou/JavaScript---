"use strict";
// Regular use of a union type
const myArr2 = [0, 'Hello', true];
const myArr3 = [0, 'Hello', true];
// Enums
var GRANT_STATUS;
(function (GRANT_STATUS) {
    GRANT_STATUS["OPENED"] = "Opened";
    GRANT_STATUS["APPLIED"] = "Applied";
    GRANT_STATUS["IN_PROCESS"] = "In Process";
    GRANT_STATUS["REJECTED"] = "Rejected";
    GRANT_STATUS["APPROVED"] = "Approved"; // 4
})(GRANT_STATUS || (GRANT_STATUS = {}));
class GrandApplication {
    constructor(grantValue) {
        this.grantValue = grantValue;
        this.status = GRANT_STATUS.OPENED;
    }
    printStatus() {
        console.log(`Status: ${this.status}`);
    }
    moveToNextStage() {
        if (this.status == GRANT_STATUS.OPENED) {
            this.status = GRANT_STATUS.APPLIED;
        }
    }
}
const myGrant = new GrandApplication(1000);
myGrant.printStatus(); // Opened - 0
myGrant.moveToNextStage();
myGrant.printStatus(); // Applied - 1
