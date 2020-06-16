'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const rows = tbody.querySelectorAll('tr');

thead.addEventListener('click', e => {
  const index = e.target.cellIndex;

  const sortedRows = [ ...rows ].sort((a, b) => {
    const firstElem = a.cells[index].textContent;
    const secondElem = b.cells[index].textContent;

    return firstElem.localeCompare(secondElem);
  });

  tbody.append(...sortedRows);
});
