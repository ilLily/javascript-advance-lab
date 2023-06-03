//1. function name, 必需大寫
//2. 呼叫這個function 時，必需用 'new'這個關鍵字！！

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}

Color(200, 16, 35); //window
const c1 = new Color(251, 156, 40);// Color Object {r:251, g:156, b:40}
const c2 = new Color(125, 23, 6);// Color Object {r:125, g:23, b:6}


//3. 用functionName.prototype.name 去為原本的 Color object 加 methods
//這個method 就會變成所有 new Color 的參照 method 
//4. DO NOT USE arrow function

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`
}
Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
Color.prototype.rgba = function (a = 1) {
    const { r, g, b } = this;
    if (a >= 0 && a <= 1) {
        return `rgba(${r}, ${g}, ${b}, ${a})`
    } else {
        throw new Error('invalid a. a must be >=0 and <=1')
    }
}

console.log(c1.rgb());
console.log(c2.hex());

console.log(c1.rgb === c2.rgb)

// console.log(c1.rgba(2));

document.body.style.backgroundColor = c1.rgba(0.5);

