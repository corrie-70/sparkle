import Dexie from "dexie";

interface IReminder {
    id?: number;
    content?: string;
    date?: string;
    repeat?: boolean;
}

class ReminderClass implements IReminder {
    public id?: number;
    public content?: string;
    public date?: string;
    public repeat?: boolean;
    constructor(content: string, id?: number, date?: string, repeat?: boolean) {
        this.id = id;
        this.content = content;
        this.date = date;
        this.repeat = repeat;
    }
}

class IndexedDBStorage extends Dexie {
    reminder: Dexie.Table<IReminder, number>;

    constructor() {
        super("IndexedDBStorage");
        this.version(1).stores({
            reminder: "++id,content,date,repeat",
        });
        this.reminder = this.table("reminder");
        this.reminder.mapToClass(ReminderClass);
        this.reminder.add(new ReminderClass("test"));
    }
}

const db = new IndexedDBStorage();
// db.reminder.mapToClass(ReminderClass);

export async function addReminder(item: IReminder) {
    return new Promise<IReminder[]>((resolve, reject) => {
        try {
            // this.reminder.sor
            db.reminder.add(item);
        } catch (error) {
            reject(error);
        }
    });
}

export default db;
