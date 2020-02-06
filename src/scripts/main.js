'use strict';

const table = document.querySelector('#cars');
const bodyRows = table.tBodies[0].rows;
let numberSorted = false;

table.addEventListener('click', () => {
  const target = event.target;

  if (target.tagName !== 'TH') {
    return;
  }

  const filtered = [ ...bodyRows ];

  if (target.dataset.type === 'string') {
    filtered.sort((a, b) => {
      const aValue = a.cells[target.cellIndex].innerHTML;
      const bValue = b.cells[target.cellIndex].innerHTML;

      return aValue.localeCompare(bValue);
    });
    numberSorted = false;
  }

  if (numberSorted === true) {
    return;
  }

  if (target.dataset.type === 'number') {
    filtered.sort((a, b) => {
      const aValue = a.cells[target.cellIndex].innerHTML;
      const bValue = b.cells[target.cellIndex].innerHTML;

      return +aValue - +bValue;
    });
    filtered.reverse();
    numberSorted = true;
  }

  for (const tr of filtered) {
    table.tBodies[0].append(tr);
  }
});
