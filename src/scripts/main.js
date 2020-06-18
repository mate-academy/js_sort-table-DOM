'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.rows;

thead.addEventListener('click', (e) => {
  const indexOfColumn = e.target.cellIndex;

  const sorted = [...rows].sort((prevRow, currentRow) => {
    const firstElement = prevRow.cells[indexOfColumn].textContent;
    const secondElement = currentRow.cells[indexOfColumn].textContent;

    return firstElement.localeCompare(secondElement);
  });

  tbody.append(...sorted);
});
