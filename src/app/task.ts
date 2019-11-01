import { SubTask } from './subTask';

export class Task {
    id : number;
    name : string;
    status : boolean;
    subTask : SubTask[];
    desc : string;
}