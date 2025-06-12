const arr = [1,2,3,4,5,6,1,2,31,2];

/*Loop through the array, get an index and a value.
Then loop through again and see if the entry exists later in the array.

for (const [idx,value] of arr.entries()) {
    for (const [offset,value2] of arr.slice(idx+1).entries()) {
        const idx2 = idx  + 1 + offset
        if (value === value2) {
            console.log(`Found duplicate of ${value} at ${idx} and ${idx2}`);
            break
        }
    }
}
    Below is a simpler version*/

const numbers = new Set();

for (const [idx,value] of arr.entries()) {
    if (numbers.has(value)){
        console.log(`found duplicate of ${value} at index ${idx}`)
    }
    numbers.add(value);
}
const uniqueNumbers = Array.from(numbers);
console.log(numbers)
console.log(uniqueNumbers)