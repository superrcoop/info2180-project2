"use strict";
var tiles; 
var y;
var x;


window.onload = function (){
	var puzzleArea = document.getElementById('puzzlearea');
	tiles = puzzleArea.getElementsByTagName('div'); 
	for (var i=0; i<tiles.length; i++) {
		tiles[i].className = 'puzzlepiece'; 
		tiles[i].style.left = (i%4*100)+'px'; 
		tiles[i].style.top = (parseInt(i/4)*100) + 'px'; 
		tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;
		tiles[i].onclick = function(){
			if (checkMove(parseInt(this.innerHTML))) {
				swap(this.innerHTML-1); 
				if (finish()){
					win(); 
				}
				return;
			}
		};
	}

	var shuffle = document.getElementById('shufflebutton'); 
	x = '300px'; 
	y = '300px';

	shuffle.onclick = function(){
		for (var i=0; i<300; i++) {
			var rand = parseInt(Math.random()* 100) %4; 
			if (rand == 0){
				var temp = up(x, y); 
				if ( temp != -1){
					swap(temp);
				}
			}
			if (rand == 1){
				var temp = down(x, y);
				if ( temp != -1) {
					swap(temp);
				}
			}

			if (rand == 2){
				var temp = left(x, y);
				if ( temp != -1){
					swap(temp);
				}
			}
			if (rand == 3){
				var temp = right(x, y);
				if (temp != -1){
					swap(temp);
				}
			}
		}
	};
};

function checkMove(position){
	if (left(x,y) == (position-1))
	{
		return true;
	}
	if (down(x,y) == (position-1))
	{
		return true;
	}
	if (up(x,y) == (position-1))
	{
		return true;
	}
	if (right(x,y) == (position-1))
	{
		return true;
	}
}

function win(){
	document.getElementsByTagName('overall')[0].style.backgroundImage= "url('Winner.jpg')";
	document.getElementsByClassName('explanation')[0].style.visibility="hidden"; //hides text when user is being notified
}

function finish(){
	for (var i = 0; i < tiles.length; i++){
		var top = parseInt(tiles[i].style.top);
		var left = parseInt(tiles[i].style.left);
		if (left != (i%4*100) || top != parseInt(i/4)*100){
			return false;
		}
	}
	return true;
}

function swap (position){
	var temp = tiles[position].style.top;
	tiles[position].style.top = y;
	y = temp;
	temp = tiles[position].style.left;
	tiles[position].style.left = x;
	x = temp;
}

function left(x, y){
	var xCord = parseInt(x);
	var yCord = parseInt(y);
	if (xCord > 0){
		for (var i = 0; i < tiles.length; i++){
			if (parseInt(tiles[i].style.left) + 100 == xCord && parseInt(tiles[i].style.top) == yCord){
				return i;
			} 
		}
	}
	else{
		return -1;
	}
}

function right (x, y){
	var xCord = parseInt(x);
	var yCord = parseInt(y);
	if (xCord < 300){
		for (var i =0; i<tiles.length; i++){
			if (parseInt(tiles[i].style.left) - 100 == xCord && parseInt(tiles[i].style.top) == yCord){
				return i;
			}
		}
	}
	else{
		return -1;
	} 
}

function up(x, y){
	var xCord = parseInt(x);
	var yCord = parseInt(y);
	if (yCord > 0){
		for (var i=0; i<tiles.length; i++){
			if (parseInt(tiles[i].style.top) + 100 == yCord && parseInt(tiles[i].style.left) == xCord){
				return i;
			}
		} 
	}
	else{
		return -1;
	}
}



function down (x, y){
	var xCord = parseInt(x);
	var yCord = parseInt(y);
	if (yCord < 300){
		for (var i=0; i<tiles.length; i++){
			if (parseInt(tiles[i].style.top) - 100 == yCord && parseInt(tiles[i].style.left) == xCord){
				return i;
			}
		}
	}
	else{
		return -1;
	} 
}

