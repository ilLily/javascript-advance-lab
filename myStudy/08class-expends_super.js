class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`;
    }
}
class Cat extends Pet {
    constructor(name, age, lifeLeft = 9) {
        super(name, age); // 不再一一用this.xxx宣告，而是直接用父類的。
        this.lifeLeft = lifeLeft;
    }
    meeow() {
        return `meeow`;
    }
}

class Dog extends Pet {
    //有EXTENDS，就會直接接收父類的所有資訊，all properties and methods.
    bark() {
        return `${this.name} barks 'wof wof'!`
    }
    eat() { //若有一樣的，extends的會蓋掉原有的
        return `${this.name} is chewing his food.`;
    }
}

const Monty = new Cat('Monty', 6);
console.log(Monty.meeow());
console.log(Monty.name);
console.log(Monty.eat());

const Woofy = new Dog('Woofy', 7);
console.log(Woofy.age);
console.log(Woofy.bark());
console.log(Woofy.eat());

console.log(Monty.eat === Woofy.eat)