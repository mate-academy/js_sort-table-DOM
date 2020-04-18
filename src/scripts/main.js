'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHead.addEventListener('click', e => {
  const th = e.target.closest('th');
  const col = th.cellIndex;
  const typeOfCol = th.dataset.type;
  const rows = [...tBody.children];

  rows.sort((prevRow, nextRow) => {
    const a = prevRow.cells[col].textContent;
    const b = nextRow.cells[col].textContent;

    if (typeOfCol === 'number') {
      return +a - +b;
    }

    if (typeOfCol === 'string') {
      return a.localeCompare(b);
    }
  });

  for (const row of rows) {
    tBody.append(row);
  }
});
