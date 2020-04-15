'use strict';

function sortingTable(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', (e) => {
    const th = e.target.closest('th');
    const column = th.cellIndex;
    const typeOfFields = th.dataset.type;
    const rows = [...tbody.children];

    rows.sort((rowA, rowB) => {
      const a = rowA.cells[column].textContent;
      const b = rowB.cells[column].textContent;

      if (typeOfFields === 'string') {
        return a.localeCompare(b);
      }

      if (typeOfFields === 'number') {
        return b - a;
      }
    });

    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
}

sortingTable(document.getElementById('cars'));
