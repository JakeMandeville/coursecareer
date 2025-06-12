/*const num = [1,-5,84,9,23,54,9,0,1,5];
const sortedNums = num.sort((a, b) => a - b);
console.log(sortedNums);*/

const objs = [
    {year: 2012, make:"Ford"},
    {year: 2016, make:"Jeep"},
    {year: 2025, make:"Porsche"},
    {year: 1996, make:"Volvo"},
    {year: 1996, make:"Chevy"},
]

const sortedObjs = objs.sort((a,b) => {
    const diffInYear = b.year - a.year;
    if (diffInYear === 0) {
        if (a.make > b.make) {
            return 1
        } else if (a.make < b.make) {
            return -1
        } else {
            return 0
        }
    }

    return diffInYear
});
console.log([...sortedObjs].reverse())