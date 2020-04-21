'use strict';

const cars = document.querySelector('#cars');

function makeSortable(table) {
  const thead = cars.querySelector('thead');
  const tbody = cars.querySelector('tbody');

  thead.addEventListener('click', (event2) => {
    const th = event2.target.closest('th');

    if (!th) {
      return;
    }

    const column = th.cellIndex;
    const type = th.dataset.type;
    const rows = [...tbody.children];

    rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[column].textContent;
      const valueB = rowB.cells[column].textContent;

      if (type === 'number') {
        return (+valueA) - (+valueB);
      }

      if (type === 'string') {
        return (valueA > valueB) ? 1 : -1;
      }
    });

    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
}

makeSortable(document.querySelector('.cars'));
