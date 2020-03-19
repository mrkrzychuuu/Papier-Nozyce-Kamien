
var pkt1 = 0;
var pkt2 = 0;

var wybor1;
var wybor2;


var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

function odliczanie()
{

		document.getElementById(element).style.background = "red";

}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;


function start()
{
	
	
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}
