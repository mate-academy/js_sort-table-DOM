/* eslint-disable no-console */
'use strict';

const cars = document.querySelector('#cars');
const body = cars.tBodies[0].rows;

console.log(body);

cars.addEventListener('click', click => {
  if (click.target.tagName === 'TH') {
    const col = click.target.cellIndex;
    const type = click.target.dataset.type;
    const compareNumbers = (a, b) => {
      if (type === 'number') {
        return a[col] - b[col];
      } else {
        return a[col]
          .localeCompare(b[col]);
      }
    };

    let newBody = [];

    for (let row = 0; row < body.length; row++) {
      newBody[row] = [];

      for (let cell = 0; cell < body[row].cells.length; cell++) {
        newBody[row][cell] = body[row].cells[cell].textContent;
      }
    }
    newBody = newBody.sort(compareNumbers);

    for (let row = 0; row < body.length; row++) {
      for (let cell = 0; cell < body[row].cells.length; cell++) {
        body[row].cells[cell].textContent
          = newBody[row][cell];
      }
    }
  }
});
