class Entry {
    id?: number;
    category: string;
    title: string;
    description: string;
    amount: number;
    unit: string;
    done: boolean;

    constructor (category: string, title: string, description: string, amount: number, unit: string) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.amount = amount;
        this.unit = unit;
        this.done = false;
    }
}

export default Entry;