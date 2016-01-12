var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");

var diceValues = [1, 2, 3, 4, 5, 6];
var button = document.getElementById("rollbutton")
var result1 = document.getElementById("result1")
var result2 = document.getElementById("result2")
var result3 = document.getElementById("result3")
var result4 = document.getElementById("result4")
var answer1;
var answer2;
var answer3;
var answer4;
var dropDown = document.getElementById("dropdownbox")

button.addEventListener("click", rollDie);

function rollDie(){
    

    if (dropDown.value == "1"){
    answer1= diceValues[Math.floor(Math.random()*diceValues.length)];
    answer2= "";
    answer3= "";
    answer4= "";
    result1.innerHTML = answer1;
    result2.innerHTML = answer2;
    result3.innerHTML = answer3;
    result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "2"){
       answer1 = diceValues[Math.floor(Math.random()*diceValues.length)];
       answer2 = diceValues[Math.floor(Math.random()*diceValues.length)];
       answer3= "";
       answer4= "";
       result1.innerHTML = answer1;
       result2.innerHTML = answer2;
       result3.innerHTML = answer3;
       result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "3"){
        answer1= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer2= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer3= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer4= "";
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "4"){
        answer1= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer2= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer3= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer4= diceValues[Math.floor(Math.random()*diceValues.length)];
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
}