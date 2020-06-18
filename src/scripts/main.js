'use strict';

const table = document.querySelector('#cars');
const tBody = document.querySelector('tbody');
const rows = [...tBody.children];

function sort(e) {
  const items = e.target.cellIndex;

  rows.sort((a, b) =>
    (a.children[items]).innerHTML.localeCompare(b.children[items].innerHTML));

  for (const list of rows) {
    tBody.append(list);
  }
}

table.addEventListener('click', sort);
