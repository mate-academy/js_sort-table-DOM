'use strict';

/**
 *  My first HTML sorted table
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {Number} column The index of the column to sort
 * @param {Boolean} asc Determines if the sorting will be in ascending
 */

function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.querySelector('tbody');
  const rows = [...tBody.children];

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a.cells[column].innerText;
    const bColText = b.cells[column].innerText;

    return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table.querySelectorAll('th')
    .forEach(th => (
      th.classList.remove('th-sort-asc', 'th-sort-desc')
    ));

  table.querySelector('thead').firstElementChild.cells[column]
    .classList.toggle('th-sort-asc', asc);

  table.querySelector('thead').firstElementChild.cells[column]
    .classList.toggle('th-sort-desc', !asc);
}

document.querySelector('thead').addEventListener('click', e => {
  const tableElement = document.querySelector('#cars');
  const headerIndex = e.target.cellIndex;
  const currentIsAscending = e.target.classList.contains('th-sort-asc');

  sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
});
