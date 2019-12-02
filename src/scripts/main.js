'use strict';

function sortTable(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', e => {
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const columns = th.cellIndex;
    const rows = [...tbody.children];

    rows.sort((a, b) => {
      return (
        a.cells[columns].textContent
        > b.cells[columns].textContent
          ? 1
          : -1
      );
    });

    for (const item of rows) {
      tbody.appendChild(item);
    }
  });
}

sortTable(document.querySelector('table'));
