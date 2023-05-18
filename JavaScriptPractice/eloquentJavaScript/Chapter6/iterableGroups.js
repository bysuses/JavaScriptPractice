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
    [Symbol.iterator]() {
        let index = -1;
        let data = this.group;
        return {
            next: () => ({
                value: data[++index], done: !(index in data)
            })
        }
    }
}

let group2 = Group.from([1, 3, 5, 678, 6, 45, 'elo', 'elo', 3]);
for (let el of group2) {
    console.log(el);
}

