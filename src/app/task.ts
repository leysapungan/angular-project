
export class Task {
    id: number;
    level: number;
    name: string;
    status: boolean;
    hidden: boolean;
    importance: number;
    attributes: Attr[];
    subTask: Task[];
}

export class Attr {
    startDate: string;
    endDate: string;
    assignee: string[];
    minDate: string;
    maxDate: string;
}
