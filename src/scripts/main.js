'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = tableBody.querySelectorAll('tr');

tableHead.addEventListener('click', e => {
  const i = e.target.cellIndex;

  const sorted = [...tableRows].sort((a, b) => {
    const current = a.cells[i].textContent;
    const next = b.cells[i].textContent;

    return current.localeCompare(next);
  });

  tableBody.append(...sorted);
});
