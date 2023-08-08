interface Participant {
  name: string;
  points: number;
}

const data: Participant[] =[
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

function incPoints(obj: Participant): void {
  obj.points += 100;
}

function totalPoints(ar: Participant[]): number {
  return ar.reduce((acc: number, next: Participant)=>{
    return acc+ next.points;
  }, 0 as number);
}

function personWithMostPoints(ar: Participant[]): Participant | null {
  if (ar.length === 0) {
    return null;
  }

  let person: Participant = ar[0];

  for (let i = 1; i < ar.length; i++) {
    if (ar[i].points > person.points) {
      person = ar[i];
    }
  }

  return person;
}

console.log(
    incPoints(data[3]),
    totalPoints(data),
    personWithMostPoints(data)
);
