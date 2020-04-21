'use strict';

const cars = document.querySelector('#cars');
const tbody = document.querySelector('tbody');

cars.addEventListener('click', sorting);

// eslint-disable-next-line no-shadow
function sorting(event) {
  const element = event.target.closest('th');
  const carsRows = [...tbody.rows];
  let sorted = [];

  switch (element.innerHTML) {
    case 'Brand':
      sorted = carsRows
        .sort((a, b) =>
          a.cells[0].innerHTML[0].localeCompare(b.cells[0].innerHTML[0]));

      for (const brand of sorted) {
        tbody.appendChild(brand);
      }
      break;

    case 'Year':
      sorted = carsRows
        .sort((a, b) =>
          a.cells[2].innerHTML - b.cells[2].innerHTML);

      for (const year of sorted) {
        tbody.appendChild(year);
      }
      break;

    case 'Model':
      sorted = carsRows
        .sort((a, b) =>
          a.cells[1].innerHTML[0].localeCompare(b.cells[1].innerHTML[0]));

      for (const model of sorted) {
        tbody.appendChild(model);
      }
      break;
  }
}
