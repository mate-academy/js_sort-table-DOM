'use strict';

function sortTable(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', event => {
    const th = event.target.closest('th');

    if (!th) {
      return ;
    }

    const column = th.cellIndex;
    const rows = [...tbody.children];

    rows.sort((a, b) => {
      return a.cells[column].textContent > b.cells[column].textContent ? 1 : -1;
    })

    for (const row of rows) {
      tbody.appendChild(row);
    }
  })
}

sortTable(document.querySelector('table'));
