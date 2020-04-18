'use strict';

function sotrTable(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', (e) => {
    const th = e.target.closest('th');
    const column = th.cellIndex;
    const rows = [...tbody.children];

    rows.sort((rowA, rowB) => {
      return rowA.cells[column].innerText > rowB.cells[column].innerText
        ? 1
        : -1;
    });

    for (const row of rows) {
      tbody.append(row);
    }
  });
}

sotrTable(document.getElementById('cars'));
