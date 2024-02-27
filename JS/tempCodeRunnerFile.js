let anime = ["Luffy","Nami","Zoro","Sanji","Usopp"]
let animeCopy=[...anime]
let animeCopy1=Array.from(animeCopy)
let animeCopy2 = animeCopy1.slice() 
let animeCopyLocation = animeCopy1.slice(4,5)
//Start and End

console.log(anime)
console.log(animeCopy)
console.log(animeCopy1)
console.log(animeCopy2)
console.log(animeCopyLocation)