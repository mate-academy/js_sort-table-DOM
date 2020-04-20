'use strict';

function makeSortable(table) {
  const head = document.querySelector('[data-header]');
  const body = document.querySelector('[data-rows]');
  let currentColumn = null;
  let currentSign = 1;

  head.addEventListener('click', (e) => {
    const headTitle = e.target.closest('[data-type]');

    if (!headTitle) {
      return;
    }

    const column = headTitle.dataset.column;
    const rows = [...body.children];

    currentSign = (column !== currentColumn) ? 1 : -currentSign;

    currentColumn = column;

    const getText = (row) => {
      return row.children[currentColumn].textContent;
    };

    rows.sort((rowA, rowB) => {
      const sortType = headTitle.dataset.type;

      switch (sortType) {
        case 'number':
          return currentSign * (getText(rowA) - getText(rowB));
        case 'string':
          return currentSign * (getText(rowA).localeCompare(getText(rowB)));
      }
    });

    for (const row of rows) {
      body.append(row);
    }
  });
}

makeSortable(document.querySelector('#cars'));
