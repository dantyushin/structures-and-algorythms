class MyMap<K, V> {
  private table: { [key: string]: [K, V] } = {};

  private getKey(key: K): string {
    return JSON.stringify(key);
  }

  set(key: K, value: V): void {
    const hashedKey = this.getKey(key);
    this.table[hashedKey] = [key, value];
  }

  get(key: K): V | undefined {
    const hashedKey = this.getKey(key);
    const pair = this.table[hashedKey];
    return pair ? pair[1] : undefined;
  }

  delete(key: K): boolean {
    const hashedKey = this.getKey(key);
    if (hashedKey in this.table) {
      delete this.table[hashedKey];
      return true;
    }
    return false;
  }

  has(key: K): boolean {
    const hashedKey = this.getKey(key);
    return hashedKey in this.table;
  }

  clear(): void {
    this.table = {};
  }

  size(): number {
    return Object.keys(this.table).length;
  }

  values(): V[] {
    return Object.values(this.table).map((pair) => pair[1]);
  }

  keys(): K[] {
    return Object.values(this.table).map((pair) => pair[0]);
  }

  entries(): [K, V][] {
    return Object.values(this.table);
  }
}

const map = new MyMap<string, number>();
map.set("a", 1);
map.set("b", 2);
map.set("a", 3);
console.log(map.get("a"));
console.log(map.has("b"));
console.log(map.size());
map.delete("b");
console.log(map.keys());
console.log(map.values());
