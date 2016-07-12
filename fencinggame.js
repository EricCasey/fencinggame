var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var lifeStatus;
var lives = 3;
var playerstate = 1;
var score = 0;
var killcount = 0;
var enemytype = 1;
var lastenemytype = 0;
var enemyalive = true;
var deltaXlevel1 = 10;
var inkillzone = false;
var neednewenemy = false;

//enemy 1 start point
var enemystartpoint = 310;
var enemyposition = 350;
var killzonestart = 100;
var killzoneend = 50;


function hide(target) {
    document.getElementById(target).style.display = 'none';
    startgame();
}

function startgame() {

function drawlives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Lives: "+lives, 10, 20);
}

function drawscore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+killcount*100, 250, 20);
}
function showfps() {
    ctx.font = "10px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("FPS: ", 280, 390);
}
//placeholder vvvv
function showenemytype() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(enemytype, 100, 100);
}


function drawplayer() {    
      var imageObj = new Image();
      imageObj.src = 'images/player/player_standing.png';
	  if (playerstate == 1){
		 imageObj.onload = function() {
		 		ctx.drawImage(imageObj, 29, 220);};}
     
      	  var imageObj2 = new Image();
      	  imageObj2.src = 'images/player/player_lungeUP.png';
	  	  if (playerstate == 2){
		 imageObj2.onload = function() {
		 		ctx.drawImage(imageObj2, 29, 220);
    };}
		
		  var imageObj3 = new Image();
      	  imageObj3.src = 'images/player/player_lunge.png';
	  	  if (playerstate == 3){
		 imageObj2.onload = function() {
        ctx.drawImage(imageObj3, 29, 220);
    };}
    
		  var imageObj4 = new Image();
      	  imageObj4.src = 'images/player/player_lungedown.png';
	  	  if (playerstate == 4){
		 imageObj4.onload = function() {
        ctx.drawImage(imageObj4, 29, 220);
    };} 
		    
}	
/////

function loadnewenemy() {
	if(enemyalive == false){
	enemyposition == enemystartpoint;

	enemyalive == true;
	}
	
	//Enemy 1 !!!
	
	if (enemytype == 1 && enemyalive == true) {
		var imageObj5 = new Image();
		imageObj5.src = 'images/enemy/enemy_lunge.png';
		imageObj5.onload = function() {
	        ctx.drawImage(imageObj5, enemyposition, 220);
	        enemyposition = enemyposition - deltaXlevel1;
        }
        
        //if enenmy is hit
        if (playerstate == 4 && enemyposition < 150 || playerstate == 2 && enemyposition < 150 || playerstate == 3 && enemyposition < 150) {
	       	

			var imageObjdead = new Image();
			imageObjdead.src = 'images/dead.png';
			imageObjdead.onload = function() {
			ctx.drawImage(imageObjdead, enemyposition, 220); 
		
	        };
	        killcount++;
	        	        score = killcount * 100;
	        enemyalive == false;
	        enemyposition = 330;
	        enemytype = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
        
       
	;};
	
	// Enemy 2 !!!
	
		if (enemytype == 2 && enemyalive == true) {
		neednewenemy == false;
		var imageObj6 = new Image();
		imageObj6.src = 'images/enemy/enemy_lunge2.png';
		imageObj6.onload = function() {
	        ctx.drawImage(imageObj6, enemyposition, 220);
	        enemyposition = enemyposition - deltaXlevel1;
        }
        
        //if enenmy is hit
        if (playerstate == 4 && enemyposition < 150 || playerstate == 2 && enemyposition < 150 || playerstate == 3 && enemyposition < 150) {
	       	enemyalive = false;

			var imageObjdead = new Image();
			imageObjdead.src = 'images/dead.png';
			imageObjdead.onload = function() {
			ctx.drawImage(imageObjdead, enemyposition, 220); 
		
	        };
	        killcount++;
	        score = killcount * 100;
	        enemyalive == false;
	        enemyposition = 330;
	        enemytype = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
       
	;};
	
	// VVV Enemy 3 //
	
	if (enemytype == 3 && enemyalive == true) {
		neednewenemy == false;
		var imageObj7 = new Image();
		imageObj7.src = 'images/enemy/enemy_flying.png';
		imageObj7.onload = function() {
	        ctx.drawImage(imageObj7, enemyposition, 170);
	        enemyposition = enemyposition - deltaXlevel1;
        }
        
        //if enenmy is hit
        if (playerstate == 2 && enemyposition < 150 || playerstate == 3 && enemyposition < 150) {
	       	enemyalive = false;

			var imageObjdead = new Image();
			imageObjdead.src = 'images/dead.png';
			imageObjdead.onload = function() {
			ctx.drawImage(imageObjdead, enemyposition, 220); 
		
	        };
	        killcount++;
	        	        score = killcount * 100;
	        	        enemyalive == false;
	        enemyposition = 330;
	        enemytype = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
        // If player is hit
        if(playerstate == 4 && enemyposition < 50 || playerstate == 1 && enemyposition < 70) {
	        
	        var imageObjdead = new Image();
			imageObjdead.src = 'images/dead.png';
			imageObjdead.onload = function() {
			ctx.drawImage(imageObjdead, 15, 220); 
	        
        };}
       
	;};

	
	
	}


//NON MECHANICAL DRAWS

function draw(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawplayer();
loadnewenemy();
}

setInterval(draw, 100);

function drawHUD(){
	drawlives();
	drawscore();
	showenemytype();
	showfps();
}
setInterval(drawHUD, 500);

//PLAYER CONTROLS

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 38 ) {
	    //or if hold = true
        playerstate = 2;
    }
    if(e.keyCode == 39) {
        playerstate = 3;
    }
    if(e.keyCode == 40) {
        playerstate = 4;
    }

}

function keyUpHandler(e) {
    if(e.keyCode == 38) {
        playerstate = 1;
    }
    if(e.keyCode == 39) {
        playerstate = 1;
    }
    if(e.keyCode == 40) {
	    playerstate = 1;
    }
}

function changemanhi(id) {
    id.innerHTML = "HI!";
    playerstate = 2
}
function changemanmid(id) {
    id.innerHTML = "MID!";
    playerstate = 3
}
function changemanlo(id) {
    id.innerHTML = "LO!";
    playerstate = 4
}



}  //emd of startgame();

