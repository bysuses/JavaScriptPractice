const numberAInput = document.querySelector('#ainput');
const numberBInput = document.querySelector('#binput');
const form = document.querySelector('form');
const resultParagraph = document.querySelector('#result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const numA = Number(numberAInput.value);
  const numB = Number(numberBInput.value);

  const res = await fetch('/calc/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ numA, numB }),
  });
  const data = await res.json();

  if (data.isdivider) {
    resultParagraph.innerText = 'B jest dzielnikiem liczby A';
  } else {
    resultParagraph.innerText = 'B nie jest dzielnikiem liczby A';
  }
});
