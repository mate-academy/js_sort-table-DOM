'use strict';

function makeSortable(table) {
  const head = table.querySelector('[data-header]');
  const rowsConatiner = table.querySelector('[data-rows-container]');
  let currentColumn = null;
  let currentSign = 1;

  head.addEventListener('click', (ev) => {
    const columnTitle = ev.target.closest('[data-sort-type]');

    if (!columnTitle) {
      return;
    }

    const { column, sortType } = columnTitle.dataset;
    const rows = [...rowsConatiner.children];

    currentSign = (column !== currentColumn)
      ? 1
      : -currentSign;

    currentColumn = column;

    const getValue = (row) => {
      return row.children[currentColumn].textContent;
    };

    const sortFunction = {
      number: (a, b) => currentSign * (getValue(a) - getValue(b)),
      string: (a, b) => currentSign * (getValue(a).localeCompare(getValue(b))),
    };

    const defaultSortFn = () => 0;
    const sortFn = sortFunction[sortType] || defaultSortFn();

    rows.sort(sortFn);

    for (const row of rows) {
      rowsConatiner.appendChild(row);
    }
  });
}

makeSortable(document.querySelector('[data-sortable]'));
