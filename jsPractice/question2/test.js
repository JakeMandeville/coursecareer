const arr = []

do {
    const num = Number(prompt("enter a number"));
    arr.push(num);
    
} while (arr.length < 3);

function getMax (arr1) {
    alert(`The largest number entered was ${Math.max(...arr1)}`)
}

getMax(arr);