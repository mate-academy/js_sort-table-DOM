'use strict';

const table = document.querySelector('#cars');
const tbody = document.querySelector('tbody');
const rows = [];

for (const row of tbody.children) {
  const cellsArr = [];

  for (const cell of row.cells) {
    cellsArr.push(cell.textContent);
  };
  rows.push(cellsArr);
}

function sortByCulumnNumber(x) {
  rows.sort((a, b) => {
    if (a[x] > b[x]) {
      return 1;
    } else {
      return -1;
    }
  });
};

function sortRows(even) {
  const x = even.target.cellIndex;

  sortByCulumnNumber(x);

  for (let i = 0; i < rows.length; i++) {
    for (let i2 = 0; i2 < rows[i].length; i2++) {
      tbody.children[i].children[i2].textContent = rows[i][i2];
    }
  }
}

table.addEventListener('click', sortRows);
