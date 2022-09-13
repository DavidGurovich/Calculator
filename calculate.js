const enterNumbers = document.querySelectorAll('[number-pad]');
const operators = document.querySelectorAll('[operator]');
const deleteButton = document.getElementById('delete');
const previousState = document.querySelector('.firstDisplay');
const currentState = document.querySelector('.secondDisplay');
const tempState = document.querySelector('.temporaryDisplay');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');


let valOne = "";
let valTwo = "";
let result = null;
let isdotPresent = false;
let lastOperation = "";


// event listeners
// equals.addEventListener('click', )
deleteButton.addEventListener('click', deleteFunction)
clear.addEventListener('click', clearFunction)

operators.forEach((button) =>
    button.addEventListener('click', (e) => {
        if (valTwo === "") return;
        isdotPresent = false;
        const currentSign = e.target.innerText
        if (valOne && valTwo && lastOperation) {
            operate();
        }
        else {
            result = parseFloat(valTwo);
        }
        valOne += valTwo + " " + currentSign + " ";
        previousState.innerText = valOne;
        currentState.innerText = "";
        valTwo = "";
        tempState.innerText = result;
        lastOperation = currentSign;
    }))

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


equals.addEventListener('click', () => {
    if (!valOne || ! valTwo) return;
    isdotPresent = false;
    operate();
    currentState.innerText = result;
    tempState.innerText = "";
    valTwo = result;
    valOne = ""
})
 
    
const operate = () => {
    
    switch(lastOperation){
        case '+':
            result = parseFloat(result) + parseFloat(valTwo);
        case '-':
            result = parseFloat(result) - parseFloat(valTwo);
        case 'x':
            result = parseFloat(result) * parseFloat(valTwo);
        case '÷':
            result = parseFloat(result) / parseFloat(valTwo);
        case '^':
            result = parseFloat(result) ** parseFloat(valTwo);
        case '%':
            result = parseFloat(result) % parseFloat(valTwo);
    }
}

function deleteFunction(){
    currentState.textContent = currentState.textContent.toString().slice(0, -1) 
} 


function clearFunction(){
    currentState.textContent = '0'
}   