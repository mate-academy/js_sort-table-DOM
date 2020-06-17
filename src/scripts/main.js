'use strict';

const table = document.querySelector('#cars');
const tBody = document.querySelector('tbody');

table.addEventListener('click', function(ev) {
  const th = ev.target;

  if (ev.target.tagName !== 'TH') {
    return undefined;
  }

  const rowsArray = [...tBody.rows];

  if (ev.target.getAttribute('data-type') === 'string') {
    rowsArray.sort((tr1, tr2) => {
      const a = tr1.cells[th.cellIndex].textContent;
      const b = tr2.cells[th.cellIndex].textContent;

      return a.localeCompare(b);
    });
  }

  if (th.getAttribute('data-type') === 'number') {
    rowsArray.sort((tr1, tr2) => {
      const a = tr1.cells[th.cellIndex].textContent;
      const b = tr2.cells[th.cellIndex].textContent;

      return a - b;
    });
  }

  for (const row of rowsArray) {
    tBody.appendChild(row);
  }
});
