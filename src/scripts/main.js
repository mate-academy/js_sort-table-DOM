'use strict';

const table = document.querySelector('#cars');

function handler(ev) {
  const th = ev.target;

  if (th.tagName !== 'TH') {
    return;
  }

  const arr = [ ...table.tBodies[0].rows ];

  function sorter(tr1, tr2) {
    const a = tr1.cells[th.cellIndex].textContent;
    const b = tr2.cells[th.cellIndex].textContent;

    return b.localeCompare(a);
  }

  arr.sort(sorter);

  for (const i of arr) {
    table.tBodies[0].prepend(i);
  }
}

table.addEventListener('click', handler);
