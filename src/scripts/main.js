'use strict';

function sorting(headName, sortThis) {
  switch (headName) {
    case 'Brand':
      sortThis.sort((row1, row2) => {
        if (row1[0] > row2[0]) {
          return 1;
        } else if (row1[0] < row2[0]) {
          return -1;
        } else {
          return 0;
        }
      });
      break;
    case 'Model':
      sortThis.sort((row1, row2) => {
        if (row1[1] > row2[1]) {
          return 1;
        } else if (row1[1] < row2[1]) {
          return -1;
        } else {
          return 0;
        }
      });
      break;
    default:
      sortThis.sort((row1, row2) => row1[2] - row2[2]);
  }
}

function rebuildTable(rows) {
  document.querySelector('tbody').innerHTML = '';

  for (let i = 0; i < rows.length; i++) {
    const tableRow = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');

    cell1.innerText = rows[i][0];
    cell2.innerText = rows[i][1];
    cell3.innerText = rows[i][2];
    tableRow.append(cell1);
    tableRow.append(cell2);
    tableRow.append(cell3);
    document.querySelector('tbody').append(tableRow);
  }
}

function resultByClicking() {
  const nameOfHead = event.target.innerText;
  const rows = [];

  for (const row of document.querySelectorAll('tbody tr')) {
    const str = row.innerText;

    rows.push(str.split(/\s+/g));
  }

  sorting(nameOfHead, rows);
  rebuildTable(rows);
}

for (const headTh of document.querySelectorAll('thead th')) {
  headTh.addEventListener('click', resultByClicking);
}
