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

  tableRows.sort((a, b) => {
    if (target.dataset.type === 'number') {
      return a.cells[column].innerText - b.cells[column].innerText;
    }

    if (target.dataset.type === 'string') {
      return (a.cells[column].innerText
        .localeCompare(b.cells[column].innerText));
    }
  });

  tableBody.append(...tableRows);
});
