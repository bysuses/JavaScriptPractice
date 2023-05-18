//run in web browser
/* 
fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:978-83-963354-1-8")
    .then(response => response.json())
    .then(data => {
        console.log(data.items[0].volumeInfo.title);
        data.items[0].volumeInfo.authors.forEach(author => console.log(author));
    })
    .catch(err => console.log('we got error: ', err));
    */
const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:978-83-963354-1-8");
const data = await response.json();
console.log(data.items[0].volumeInfo.title);
data.items[0].volumeInfo.authors.forEach(author => console.log(author));
