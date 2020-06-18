'use strict';

const table = document.getElementById('cars');
const body = document.querySelector('tbody');
const rows = [...body.children];

table.addEventListener('click', (e) => {
  const items = e.target;

  if (items.tagName !== 'TH') {
    return;
  }

  rows.sort((a, b) =>
    (a.children[items.cellIndex]).textContent
      .localeCompare(b.children[items.cellIndex].textContent));

  for (const row of rows) {
    body.append(row);
  }
});
