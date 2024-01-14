export default class SportEvent {
    name;
    amoutOfParticipants;
    date;

    constructor(name, amoutOfParticipants, date) {
        this.name = name;
        this.amoutOfParticipants = amoutOfParticipants;
        this.date = date;
    }

    printEvent() {
        const str = `
        Event name : ${this.name}
        Amount of participants : ${this.amoutOfParticipants}
        Date : ${this.date}
        `;

        alert(str);
    }
}

export class Athletics extends SportEvent {
    amoutsOfGroups;
    contries;

    constructor(name, amoutOfParticipants, date, amoutsOfGroups, contries) {
        super(name, amoutOfParticipants, date);
        this.amoutsOfGroups = amoutsOfGroups;
        this.contries = contries;
    }

    printEvent() {
        const str = `
        Event name : ${this.name}
        Amount of participants : ${this.amoutOfParticipants}
        Date : ${this.date}
        Amount of groups : ${this.amoutsOfGroups}
        Contries : ${this.contries}
        `;

        alert(str);
    }
}

export class Swimming extends SportEvent {
    poolLength;
    poolWidth;

    constructor(name, amoutOfParticipants, date, poolLength, poolWidth) {
        super(name, amoutOfParticipants, date);
        this.poolLength = poolLength;
        this.poolWidth = poolWidth;
    }

    printEvent() {
        const str = `
        Event name : ${this.name}
        Amount of participants : ${this.amoutOfParticipants}
        Date : ${this.date}
        Pool length : ${this.poolLength}
        Pool width : ${this.poolWidth}
        `;

        alert(str);
    }
}