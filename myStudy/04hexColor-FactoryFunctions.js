
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}
const result = hex(255, 100, 25);
console.log(result);
console.log(rgb(255, 100, 25));

// the function, RETURN AN OBJECT, which contains all the arguments and functions. 
//用function 的方式去做架構，每次產出的makeColor, 所有的function雖然都一樣，但他們都是每次被新產出來的獨立function,而不是參照。

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`
    }
    color.hex = function hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}