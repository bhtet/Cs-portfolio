var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");

var diceValues = [1, 2, 3, 4, 5, 6];
var diceValues8Sided = [1, 2, 3, 4, 5, 6, 7, 8];
var diceValues12Sided = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var button = document.getElementById("rollbutton");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var result4 = document.getElementById("result4");
var answer1;
var answer2;
var answer3;
var answer4;
var dropDown = document.getElementById("dropdownbox");
var diceType = document.getElementById("dropdowndicetype");
var sumDropDown = document.getElementById("dropdownsum");
var sumanswer = document.getElementById("sumspan");
var uSmot = document.getElementById("smotimg");

button.addEventListener("click", rollDie);

function rollDie(){
    
    if (dropDown.value == "1" && diceType.value == "six"){
    answer1= diceValues[Math.floor(Math.random()*diceValues.length)];
    answer2= "";
    answer3= "";
    answer4= "";
    result1.innerHTML = answer1;
    result2.innerHTML = answer2;
    result3.innerHTML = answer3;
    result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "2" && diceType.value == "six"){
       answer1 = diceValues[Math.floor(Math.random()*diceValues.length)];
       answer2 = diceValues[Math.floor(Math.random()*diceValues.length)];
       answer3= "";
       answer4= "";
       result1.innerHTML = answer1;
       result2.innerHTML = answer2;
       result3.innerHTML = answer3;
       result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "3" && diceType.value == "six"){
        answer1= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer2= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer3= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer4= "";
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "4" && diceType.value == "six"){
        answer1= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer2= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer3= diceValues[Math.floor(Math.random()*diceValues.length)];
        answer4= diceValues[Math.floor(Math.random()*diceValues.length)];
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "1" && diceType.value == "eight"){
        answer1= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer2= "";
        answer3= "";
        answer4= "";
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "2" && diceType.value == "eight"){
        answer1= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer2= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer3= "";
        answer4= "";
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "3" && diceType.value == "eight"){
        answer1= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer2= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer3= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer4= "";
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "4" && diceType.value == "eight"){
        answer1= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer2= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer3= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        answer4= diceValues8Sided[Math.floor(Math.random()*diceValues8Sided.length)];
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "1" && diceType.value == "twelve"){
        answer1= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer2= "";
        answer3= "";
        answer4= "";
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "2" && diceType.value == "twelve"){
        answer1= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer2= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer3= "";
        answer4= "";
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "3" && diceType.value == "twelve"){
        answer1= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer2= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer3= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer4= "";
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (dropDown.value == "4" && diceType.value == "twelve"){
        answer1= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer2= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer3= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        answer4= diceValues12Sided[Math.floor(Math.random()*diceValues12Sided.length)];
        result1.innerHTML = answer1;
        result2.innerHTML = answer2;
        result3.innerHTML = answer3;
        result4.innerHTML = answer4;
    }
    
    if (sumDropDown.value == "yes"){
        sumanswer.innerHTML = "Sum:" + " " + (answer1 + answer2 + answer3 +answer4);
    }
}