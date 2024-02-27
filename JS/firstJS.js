let greetingMsg = "Welcome bro"
let student ='Mengseu'
const name=`Hello ${greetingMsg} My name is ${student}`
console.log(name) 
// Card content template
let cardContent = `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sokny</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
`;

// Get the select element
let select = document.querySelector('#course');

// Number of cards to output
let numCards = 4;

// Loop to output cards
for (let i = 0; i < numCards; i++) {
    select.innerHTML += cardContent;
}

let isStudent = true;
let isGrade = true;

console.log(isStudent+isGrade*5)

let a=undefined

let none=null;

// let num1= prompt("Enter num1:")
// let num2=prompt("Enter num2:")

// console.log(num1)
// console.log(num2)
// //Convert the string number to number 
// let re = document.getElementById('result');
// let op=parseInt(num1)+ parseInt(num2)
// re.innerHTML=`<h1>${op}</h1>`\


let isTeacher = false 
let msg =isTeacher ? "He is a teacher bro" : "no he not a teacher"
console.log(msg)

let animal={
    name:'kiki'
}
animal.age ??=2
console.log(animal.age)

let phoneNumber 
let nulllish = document.getElementById('example')
nulllish.innerHTML = `<h1 class="text-center">Phone Number : ${phoneNumber ?? "077 441 577"}</h1>`




