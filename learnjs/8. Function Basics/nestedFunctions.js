function addSquares(a, b) {

    const sa = squareNum(a)
    const sb = squareNum(b)
    
    function squareNum(num) {
        return num * num;
    }

    return sa + sb;
}

console.log(addSquares(3, 4));