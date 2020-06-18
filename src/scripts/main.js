'use strict';

const table = document.getElementById('cars');
const tBody = document.querySelector('tbody');
const rows = [...tBody.children];

table.addEventListener('click', sort);

function sort(e) {
  const items = e.target;

  if (items.tagName !== 'TH') {
    return;
  }

  const i = items.cellIndex;

  rows.sort((a, b) =>
    (a.children[i]).textContent.localeCompare(b.children[i].textContent));

  for (const element of rows) {
    tBody.append(element);
  }
}
