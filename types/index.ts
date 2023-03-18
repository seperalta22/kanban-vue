export type ID = string;

export interface Columns {
	title: string;
	id: ID;
	tasks: Task[];
}

export interface Task {
	id: ID;
	title: string;
	createdAt: Date;
}
