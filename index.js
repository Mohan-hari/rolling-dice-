function rollDice(){
    var dies1 = document.getElementById("die1");
    var dies2=  document.getElementById("die2");
    var status= document.getElementById("status");
    var d1 =Math.floor(Math.random()*6)+1;
    var d2=Math.floor(Math.random()*6)+1;
    var diceTotal =d1+d2;
    dies1.innerHTML=d1;
    dies2.innerHTML=d2;
status.innerHTML="You rolled " +diceTotal+".";
if(d1==d2){
    status.innerHTML+="DOUBLES! you get a free turn!! give a chance to other player";
}
}

