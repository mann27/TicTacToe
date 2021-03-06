var p1=0,p2=0;
function startGame(){
	for(var i=1;i<=9;i++)
	{
		clearBox(i);
	}
	document.turn="X";	//global variables for turn and winner
	document.winner=null;
	document.draw=null;
	setMessage(document.turn+" gets to start");
}
var player1=document.querySelector("#p1");
var player2=document.querySelector("#p2");
var resetScore=document.querySelector("#resetScore");

resetScore.addEventListener("click",function(){
   p1=0;
   p2=0;
   player1.textContent=p1;
   player2.textContent=p2;
});


document.getElementById("gameon").style.display="none";
function textChange()
{
		document.getElementById("gameon").style.display="block";
}

function setMessage(msg)
{
	document.getElementById("message").innerText=msg;
}

function nextMove(td)
{
	if(document.winner!=null)
	{
		setMessage(document.turn+" already won!!");
	}
	else if(document.draw)
	{
		setMessage("Game's a draw! This calls for a tiebreaker!");
	}
	else if(td.innerText==''){
		td.innerText=document.turn;
		td.innerText=document.turn;
		switchTurn();
	}
	else
	{
		setMessage("Pick another square");
	}
}

function switchTurn()
{
	if(checkWinner(document.turn)==true)
	{
		setMessage(document.turn+" wins");
		document.winner=document.turn;
		if(document.turn=="X")
          {p1++;
        player1.textContent=p1;}
          else
          {p2++;
        player2.textContent=p2;}
	}
	else if(checkDraw())
	{
		setMessage("Game's a draw! This calls for a tiebreaker!");
		document.draw=true;
	}
	else
	{
	if(document.turn=="X")
		document.turn="O";
	else
		document.turn="X";
	setMessage("Its "+document.turn+"'s turn now.");
	}
}

function checkWinner(move)
{
	var result= false;
	if(checkRow(1,2,3,move)==true||
	checkRow(4,5,6,move)==true||
	checkRow(7,8,9,move)==true||
	checkRow(1,4,7,move)==true||
	checkRow(2,5,8,move)==true||
	checkRow(3,6,9,move)==true||
	checkRow(1,5,9,move)==true||
	checkRow(3,5,7,move)==true)
	{
		result=true;
	}
	return result;
}

function checkDraw()
{
	var result=true;
	for(var i=1;i<=9;i++)
	{
		if(document.getElementById("s"+i).innerText=='')
		{
			result=false;
		}
	}
	return result;
}

function checkRow(a,b,c,move)
{
	var result= false;
	if(getbox(a)== move && getbox(b)== move && getbox(c)== move)
	{
		result=true;
	}
	return result;
}

function getbox(number)
{
	return document.getElementById("s"+number).innerText;
}

function clearBox(number)
{
	document.getElementById("s"+number).innerText='';
}
