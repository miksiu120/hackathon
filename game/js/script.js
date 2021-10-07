let squares = document.querySelectorAll('.game__board-square');
let actualBinPosition = 159;
let points = document.querySelector(".game__score")


let timerID=null;
let array= [];


function getRandomAr(min, max) {
    return   parseInt(Math.random() * (max - min) + min);
}

setInterval(() =>{ 
	squares[getRandomAr(0,10)].classList.add("fruit")
},3000)
setInterval(() => {
for(let i=squares.length-1;i>=0;i--)
{
	// console.log(i)
	if(squares[i].classList.contains("fruit"))
	{
		
		if(squares[i+11]===undefined){
			squares[i].classList.remove("fruit")
			console.log("tracisz życie")
			continue

		}
		else if(squares[i+11].classList.contains("bin"))
		{
			points.textContent=10+parseInt(points.textContent);
			squares[i].classList.remove("fruit")
			console.log("prawda")
			continue
		}
		squares[i+11].classList.add("fruit")
		squares[i].classList.remove("fruit")
	}

}
},1000)

function arrowLeft() {
	if (actualBinPosition != 154) {
		squares[actualBinPosition].classList.remove('bin');
		actualBinPosition--;
		squares[actualBinPosition].classList.add('bin');
	}
}

let arrowRight = function () {
	if (actualBinPosition != 164) {
		squares[actualBinPosition].classList.remove('bin');
		actualBinPosition++;
		squares[actualBinPosition].classList.add('bin');
	}
};
document.onkeydown = function (event) {
	switch (event.keyCode) {
		case 37:
			arrowLeft();
			break;
		case 39:
			arrowRight();
			break;

	}
};