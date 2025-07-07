# Projects related to DOM

## project link [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-aieehh1u?file=index.html)

# solution code

## project 1

``` javascript
const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((btns) => {
  btns.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2

``` javascript

const form = document.querySelector('form');

/*/* This usecase will give you empty value :

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
*/

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === '' || isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>You are Under Weight = ${bmi}</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>You are Over Weight = ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Your Weight is Normal = ${bmi}</span>`;
    }
  }
});

```