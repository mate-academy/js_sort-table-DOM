'use strict';

const cars = document.querySelector('#cars');
const tableBody = document.querySelector('tbody');

cars.addEventListener('click', (evt) => {
  const target = evt.target.closest('TH');
  const column = target.cellIndex;

  if (!target || !cars.contains(target)) {
    return;
  }

  const tableRows = [...tableBody.children];

  if (target.dataset.type === 'number') {
    tableRows.sort((a, b) => {
      return a.cells[column].innerText - b.cells[column].innerText;
    });
  }

  if (target.dataset.type === 'string') {
    tableRows.sort((a, b) => {
      return (a.cells[column].innerText
        .localeCompare(b.cells[column].innerText));
    });
  }

  tableBody.append(...tableRows);
});
