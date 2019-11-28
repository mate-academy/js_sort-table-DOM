/* eslint-disable indent */
'use strict';

const table = document.getElementById('cars');

[...table.tHead.rows][0].addEventListener('click', () => {
  const rows = Array.from(table.rows);
  const tableHead = [...rows[0].cells].map(item => item.textContent);
  const index = tableHead.indexOf(event.target.textContent);

  const sortTable = rows.slice(1).sort((a, b) => {
    switch (isNaN(+a.cells[index].textContent)) {
      case true:
        return a.cells[index].textContent > b.cells[index].textContent
              ? 1 : -1;

      case false:
        return a.cells[index].textContent - b.cells[index].textContent;

      default:
        return 0;
    };
  });

  table.tBodies[0].append(...sortTable);
});
