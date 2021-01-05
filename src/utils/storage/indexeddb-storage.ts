import Dexie from "dexie";

interface IReminder {
    id?: number;
    content?: string;
    date?: string;
    repeat?: boolean;
}

export class IndexedDBStorage extends Dexie {
    reminder: Dexie.Table<IReminder, number>;

    constructor() {
        super("IndexedDBStorage");
        this.version(1).stores({
            reminder: "++id,content,date,repeat",
        });
    }
}
