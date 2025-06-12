const obj = {
    name: "jake",
    children:[
        {name: "joe"},
        {name:"Sally"}
    ]    
};


const  obj2 = { ...obj, age: 2 };
obj2.name = "red";

console.log(obj);
console.log(obj2);