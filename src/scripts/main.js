'use strict';

function tableSort(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', (e) => {
    const th = e.target.closest('th');
    const column = th.cellIndex;
    const sortType = th.dataset.type;
    const rows = [...tbody.children];

    if (!th) {
      return;
    }

    const getVal = (row) => {
      return row.children[column].textContent;
    };

    rows.sort((a, b) => {
      switch (sortType) {
        case 'number':
          return getVal(a) - getVal(b);
        case 'string':
          return getVal(a).localeCompare(getVal(b));
        default:
          return 0;
      }
    });

    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
}

tableSort(
  document.querySelector('#cars')
);
