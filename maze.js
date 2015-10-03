var loser = false;
var i=0;

window.onload = function(){
	$("start").onmouseover = startGame;
};

function playGame(){
	$("end").onmouseover = endGame;
	var boundary = $$("div#maze div.boundary");
	for(i=0;i<boundary.length;i++){		
		boundary[i].onmouseover = changeToRed;
	}
}

function changeToRed(){
	loser = true;
	var boundary = $$("div#maze div.boundary");
	for(i=0;i<boundary.length;i++){	
	boundary[i].addClassName("youlose");
	}
	endGame();		
}

function startGame(){
	loser = false;
	$("maze").onmouseleave = changeToRed;
	$("status").textContent = "MAKE IT TO THE END";
	var boundary = $$("div#maze div.boundary");
	for(i=0;i<boundary.length;i++){	
		boundary[i].removeClassName("youlose");
	}	
	playGame();
}

function endGame(){
	if(!loser){
		$("status").textContent = "YOU WIN! :]";
	}
	else{
		 $("status").textContent = "TRY AGAIN!";
	}
}