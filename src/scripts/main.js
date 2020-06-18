'use strict';

const table = document.querySelector('#cars');

table.addEventListener('click', handleClick);

function handleClick(e) {
  const th = e.target;

  if (th.tagName !== 'TH') {
    return;
  }

  sortColumn(th.cellIndex, th.dataset.type);
}

function sortColumn(column, type) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);
  let callback;

  switch (type) {
    case 'number':
      callback = (row1, row2) => {
        return row2.cells[column].innerText - row1.cells[column].innerText;
      };
      break;

    case 'string':
      callback = (row1, row2) => {
        return row1.cells[column].innerText.localeCompare(
          row2.cells[column].innerText
        );
      };
      break;
  }

  rows.sort(callback);

  tbody.prepend(...rows);
}
