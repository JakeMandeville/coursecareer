function minMax (min,max){
    const arr = []
    let x = min
    let y = max
    do {
        arr.push(x);
        x += 1;
    } while (x <= max)
    return arr
}

console.log(minMax(2, 50));