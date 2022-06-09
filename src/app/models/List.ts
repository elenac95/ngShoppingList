import Entry from "./Entry";

class List {
    title: string;
    completed: boolean;
    items: Entry[];

    constructor (title: string, items: Entry[]) {
        this.title = title;
        this.completed = false;
        this.items = items;
    }
}

export default List;