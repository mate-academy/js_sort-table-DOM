'use strict';

const table = document.querySelector('#cars');

table.addEventListener('click', function(ev) {
  const headTabl = ev.target.closest('th');

  if (!headTabl) {
    return;
  }

  const index = headTabl.cellIndex;

  const allRows = table.tBodies[0].rows;
  const tempArr = [];

  for (let i = 0; i < allRows.length; i++) {
    tempArr.push(allRows[i].cells[index].textContent);
  }

  tempArr.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < allRows.length; i++) {
    allRows[i].cells[index].textContent = tempArr[i];
  }
});
