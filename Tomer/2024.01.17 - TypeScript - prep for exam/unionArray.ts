// Regular use of a union type
const myArr2: Array<string | number | boolean> = [0, 'Hello', true];

// Alias use of a union type
type combined = string | number | boolean;
const myArr3: Array<combined> = [0, 'Hello', true];

// Enums
enum GRANT_STATUS {
    OPENED = `Opened`, // 0
    APPLIED = `Applied`, // 1
    IN_PROCESS = `In Process`, // 2
    REJECTED = `Rejected`, // 3
    APPROVED = `Approved` // 4
}

class GrandApplication {
    grantValue: number;
    status: GRANT_STATUS;

    constructor(grantValue: number) {
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