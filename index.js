function rpsGame(yourChoice){
    console.log(yourChoice.id);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numTochoice(randNum());
    console.log(botChoice);
    var results=decideWinner(humanChoice,botChoice);
    console.log(results);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
    
}

function randNum(){
    return Math.floor(Math.random()*3);
}
function numTochoice(num){
   return ['rock','paper','scissor'][num];
}

function decideWinner(myChoice,computerChoice){
var rpsDatabase= {
    'rock':{'rock':0.5,'paper':0,'scissor':1},
    'paper':{'rock':1,'paper':0.5,'scissor':0},
    'scissor':{'rock':0,'paper':1,'scissor':0.5}
};
var yourScore= rpsDatabase[myChoice][computerChoice];
var computerScore= rpsDatabase[computerChoice][myChoice];

return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===1)
    {
        return {"message":"You Win","colour":"Green"};
    }
    else if(yourScore===0)
    {
        return {"message":"You Lost","colour":"Red"};
    }
    else
    {
        return {"message":"Tied","colour":"Yellow"};
    }
}


function rpsFrontEnd(yourImageChoice,botImageChoice,finalMessage){
 var imageDatabase={
     'rock':document.getElementById('rock').src,
     'paper':document.getElementById('paper').src,
     'scissor':document.getElementById('scissor').src
 };
 document.getElementById('rock').remove();
 document.getElementById('paper').remove();
 document.getElementById('scissor').remove();

 humanDiv=document.createElement('div');
 botDiv=document.createElement('div');
 messageDiv=document.createElement('div');

 humanDiv.innerHTML= "<img src='" + imageDatabase[yourImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);  '>"
 document.getElementById('flex-box-rps-div').appendChild(humanDiv);

 messageDiv.innerHTML= "<h1 style='color:"+ finalMessage['colour']+"; font-size:60px ; padding:30px;'>"+finalMessage['message']+"</h1>";
 document.getElementById('flex-box-rps-div').appendChild(messageDiv);

 botDiv.innerHTML= "<img src='" + imageDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,233,1);'>"
 document.getElementById('flex-box-rps-div').appendChild(botDiv);
    


}

function playAgain()
{
    location.reload();

}
