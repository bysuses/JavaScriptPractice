const data = [
    {
        name: 'Anna',
        points: 1000,
    },
    {
        name: 'Krzysztof',
        points: 500,
    },
    {
        name: 'Ola',
        points: 0,
    },
    {
        name: 'Marek',
        points: 0,
    },
];
function incPoints(obj) {
    obj.points += 100;
}
function totalPoints(ar) {
    return ar.reduce((acc, next) => {
        return acc + next.points;
    }, 0);
}
function personWithMostPoints(ar) {
    if (ar.length === 0) {
        return null;
    }
    let person = ar[0];
    for (let i = 1; i < ar.length; i++) {
        if (ar[i].points > person.points) {
            person = ar[i];
        }
    }
    return person;
}
console.log(incPoints(data[3]), totalPoints(data), personWithMostPoints(data));
//# sourceMappingURL=zad2.js.map