'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const cars = [...tbody.children];

table.addEventListener('click', () => {
  switch (event.target.textContent) {
    case 'Brand':
      cars.sort((a, b) => {
        return a.cells[0].innerHTML.localeCompare(
          b.cells[0].innerHTML
        );
      });
      break;
    case 'Model':
      cars.sort((a, b) => {
        return a.cells[1].innerHTML.localeCompare(
          b.cells[1].innerHTML
        );
      });
      break;
    case 'Year':
      cars.sort((a, b) => {
        return a.cells[2].innerHTML - b.cells[2].innerHTML;
      });
      break;
  }

  cars.forEach(row => tbody.append(row));
});
