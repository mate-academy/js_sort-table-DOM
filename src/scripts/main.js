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

  const getValue = row => row.cells[sortedByIndex].textContent;
  const sortingFunctionsMap = {
    number: (a, b) => +getValue(a) > +getValue(b) ? sign : -sign,
    string: (a, b) => getValue(a) > getValue(b) ? sign : -sign,
  };

  const sortWith = sortingFunctionsMap[th.dataset.type];
  const sortedRows = [...tbody.rows].sort(sortWith);

  tbody.append(...sortedRows);
});
