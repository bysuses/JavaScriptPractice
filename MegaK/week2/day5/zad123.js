const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6,];

//1.count the average
let totalGrades = 0, average;
grades.forEach(grade => totalGrades += grade);
average = totalGrades / grades.length;
console.log(average);

//2.Print all grades oreater or equal 4
console.log(grades.filter(grade => grade >= 4));


//3. In one line ,print every city name, only if the name has even number of characters. Print in all caps.
const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Zielona Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];
cities
    .filter(cityName => !(cityName.length % 2))
    .forEach(city => console.log(city.toUpperCase()));
