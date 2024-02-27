let anime = ["Luffy","Nami","Zoro","Sanji","Usopp"]
let animeCopy=[...anime]
let animeCopy1=Array.from(animeCopy)
let animeCopy2 = animeCopy1.slice() 
let animeCopyLocation = animeCopy1.slice(3,4) //Start and End
let animeReverse = anime.reverse()


console.log(anime)
console.log(animeCopy)
console.log(animeCopy1)
console.log(animeCopy2)
console.log(animeCopyLocation)
console.log(animeReverse)
animeCopy.pop()
console.log(`After Pop :${animeCopy}`)
console.log(animeCopy.unshift())
animeCopy.push('Robin')
console.log(`After Pop :${animeCopy}`)

console.log(animeCopy.unshift('Mengseu')) //Add
console.log(animeCopy.shift()) // Remove
console.log(animeCopy)
