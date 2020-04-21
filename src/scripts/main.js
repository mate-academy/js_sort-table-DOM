'use strict';

function makeSortable(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', e => {
    const th = event.target.closest('th');

    if (!th) {
      return;
    }

    const column = th.cellIndex;
    const rows = [...tbody.children];

    rows.sort((a, b) => {
      const valueA = a.cells[column].textContent;
      const valueB = b.cells[column].textContent;

      return valueA > valueB ? 1 : -1;
    });

    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
}

makeSortable(document.querySelector('table'));
