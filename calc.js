// Takes the elements with the same ids from the calc.html and fills them in for the variables in the Javascript
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");
// When the Calculate button for the calculator is clicked on, the function "doMath" is called. This function is what tells the calculator what operation to perform depending on the operation selected in the drop down menu. 
button.addEventListener("click", doMath);

// This is the function housing all of the mathematical operations for the calculator to perform. "parseInt(input1.value)" is the value in the left box of the calculator and "parseInt(input2.value)" is that value from the right box. 
function doMath() {
    // If the calculator is told to perform addition, then it will add the two values in the input boxes to give out an answer. 
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    // If the calculator is told to perform subtraction, then it will subtract the two values in the input boxes to give out an answer.
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    // If the calculator is told to perform multiplication, then it will multiply the two values in the input boxes for the answer.
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer
    }
    // If the calculator is told to divide, then it will divide the two values in the input boxes for an answer. 
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer
    }
    // If the calculator is told to perform an expotential operation, then it will raise the first number to a power equal to the second number. 
    if  (dropdown.value == "^"){
        answer = Math.pow (parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = answer
    }
    // If the calculator is told to perform a square root operation, then it will take the square root of the first number in the input boxes.
    if  (dropdown.value == "sqrt"){
        answer = Math.sqrt (parseInt(input1.value));
        display.innerHTML = answer
    }
    // If the calculator is told to perform a cube root operation, then it will take the cube root of the first number in the input boxes.
    if  (dropdown.value == "cbrt"){
        answer = Math.cbrt (parseInt(input1.value));
        display.innerHTML = answer
    }
    // If told to perform this function, then the calculator will take the nth root of the first number equal to the second number. 
    if  (dropdown.value == "nthrt"){
        answer = Math.pow (parseInt(input1.value), 1/parseInt(input2.value));
        display.innerHTML = answer
    }
}