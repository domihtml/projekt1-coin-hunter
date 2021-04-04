// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let hunter, hunterX, hunterY, hunterWidth, hunterHeight;
let coin, coinX, coinY, coinWidth, coinHeight;

function pageOnLoad (){
	hunter = document.getElementById("panacek");
	coin = document.getElementById("mince");
	hunterWidth = hunter.width;
	hunterHeight = hunter.height;

	hunterX = Math.round(window.innerWidth / 2 - hunterWidth / 2);
	hunterY = Math.round(window.innerHeight / 2 - hunterHeight / 2);

	placeHunter()

	coinWidth = coin.width;
	coinHeight = coin.height;

	newPositionCoin()
}

function placeHunter () {
	hunter.style.left = hunterX + "px";
	hunter.style.top = hunterY + "px";
}

function newPositionCoin() {
	coinX = Math.round(Math.random() * (window.innerWidth - coinWidth));
	coinY = Math.round(Math.random()* (window.innerHeight - coinHeight));
	coin.style.left = coinX + "px";
	coin.style.top = coinY + "px";
}
