const operate = (method, a ,b) => {
    switch(method){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'X':
            return a * b;
        case '÷':
            return a / b;
        case 'exponent':
            return a ** b;

    }
}