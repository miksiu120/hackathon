const burgerBtn = document.querySelector(".nav__burger")
const mobileNavBtn = document.querySelector(".mobileNav__arrow")
const mobileNav = document.querySelector(".mobileNav")
const navList = document.querySelectorAll(".mobileNav__menu-item")
let titbitBtn = document.querySelector(".tidbits--btn")
let titbit = document.querySelector(".tidbits__tidbit")
const titbits = [
    "Butelki, torebki śniadaniowe bądź torby na zakupy stanowią ok. 7% masy wszystkich śmieci, ale zajmują dużo miejsca, niemal 30% wszystkich odpadów.",
    "Do produkcji tony papieru, trzeba wyciąć ok. 17 drzew.",
    "Plastikowa butelka rozkłada się od 100 do 1000 lat.",
    "Grabba ma najmniej śmieszne żarty na świecie.",
    "Przeciętny Polak produkuje około 350kg śmieci rocznie!", 
    "Według danych ONZ co roku przez śmieci w oceanach ginie ponad milion zwierząt.",
    "Wielka Pacyficzna Plama Śmieci ma powierzchnie wynoszącą 1.6 mln km²",
    "45 tysięcy Polaków umiera co roku z powodu złej jakości powietrza",
    "W Polsce marnuje się 9 mln ton jedzenia rocznie.",
    "Foliowa torba rozkłada się około 300 lat"
]
console.log(titbitBtn)
console.log(titbit)
const randomNumber = (min, max) => {
   return Math.floor(Math.random()*(max-min)+min)
}

const changeTidbit= function(){
    titbit.innerText=titbits[randomNumber(0,12)];
}


const  moveMobileNav  = function() {
    mobileNav.classList.toggle("move");
}
const  moveBackMobileNav  = function() {
    mobileNav.classList.toggle("move");
}


setInterval(console.log("Siema"),500)
titbitBtn.addEventListener("click",changeTidbit)
burgerBtn.addEventListener("click", moveMobileNav)
mobileNavBtn.addEventListener("click", moveBackMobileNav)
navList.forEach(x =>{
    x.addEventListener("click",moveBackMobileNav)
})
