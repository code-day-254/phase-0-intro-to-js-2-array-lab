// Write your solution here!
const cats = ["MIlo", "Otis", "Garfield"]
cats.push("Ralph");
cats.unshift("Bob");
cats.pop("Garfield");
cats.shift("Milo");
console.log(cats);
const allCats = [...cats, "Broom"];
console.log(cats);
console.log(allCats);
const myCats = ["Arnold", ...cats];
console.log(cats);
console.log(myCats);
cats.slice(0);
console.log(cats.slice(0));
cats.slice(-1)
console.log(cats);
