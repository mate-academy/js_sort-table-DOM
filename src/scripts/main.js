'use strict';

const cars = document.querySelector('#cars');

function makeSortable(table) {
  const head = table.querySelector('[data-header]');
  const rowContainer = table.querySelector('[data-rows-container]');
  let currentColumn = null;
  let currentSign = 1;

  head.addEventListener('click', (passage) => {
    const columnName = passage.target.closest('[data-type]');

    if (!columnName) {
      return;
    }

    const { column, type } = columnName.dataset;
    const rows = [...rowContainer.children];

    currentSign = (column !== currentColumn) ? 1 : -currentSign;
    currentColumn = column;

    const getValue = (row) => {
      return row.children[column].textContent;
    };

    const sortFunctions = {
      number: (a, b) => currentSign * (getValue(a) - getValue(b)),
      string: (a, b) => currentSign * (getValue(a).localeCompare(getValue(b))),
    };

    const defaultSortFn = () => 0;
    const sortFunc = sortFunctions[type] || defaultSortFn;

    rows.sort(sortFunc);

    for (const row of rows) {
      rowContainer.append(row);
    }
  });
}

makeSortable(cars);
