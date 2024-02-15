let greetingMsg = "Welcome bro"
let student ='Mengseu'
const name=`Hello ${greetingMsg} My name is ${student}`
console.log(name) 
let card = `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sokny</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
`
let select=document.querySelector('#course')
select.innerHTML=card

let img = `<br>
    <img src="../Image/aki.jpg" width="500">
` //image display
let selectImg = document.querySelector('#image')
selectImg.innerHTML=img

let isStudent = true;
let isGrade = true;

console.log(isStudent+isGrade*5)

let a=undefined

let none=null;
