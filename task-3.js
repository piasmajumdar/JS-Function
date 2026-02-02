// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
    for (number of numbers){
        sum += number;
    }
    return sum/numbers.length;
}

const nums = [12, 45, 23, 67, 34];
const avg = make_avg(nums);
console.log('Average is:', avg);