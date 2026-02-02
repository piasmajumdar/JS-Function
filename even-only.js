/**
 * create function that will return only the even numbers
 * return the sum of the even numbers
 * 
*/

function evenNumbersOnly(numbers){
    let evens = [];
    for (const number of numbers) {
        if(number%2 === 0) {
            console.log(number);
            evens.push(number);            
        }
    }
    return evens;
}


const numbers = [12, 45, 34, 23, 45, 68];

const evens = evenNumbersOnly(numbers);
console.log('Even numbers are:', evens);


function sumEvenNumbers(numbers){
    let sum = 0;
    for (const number of numbers) {
        if(number%2 === 0) {
            console.log(number);
            sum += number;
        }
    }
    return sum;
}

const sumEvens = sumEvenNumbers([10, 23, 44, 55, 66, 77, 88]);
console.log('Sum of even numbers is:', sumEvens);