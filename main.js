// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


//globální proměnné:
let hunter, hunterX, hunterY, hunterWidth, hunterHeight;
let coin, coinX, coinY, coinWidth, coinHeight;


document.addEventListener("keydown", musicPlay);
function musicPlay() {
    document.getElementById ("hudba").play();
}



//funkce při načtení stránky
function startingPosition (){

	hunter = document.getElementById("panacek");
	coin = document.getElementById("mince");

	hunterWidth = hunter.width;
	hunterHeight = hunter.height;

	hunterX = Math.round(window.innerWidth / 2 - hunterWidth / 2);
	hunterY = Math.round(window.innerHeight / 2 - hunterHeight / 2);
	
	placeHunter();

	coinWidth = coin.width;
	coinHeight = coin.height;

	newPositionCoin();
	
}

//umístění huntera na stránce na střed
function placeHunter () {
	hunter.style.left = hunterX + "px";
	hunter.style.top = hunterY + "px";
}

//náhodné umístění mince na stránce
function newPositionCoin() {
	coinX = Math.round(Math.random() * (window.innerWidth - coinWidth));
	coinY = Math.round(Math.random()* (window.innerHeight - coinHeight));
	coin.style.left = coinX + "px";
	coin.style.top = coinY + "px";
}


function hunterMoving(udalost) {
	if (udalost.key === "ArrowLeft") {
		hunterX -= 10;
		if (hunterX < 0) {
			hunterX = 0;
		}
		hunter.src = "obrazky/panacek-vlevo.png";
		
	}

	if (udalost.key === "ArrowRight") {
		hunterX += 10;
		if (hunterX + hunterWidth > window.innerWidth) {
			hunterX = window.innerWidth - hunterWidth;
		}
		hunter.src = "obrazky/panacek-vpravo.png";
		
	}

	
	if (udalost.key === "ArrowUp") {
		hunterY -= 10;
		if (hunterY < 0) {
			hunterY = 0;
		}
		hunter.src = "obrazky/panacek-nahoru.png";
		
	}


	if (udalost.key === "ArrowDown") {
		hunterY += 10;
		if (hunterY + hunterHeight > window.innerHeight) {
			hunterY = window.innerHeight - hunterHeight;
		}
		hunter.src = "obrazky/panacek.png";
		
	}
	placeHunter();
	
	objectsMeetingPoint()
}


let odstavec = document.querySelector("#odstavec")


function ChangeFontSize(){
var fontSize = parseInt(window.getComputedStyle(odstavec).fontSize);

odstavec.style.fontSize = fontSize + 1 + "px";
}




function objectsMeetingPoint() {
	if (!( hunterX + hunterWidth < coinX || coinX + coinWidth < hunterX || hunterY + hunterHeight < coinY || coinY + coinHeight < hunterY)) {
		newPositionCoin();
		document.getElementById("zvukmince").play();	

		let score = document.getElementById("score");
		var scoreCounter = parseInt(document.getElementById("score").innerText) + 1;	

		score.innerHTML = scoreCounter;	
	}

	if (scoreCounter > 5){
		document.getElementById("zvukfanfara").play();
		alert("Vítěz");
	}
	
}

