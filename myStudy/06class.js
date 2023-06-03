//1. class Name 一定要大寫
//2. 會有一個 constructor FUNCTION!

class Color {
    constructor(r = 0, g = 0, b = 0, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        console.log(r, g, b);
    }
    greet() {
        return `HELLO FROM ${this.name}`
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }
}
const tomato = new Color(156, 6, 56, 'tomato');
const forest = new Color(34, 114, 51, 'forest');

console.log(tomato); // Object
console.log(tomato.greet());
console.log(tomato.greet === forest.greet);
console.log(tomato.rgba());
console.log(forest.hex());


