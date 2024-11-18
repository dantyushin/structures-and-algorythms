const dictionary = {
  apple: "яблоко",
  orange: "апельсин",
  banana: "банан",
  grape: "виноград",
  kiwi: "киви",
  lemon: "лимон",
  mango: "манго",
  nectarine: "мангостан",
  pineapple: "ананас",
  plum: "груша",
};

console.log(dictionary["apple"]);
console.log(dictionary.hasOwnProperty("mango"));
console.log("grape" in dictionary);
console.log(Object.keys(dictionary));
console.log(Object.values(dictionary));
console.log(Object.entries(dictionary));

for (const [key, value] of Object.entries(dictionary)) {
  console.log(`${key}: ${value}`);
}

const myMap = new Map();

myMap.set("apple", "яблоко");
myMap.set("orange", "апельсин");
myMap.set("banana", "банан");
console.log(myMap.get("apple"));
myMap.delete("apple");
console.log(myMap.has("apple"));
console.log(myMap.size);
console.log([...myMap.keys()]); // ["key1", 1]
console.log([...myMap.values()]); // ["value1", "value2"]
myMap.clear();
console.log(myMap.size);
