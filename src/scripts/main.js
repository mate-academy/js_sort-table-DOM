'use strict';

const thead = document.querySelector('#cars');
const tbody = document.querySelector('#cars > tbody');

function sortTable(e) {
  const th = e.target;
  const thIndex = th.cellIndex;

  if (th.tagName === 'TH') {
    const arr = [...tbody.rows];

    if (th.dataset.type === 'string') {
      arr.sort((a, b) => (
        (a.cells[thIndex].innerText).localeCompare(b.cells[thIndex].innerText)
      ));
    } else {
      arr.sort((a, b) => (
        a.cells[thIndex].innerText - b.cells[thIndex].innerText
      ));
    }

    for (const row of arr) {
      tbody.append(row);
    }
  }
}

thead.addEventListener('click', sortTable);
