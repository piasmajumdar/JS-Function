function tenTimes(number) {
    const result = number*10;
    return result;
    console.log(result); // It'll not work after return
}

function cutHalf(number) {
    const half = number / 2;
    return half;
}

tenTimes(5);

const output = tenTimes(5);
console.log('output', output);

const bigNumber = tenTimes(99);