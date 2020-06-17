'use strict';

const table = document.querySelector('#cars');
const tableContent = document.querySelector('#cars > tbody');

table.addEventListener('click', sortTable);

function sortTable(e) {
  const th = e.target;
  const thIndex = th.cellIndex;

  if (th.tagName === 'TH') {
    const arr = [...tableContent.rows];

    if (th.dataset.type === 'string') {
      arr.sort((a, b) => (
        (a.cells[thIndex].innerText).localeCompare(b.cells[thIndex].innerText))
      );
    } else {
      arr.sort((a, b) => (
        a.cells[thIndex].innerText - b.cells[thIndex].innerText)
      );
    }

    for (const key in arr) {
      tableContent.append(arr[key]);
    }
  }
}
