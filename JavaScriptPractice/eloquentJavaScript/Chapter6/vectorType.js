class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(otherVector) {
        let newX = this.x + otherVector.x;
        let newY = this.y + otherVector.y;
        return new Vec(newX, newY);
    }
    minus(otherVector) {
        let newX = this.x - otherVector.x;
        let newY = this.y - otherVector.y;
        return new Vec(newX, newY);
    }
    toString() {
        return `<${this.x}, ${this.y}>`;
    }
    get lenght() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let vec1 = new Vec(3, 6), vec2 = new Vec(12, -8);
let vec3 = vec1.plus(vec2);
console.log(vec3.toString());
console.log(`this vector is ${vec3.lenght} long`);