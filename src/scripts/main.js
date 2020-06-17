'use strict';

const table = document.querySelector('#cars');

function sortBy() {
  let sortByWhat = 0;
  const item = event.target.closest('TH');

  if (!item || !table.contains(item)) {
    return '';
  }

  if (item.innerHTML === 'Model') {
    sortByWhat = 1;
  } else if (item.innerHTML === 'Year') {
    sortByWhat = 2;
  }

  const sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => {
      return rowA.cells[sortByWhat].innerHTML > rowB.cells[sortByWhat].innerHTML
        ? 1
        : -1;
    }
    );

  table.tBodies[0].append(...sortedRows);
}

table.addEventListener('click', sortBy);
