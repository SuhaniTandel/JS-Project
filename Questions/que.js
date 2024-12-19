//Question-1

function checkNumber(Number) {
//let number = -5;

    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }

    if (number > 0) {
        console.log(`${number} is a positive number.`);
    } else if (number < 0) {
        console.log(`${number} is a negative number.`);
    } else {
        console.log(`${number} is zero.`);
    }
}

//input
//number(-5);
//output
//-5 is an odd number
//-5 is a negative number

//Question-2

function natural(N){
let n = 10;
let sum = (N * (N + 1)) / 2;
console.log(`The sum of the first ${N} natural numbers is ${sum}.`);
}

//output
//The sum of the first 10 natural numbers is 55

//Question-3

function factorial(num){
    let n = 5;
    let factorial=1;
    if(num>=0){
        for(let i=1;i<=num;i++){
            factorial*=1
        }
        console.log(`The factorial of ${number} is ${factorial}.`);
    } 
    else {
        console.log("Please enter a non-negative integer.");
    }
}


