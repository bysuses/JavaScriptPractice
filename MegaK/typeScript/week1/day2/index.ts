function foobar(a: number, b: string): string{
  return String(2*a) +b;
}

const foobar2 = ():string => String(12);

console.log(foobar(2, 'hello'));
console.log(foobar2());