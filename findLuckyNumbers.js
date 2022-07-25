// Write your code below this line.

const findLuckyNums = n => {
    let luckyNums = [];
    for (i = 0; i < n; i++) {
        luckyNums.push(Math.floor(Math.random() * 11));
    };
    return luckyNums;
};

console.log(findLuckyNums(100))