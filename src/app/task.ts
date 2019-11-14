
export class Task {
    id : number;
    level : number;
    name : string;
    status : boolean;
    subTask : Task[];
    desc : string;
}