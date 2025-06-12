const obj = {
    name: "jake",
    children:[
        {name: "joe"},
        {name:"Sally"}
    ]    
};

/*console.log(obj["name"]);

obj.name = "Jake";

console.log (obj.name);

obj.age = 29

console.log(obj)        

console.log(obj.children[0].name)

obj.children.name = "john"

console.log(obj)

delete obj.name;
console.log(obj);*/

//console.log("name" in obj);

/*for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}*/

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

for (const value of Object.values(obj)) {
    console.log(value);
}

for (const key of Object.keys(obj)) {
    console.log(key);
}