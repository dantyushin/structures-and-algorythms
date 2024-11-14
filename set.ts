class MySet<T> {
    private table: { [key: string]: T } = {};

    private getKey(value: T): string {
        return JSON.stringify(value);
    }

    add(value: T): void {
        const key = this.getKey(value);
        this.table[key] = value;
    }

    delete(value: T): boolean {
        const key = this.getKey(value);
        if (key in this.table) {
            delete this.table[key];
            return true;
        }
        return false;
    }

    has(value: T): boolean {
        const key = this.getKey(value);
        return key in this.table;
    }

    clear(): void {
        this.table = {};
    }

    size(): number {
        return Object.keys(this.table).length;
    }

    values(): T[] {
        return Object.values(this.table);
    }
}

const set = new MySet<number>();
set.add(1);
set.add(2);
set.add(2);
console.log(set.has(1));
console.log(set.size());
set.delete(1);
console.log(set.has(1));
console.log(set.values());
