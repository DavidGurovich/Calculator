const enterNumbers = document.querySelectorAll('[number-pad]');
const operators = document.querySelectorAll('[operator]');
const deleteButton = document.getElementById('delete');
const previousState = document.getElementById('previousState');
const currentState = document.getElementById('currentState');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const dot = document.getElementById('dot');

// event listeners
equals.addEventListener('click', solveFunction)
dot.addEventListener('click', dotFunction)
deleteButton.addEventListener('click', deleteFunction)
clear.addEventListener('click', clearFunction)

operators.forEach((button) =>
    button.addEventListener('click', () => checkSign(button.textContent)))

enterNumbers.forEach((button) => 
    button.addEventListener('click', () => updateScreen(button.textContent)),  
    )

function dotFunction(){

}

 

function updateScreen(number){
    if (currentState.textContent === '0'){
        currentState.textContent = ''
    }
    currentState.textContent += number 
    
}

let currentSign = null;
let firstValue = '';
let secondValue = '';
 

function checkSign(sign){
    //solveFunction()
    // firstValue = currentState.textContent
    currentSign = sign
    currentState.textContent += currentSign
    
}

function solveFunction() {
    console.log(currentState.textContent)
    console.log(currentSign)
    signLocation = currentState.textContent.toString().indexOf(currentSign)
    console.log(signLocation)
    firstValue = currentState.textContent.toString().slice(0, signLocation)
    console.log(firstValue)
    secondValue = currentState.textContent.toString().slice(signLocation)
    console.log(secondValue)
    currentState.textContent = operate(currentSign, firstValue, secondValue)
    operate(currentSign, firstValue, secondValue)
}

const operate = (method, a , b) => {
    a = Number(a);
    b = Number(b);
    switch(method){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'X':
            return a * b;
        case '÷':
            if (b === 0) return null 
            else {
                return a / b;
            }
        case '^':
            return a ** b;

    }
}

function deleteFunction(){
    currentState.textContent = currentState.textContent.toString().slice(0, -1) 
} 


function clearFunction(){
    currentState.textContent = '0'
}   