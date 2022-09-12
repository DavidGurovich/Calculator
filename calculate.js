const enterNumbers = document.querySelectorAll('[number-pad]');
const operators = document.querySelectorAll('[operator]');
const deleteButton = document.getElementById('delete');
const previousState = document.querySelector('.firstDisplay');
const currentState = document.querySelector('.secondDisplay');
const tempState = document.querySelector('.temporaryDisplay');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
// const dot = document.getElementById('dot');

let valOne = "";
let valTwo = "";
let result = null;
let isdotPresent = false;
let lastOperation = "";


// event listeners
equals.addEventListener('click', solveFunction)
// dot.addEventListener('click', dotFunction)
deleteButton.addEventListener('click', deleteFunction)
clear.addEventListener('click', clearFunction)

operators.forEach((button) =>
    button.addEventListener('click', () => checkSign(button.textContent)))

enterNumbers.forEach((button) => 
    button.addEventListener('click', (e) => {
        if (isdotPresent === false && e.target.innerText === "."){
            isdotPresent = true;
        }
        else if (e.target.innerText === "." && isdotPresent === true){
            return; 
        }
        valTwo += e.target.innerText
        currentState.innerText = valTwo
    }),  
    )

function dotFunction(){

}

 





function checkSign(sign){
    if (currentSign !== null) solveFunction()
    firstValue = currentState.textContent
    currentSign = sign
    currentState.textContent = `${firstValue}${currentSign}`
    shouldResetScreen = true
   
    
}

function solveFunction() {
    
    if (currentSign === null || shouldResetScreen) return 
    secondValue = currentState.textContent
    currentState.textContent = operate(currentSign, firstValue, secondValue)
    // console.log(operate(currentSign, firstValue, secondValue))
    currentState.textContent = `${firstValue}${currentSign}${secondValue} =`
    // console.log(currentSign, firstValue, secondValue)
    currentSign = null
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