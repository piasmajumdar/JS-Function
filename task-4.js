// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(bin_nums){
    let count = 0;
    for(let num of bin_nums) {
        if (num === "0") {
            count += 1;
        }
    }
    return count;
}

let bin_nums = "1010100010101";
const zeroCount = count_zero(bin_nums);
console.log('Number of 0s in the binary string is:', zeroCount);