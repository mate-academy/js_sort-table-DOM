'use strict';

const table = document.querySelector('#cars');

table.tHead.rows[0].addEventListener('click', () => {
  const rows = Array.from(table.rows);
  const headers = [...rows[0].cells].map(item => item.innerText);
  const sortByIndex = headers.indexOf(event.target.innerText);
  const sortedTable = rows.splice(1).sort((a, b) => {
    switch (event.target.dataset.type) {
      case 'string':
        return a.cells[sortByIndex].innerText
          .localeCompare(b.cells[sortByIndex].innerText);
      case 'number':
        return a.cells[sortByIndex].innerText - b.cells[sortByIndex].innerText;
    }
  });

  table.tBodies[0].append(...sortedTable);
});
