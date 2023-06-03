//1. class Name 一定要大寫
//2. 會有一個 constructor FUNCTION!

class Color {
    constructor(r = 0, g = 0, b = 0, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
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
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }
    fullSaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }
    calcHSL() {
        let { r, g, b } = this;
        //make r,g,b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        //Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            //Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            //Green is max
            h = ((b - r) / delta) + 2;
        else
            //Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        //Make nagative hues positive behind 360
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        //Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        //Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;

    }
}




const tomato = new Color(156, 6, 56, 'tomato');
const forest = new Color(34, 114, 51, 'forest');

console.log(tomato); // Object
console.log(tomato.greet());
console.log(tomato.greet === forest.greet);
console.log(tomato.rgba());
console.log(forest.hex());


