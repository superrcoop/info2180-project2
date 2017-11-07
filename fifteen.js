
var tiles; 
var y;
var x;


window.onload = function ()
{
	var puzzleArea = document.getElementById('puzzlearea');
	tiles = puzzleArea.getElementsByTagName('div'); 
	for (var i=0; i<tiles.length; i++) 
	{
		tiles[i].className = 'puzzlepiece'; 
		tiles[i].style.left = (i%4*100)+'px'; 
		tiles[i].style.top = (parseInt(i/4)*100) + 'px'; 
		tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top; 

	}

	var shuffle = document.getElementById('shufflebutton'); 
	x = '300px'; 
	y = '300px';

	shuffle.onclick = function() 
	{
		
	};
};
