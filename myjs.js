var userscore = 0 ;
var computerscore = 0 ;
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div= document.getElementById('s');
var computerscore_span=document.getElementById('computerscore');
var userscore_span=document.getElementById('userscore');
var resulttxt_p=document.getElementById('resulttxt');
var cchoice;
var uchoice;
var runtime=0;
var cooldown = 0;
	
function compchoice(){
cchoice = Math.random();
if (cchoice < 0.34){
	cchoice = r;
}
else if (cchoice <= 0.67) {
	cchoice = p;
}
else {
	cchoice= s;
}}



function game () {


if((uchoice==r && cchoice==s) || (uchoice==p && cchoice==r) || (uchoice==s && cchoice==p))	{
	win();
}

	else if((uchoice==r && cchoice==p) || (uchoice==p && cchoice==s) || (uchoice==s && cchoice==r))	{
	lose();
	}

		else{
			draw();
		}
}

function rchoice(){
	uchoice=r;
}
function pchoice(){
	uchoice=p;
}
function schoice(){
	uchoice=s;
}



function win(){
	userscore++;
	console.log("You win");
	userscore_span.innerHTML = userscore ;	
	switch (uchoice) {
    case r:
		resulttxt_p.innerHTML= 'Rock beats Scissors, you WIN!';
		rock_div.style.backgroundColor='blue';
		scissors_div.style.backgroundColor='red';
		break;
    case p:
		resulttxt_p.innerHTML= 'Paper beats Rock, you WIN!';
		paper_div.style.backgroundColor='blue';
		rock_div.style.backgroundColor='red';
        break;
    case s:
		resulttxt_p.innerHTML= 'Scissors beats Paper, you WIN!';
		scissors_div.style.backgroundColor='blue';
		paper_div.style.backgroundColor='red';
        break;
	}
}

function lose(){
	computerscore++;
	console.log("You lose");
	computerscore_span.innerHTML = computerscore;
	switch (cchoice) {
    case r:
		resulttxt_p.innerHTML= 'Rock beats Scissors, you LOSE!';
		rock_div.style.backgroundColor='red';
		scissors_div.style.backgroundColor='blue';
		break;
    case p:
		resulttxt_p.innerHTML= 'Paper beats Rock, you LOSE!';
		paper_div.style.backgroundColor='red';
		rock_div.style.backgroundColor='blue';
		break;
    case s:
		resulttxt_p.innerHTML= 'Scissors beats Paper, you LOSE!';
		scissors_div.style.backgroundColor='red';
		paper_div.style.backgroundColor='blue';
        break;
	}
}

function draw(uchoice, cchoice){
	console.log("It's a drawwwww");
	resulttxt_p.innerHTML= 'Great minds think alike... Awkward...';
	rock_div.style.backgroundColor='#b203a8';
	paper_div.style.backgroundColor='#b203a8';
	scissors_div.style.backgroundColor='#b203a8';

}
 
function clock () {
		runtime++;
		setTimeout ( "clock()", 1000 );
}

function main(){


	rock_div.addEventListener('click', function() {
		if (runtime-cooldown>1) {
		cooldown = runtime;
		rchoice();
		compchoice();
		game();
		setTimeout(function() {
		rock_div.style.backgroundColor = "initial";
		paper_div.style.backgroundColor = "initial";
		scissors_div.style.backgroundColor = "initial";}, 1200);
		}})
	paper_div.addEventListener('click', function() {
		if (runtime-cooldown>1) {
		cooldown = runtime;
		pchoice();
		compchoice();
		game();
		setTimeout(function() {
		rock_div.style.backgroundColor = "initial";
		paper_div.style.backgroundColor = "initial";
		scissors_div.style.backgroundColor = "initial";}, 1200);
		}})
	scissors_div.addEventListener('click', function() {
		if (runtime-cooldown>1) {
		cooldown = runtime;
		schoice();
		compchoice();
		game();
		setTimeout(function() {
		rock_div.style.backgroundColor = "initial";
		paper_div.style.backgroundColor = "initial";
		scissors_div.style.backgroundColor = "initial";}, 1200);
	}})
}

	
clock();
main();



