'use strict';

const table = document.querySelector('#cars');
let sortedByIndex = -1;
let sign = 1;

table.tHead.addEventListener('click', (click) => {
  const tbody = table.tBodies[0];
  const th = click.target.closest('th[data-type]');

  if (!th || !table.contains(th)) {
    return;
  }

  sign = (th.cellIndex === sortedByIndex) ? -sign : 1;
  sortedByIndex = th.cellIndex;
  highlightSorting(th, sign > 0);

  const getValue = row => row.cells[sortedByIndex].textContent;
  const sortingFunctionsMap = {
    number: (a, b) => +getValue(a) > +getValue(b) ? sign : -sign,
    string: (a, b) => getValue(a) > getValue(b) ? sign : -sign,
  };

  const sortWith = sortingFunctionsMap[th.dataset.type];
  const sortedRows = [...tbody.rows].sort(sortWith);

  tbody.append(...sortedRows);
});

const highlightSorting = (currentCell, isAsk) => {
  for (const cell of table.tHead.rows[0].cells) {
    cell.classList.remove('is-sorted');
    cell.classList.remove('is-sorted-desc');
  }

  currentCell.classList.add('is-sorted');
  currentCell.classList.toggle('is-sorted-desc', !isAsk);
};
