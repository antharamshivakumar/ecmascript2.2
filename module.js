//Create a module ‘calculation’, then define some methods like add, subtract, multiply and square. Then use this module in your different file. 

function generateRandom() {
    return Math.random();
}

function sum(a, b) {
    return a + b;
}

function generateSub() {
    return Math.Sub();
}


function sub(a, b) {
    return a - b;
}

function generateMul() {
    return Math.Mul();
}


function mul(a, b) {
    return a * b;
}

function generateDiv() {
    return Math.Div();
}


function div(a, b) {
    return a / b;
}

export { generateRandom, sum }
export { generateSub, sub}
export {generateMul, mul}
export {generateDiv, div}
