const str = "hello world my name is jake"

/*const freq = [];

for (const char of str) {
    let found = false;
    for (const [idx,pair] of freq.entries()) {
        const [key,value] = pair;
        if (key === char) {
            freq[idx] = [char, value + 1];
            found = true;
            break;
        }
    }
    if (!found) freq.push([char, 1])
}
console.log(freq);*/

const freq= new Map();
for (const char of str) {
    if (freq.has(char)) {
        freq.set(char, freq.get(char) + 1);
    } else {
        freq.set(char,1);
    }
}

console.log(freq)
console.log(freq.get(" "))