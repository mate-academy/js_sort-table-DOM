'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
let sing = 1;

table.addEventListener('click', (e) => {
  const sortName = e.target.closest('[data-type]');

  sing = sing === 1 ? -1 : 1;

  if (!sortName) {
    return;
  }

  const column = sortName.cellIndex;
  const rows = [...tbody.children];
  const type = sortName.dataset.type;
  const val = (row) => {
    return row.children[column].textContent;
  };
  const functionSort = (a, b) => {
    switch (type) {
      case 'string':
        return sing * val(a).localeCompare(val(b));
      case 'number':
        return sing * (val(a) - val(b));
      default:
        return 0;
    }
  };

  rows.sort(functionSort);

  for (const row of rows) {
    tbody.append(row);
  }
});
