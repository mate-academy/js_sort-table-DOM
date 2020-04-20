'use strict';

const table = document.getElementById('cars');
const tBodyArray = Array.from(table.rows).slice(1);

let sortedTable = [];

table.addEventListener('click', (e) => {
  if (e.target.dataset === 'string') {
    sortedTable = tBodyArray.sort((a, b) =>
      a.cells[e.target.cellIndex].textContent.localeCompare(
        b.cells[e.target.cellIndex]
      )
    );
  } else {
    sortedTable = tBodyArray.sort((a, b) =>
      a.cells[e.target.cellIndex].textContent
      > b.cells[e.target.cellIndex].textContent
        ? 1
        : -1
    );
  }
  table.tBodies[0].append(...sortedTable);
});
