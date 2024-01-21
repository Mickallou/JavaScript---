export enum GRANT_STATUS1 {
    OPENED = `Opened`, // 0
    APPLIED = `Applied`, // 1
    IN_PROCESS = `In Process`, // 2
    REJECTED = `Rejected`, // 3
    APPROVED = `Approved` // 4
}

export default class GrandApplication1 {
    grantValue: number;
    status: GRANT_STATUS1;

    constructor(grantValue: number) {
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
