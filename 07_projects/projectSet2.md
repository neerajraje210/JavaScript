## project 2

# Projects Releated to DOM

## projects link 

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

``` javascript
const form = document.querySelector('form');
//this usecase will give u empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    results.innerHTML = `<span>${bmi}<span>`;
    if (bmi < 18.6) {
      results.innerHTML = `You are underweight ${bmi}`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `You are Normal Range ${bmi}`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `You are underweight ${bmi}`;
    }
  }
});

 ```