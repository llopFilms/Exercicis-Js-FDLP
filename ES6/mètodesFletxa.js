//map
const numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.map((element) => element * 10);
console.log(numbers2);

const persons = [
	{ firstname: "Malcom", lastname: "Reynolds" },
	{ firstname: "Kaylee", lastname: "Frye" },
	{ firstname: "Jayne", lastname: "Cobb" },
];

function getFullName(item) {
	return [item.firstname, item.lastname].join(" ");
}
console.log(persons.map(getFullName));
console.log(
	persons.map((element) => `${element.firstname} ${element.lastname}`)
);

//reduce
console.log(numbers.reduce((a, b) => a + b, 100));

//sort
const lletres = ["a", "f", "t", "d", "u"];
console.log(lletres.sort());

const numbers3 = [1, 33, 55, 23, 123, 13, 57, 2, 6];
console.log(numbers3.sort((a, b) => a - b));
console.log(numbers3.sort((a, b) => b - a));
//minim i màxim
console.log(numbers3[numbers3.length - 1]);
console.log(numbers3[0]);

console.log(Math.max.apply(null, numbers3));
console.log(Math.min.apply(null, numbers3));
const numbers4 = numbers3.join(",");
console.log(numbers4);
const numbers5 = numbers4.split(",");
console.log(numbers5);
const numbers6 = numbers5.map((element) => Number(element));
console.log(numbers6);

let numbers7 = "",
	element = "",
	numbers8,
	caracter = "";
for (let caracter of numbers4) {
	if (caracter == "," || caracter == numbers4.length - 1) {
		numbers7 += `${element}`;
		element = "";
	}
	element += caracter;
}
console.log(numbers7);
console.log(Math.min(numbers7));

console.log(...numbers3);
console.log(Math.min(...numbers3));
console.log(Math.max.apply(null, numbers3));

const cars = [
	{ type: "Volvo", year: 2016 },
	{ type: "Saab", year: 2001 },
	{ type: "BMW", year: 2010 },
];
console.log(cars.sort((a, b) => a.year - b.year));

//filter
const ages = [32, 33, 16, 40];
console.log(ages.filter((age) => age > 22));

//forEach
const fruits = ["apple", "orange", "cherry"];
fruits.forEach((element) => {
	console.log(element + " molt bona!");
});

const fruitsB = fruits.forEach((element) => {
	console.log(element + " molt bona!");
});
console.log(fruitsB);
const fruitsC = [];
fruits.forEach((element) => {
	element = element + " molt bona!";
	fruitsC.push(element);
});
console.log(fruitsC);

const fruits2 = ["apple", "orange", "cherry"];
fruits2.forEach((element) => {
	let llista = "";
	llista += element + " molt bona! ";
	console.log(llista);
});
const fruits3 = fruits2.map((element) => element + " molt bona!");
console.log(fruits3);

fruits.forEach((element, index) => console.log(index + ": " + element));

fruits.forEach((element, index) => {
	let llista2 = "";
	llista2 += index + ": " + element + " ";
	console.log(llista2);
});

const fruits4 = fruits.map((element, index) => index + ": " + element);
console.log(fruits4);

const car = {
	model: "Fiesta",
	manufacturer: "Ford",
	fullName: function () {
		return `${this.manufacturer} ${this.model}`;
	},
};
console.log(car.fullName());

const car2 = {
	model: "Fiesta",
	manufacturer: "Ford",
	fullName() {
		return `${this.manufacturer} ${this.model}`;
	},
};
console.log(car2.fullName());

const car3 = {
	model: "Fiesta",
	manufacturer: "Ford",
	fullName: () => `${this.manufacturer} ${this.model}`,
};
console.log(car3.fullName());

