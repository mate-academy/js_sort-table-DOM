'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.onclick = (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const column = th.cellIndex;
  const rows = [...tbody.children];

  rows.sort((row1, row2) => {
    const value1 = row1.cells[column].textContent;
    const value2 = row2.cells[column].textContent;
    const type = th.dataset.type;

    switch (type) {
      case 'string':
        return value1.localeCompare(value2);

      case 'number':
        return value1 - value2;

      default:
        return 0;
    }
  });

  for (const row of rows) {
    tbody.appendChild(row);
  }
};
