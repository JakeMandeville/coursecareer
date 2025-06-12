const person = {
    name: "Jake",
    lastName: "Mandeville",
    getName: function () {
            console.log(`${this.name} ${this.lastName}`);
    }
}

person.getName();

function test() {
    console.log("test")
}

const v = test;
v()