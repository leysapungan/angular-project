
export class Task {
    id : number;
    level : number;
    name : string;
    status : boolean;
    subTask : Task[];
    desc : string;

}

/*
export class Task {
    id: number;
    level: number;
    name: string;
    status: boolean;
    hidden: boolean;
    attributes: object[];
}

export class Attr {
    startDate: timeStamp();
    endDate: timeStamp();
    assignee: object[];
}



*/