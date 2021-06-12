//1  -----------------------------------------
const persona = [
	{
		name: "Sebastian",
		lastname: "Yabuki",
		age: 33,
	},
];
const {name, lastname, age} = persona[0];
let yabuki = persona.map(
	(persona) => `Mi nombre es ${name} ${lastname} y mi edad es ${age}.`
);

console.log(yabuki);

//2 -----------------------------------------

const numero1 = Number(prompt("Introduce un numero"));
const numero2 = Number(prompt("Introduce un numero"));
const numero3 = Number(prompt("Introduce un numero"));

datos = [numero1, numero2, numero3];
let resultado = datos.reduce((cubo) => {
	return (cubo = Math.pow(numero1, 3) + Math.pow(numero2, 3) + Math.pow(numero3, 3));
}, 0);

console.log(`El resultado de los cubos es :[ ${resultado}]`);

// 4 -----------------------------------------

let sumando = (...numeros) => numeros.reduce((a, b) => a + b);

console.log(sumando(8, 10, 121, -15, 720, 50, 1598, -19, 40, -71));

// 5 -----------------------------------------

const mezclas = [50, "Bravo", -2, "Alpha"];
const noString = mezclas.filter((mezcla) => typeof mezcla !== "string");

console.log(noString);

// 6 -----------------------------------------

const newArr = [-51, 20, 31, 24, -65, 62, 74, 90, 12, 1];

const mini = Math.min(...newArr);
const maxi = Math.max(...newArr);

let ascendente = newArr.filter((arr) => {
	console.log(` El orden de menor a mayor es (${mini}) - (${maxi})`);
});

// 8 -----------------------------------------

const matriz1 = [5, 22, 83, 14, 75];
const matriz2 = [20, 80, 33, 29, 54];
const matriz3 = [16, 10, 2, 100, 40];

const max = Math.max(...matriz1);
const max2 = Math.max(...matriz2);
const max3 = Math.max(...matriz3);

let nuevaMatriz = [max, max2, max3];

console.log(`La nueva matriz contiene los siguientes números: [ ${nuevaMatriz}]`);

// 11 -----------------------------------------

const personas = [
	{name: "Jhon", age: 21, budget: 23000},
	{name: "Steve", age: 32, budget: 40000},
	{name: "Martin", age: 16, budget: 2700},
];

let presupuesto = personas.reduce((suma, persona) => {
	return (suma += persona.budget);
}, 0);

console.log(presupuesto);

// 12 -----------------------------------------

const students = [{name: "Steve"}, {name: "Mike"}, {name: "Jhon"}, {name: "Becky"}];

getStudents = students.map((student) => {
	return student.name;
});
console.log(`Los alumnos son: [ ${getStudents}]`);

// 13 -----------------------------------------

const objectToArray = {
	likes: 2,
	dislikes: 3,
	followers: 1,
};

console.log(Object.entries(objectToArray));

//14 -----------------------------------------

const variable = Number(prompt("Introduce un numero"));

const constant = 2;
const constant2 = 4;

variables = [variable, constant, constant2];

let cuadradrosSuma = variables.reduce((cuadrado) => {
	return (cuadrado =
		Math.pow(variable, 2) + Math.pow(constant, 2) + Math.pow(constant2, 2));
}, 0);

console.log(`El resultado de los cuadrados es :[ ${cuadradrosSuma}]`);

//16 -----------------------------------------

const inicializador = Number(prompt("Introduce un inicializador"));

for (let i = 0; i <= inicializador; i++) {
	console.log(i);
}

//17 -----------------------------------------

const matrizRandom = [10, 4, 1, 4, -10, -50, 32, 21];
const maximum = Math.max(...matrizRandom);
const minimum = Math.min(...matrizRandom);

let sumaMatriz = datos.reduce((sumatoria) => {
	return (sumatoria = maximum + minimum);
}, 0);

console.log(`La suma de ${maximum} y ${minimum} es : ${sumaMatriz}`);

//18 -----------------------------------------

const list = [14, "Goliat", 0.4, "Prismo", 40, 12];

let filtrados = list.filter((lista) => Number.isInteger(lista));

console.log(`${filtrados}`);

//21 -----------------------------------------

const cadenaPalabras = ["Alicia", "Barry", "Coco", "David", "Nemo", "Amarilis"];

cadenaPalabras.forEach((pez, index) => {
	if (pez === "Nemo") {
		console.log(`Encontré a Nemo en la posición: ${index}`);
	}
});
