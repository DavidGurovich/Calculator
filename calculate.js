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



deleteButton.addEventListener('click', deleteFunction);
clear.addEventListener('click', clearFunction);



enterNumbers.forEach((button) => 
    button.addEventListener('click', (e) => {
        if (!isdotPresent && e.target.innerText === "."){
            isdotPresent = true;
        }
        else if (e.target.innerText === "." && isdotPresent){
            return; 
        }
        valTwo += e.target.innerText
        currentState.innerText = valTwo
    }),  
    )

operators.forEach((button) =>
    button.addEventListener('click', (e) => {
        if (!valTwo) return;
        isdotPresent = false;
        const currentSign = e.target.innerText;
        if (valOne && valTwo && lastOperation) {
            operate();
        }
        else {
            result = parseFloat(valTwo);
        }
        clearVar(currentSign);
        lastOperation = currentSign;
        
    }))

function clearVar(name = ""){
    valOne += valTwo + " " + name + " ";
    previousState.innerText = valOne;
    currentState.innerText = "";
    valTwo = "";
    tempState.innerText = result;
}

equals.addEventListener('click', () => {
    if (!valOne || !valTwo) return;
    isdotPresent = false;
    operate();
    clearVar();
    currentState.innerText = result;
    tempState.innerText = "";
    valTwo = result;
    valOne = "";
    
})
 
    
function operate() {
    
    switch(lastOperation){
        case '+':
            result = parseFloat(result) + parseFloat(valTwo);
            break
        case '-':
            result = parseFloat(result) - parseFloat(valTwo);
            break
        case 'x':
            result = parseFloat(result) * parseFloat(valTwo);
            break
        case '÷':
            result = parseFloat(result) / parseFloat(valTwo);
            break
        case '^':
            result = parseFloat(result) ** parseFloat(valTwo);
            break
        case '%':
            result = parseFloat(result) % parseFloat(valTwo);
            break
    }
}

function deleteFunction(){
    valTwo = "";
    currentState.textContent = ''; 
} 


function clearFunction(){
    currentState.textContent = '';
    previousState.textContent = '';
    tempState.textContent = '';
    result = '';
    valOne = '';
    valTwo = '';    
}   