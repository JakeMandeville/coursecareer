/*function math(a1,a2,num=1) {
    return [a1 **2, a2**2]
}

const [result,result2] = math(10,20)
console.log(result, result2)*/

function removeAllChars(arrayOfStrings, charactersToRemove=[]) {
    const newArr = []
    if (charactersToRemove.length === 0) return arrayOfStrings;
    for (const str of arrayOfStrings) {
        let newStr = "";
        for (const char of str) {
            if (charactersToRemove.includes(char)){
                continue
            }
            newStr += char
        }
        newArr.push(newStr);
    }
    return newArr
}

const result = removeAllChars(
    ["Pie", "Pizza", "test5", "Sara"]
)

console.log(result)