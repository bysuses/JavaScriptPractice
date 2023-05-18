class Group {
    constructor() {
        this.group = [];
    }
    has(checked) {
        for (let value of this.group) {
            if (value === checked) return true;
        }
        return false;
    }
    add(added) {
        if (!this.has(added)) {
            this.group.push(added);
        }
    }
    delete(deleted) {
        if (this.has(deleted)) {
            let index = this.group.indexOf(deleted);
            this.group.splice(index, 1);
        }
    }
    toString() {
        return this.group.toString();
    }
    static from(iterableOne) {
        let group = new Group();
        for (let value of iterableOne) {
            group.add(value);
        }
        return group;
    }
}

let group = new Group();
console.log(group.has(6));
group.add(1);
group.add(2);
group.add(1);
console.log(group.toString());
console.log(group.has(1));
console.log(group.has(6));
group.delete(2);
console.log(group.toString());

console.log(group2.toString());