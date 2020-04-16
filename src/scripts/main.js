'use strict';

const cars = document.querySelector('#cars');

init(cars);

function init(cars) {
  const thead = cars.querySelector('thead');
  const rowsContainer = cars.querySelector('tbody');

  thead.addEventListener('click', event => {
    const clickedTh = event.target.closest('th');

    if (!clickedTh) {
      return;
    }

    const column = clickedTh.cellIndex;
    const typeRow = clickedTh.dataset.type;
    const rows = [...rowsContainer.children];

    const sortVal = (val) => {
      return val.cells[column].textContent;
    };

    rows.sort((a, b) => {
      switch (typeRow) {
        case 'number' :
          return sortVal(a) - sortVal(b);

        case 'string' :
          return sortVal(a).localeCompare(sortVal(b));

        default:
          return 1;
      }
    });

    for (const row of rows) {
      rowsContainer.appendChild(row);
    }
  });
}
