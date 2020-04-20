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
    const sortType = headTitle.dataset.type;
    const rows = [...body.children];

    currentSign = (column !== currentColumn) ? 1 : -currentSign;

    currentColumn = column;

    const getText = (row) => {
      return row.children[currentColumn].textContent;
    };

    const sortFunction = {
      number: (a, b) => currentSign * (getText(a) - getText(b)),
      string: (a, b) => currentSign * (
        getText(a).localeCompare(getText(b))
      ),
    };

    rows.sort(sortFunction[sortType]);

    for (const row of rows) {
      body.append(row);
    }
  });
}

makeSortable(document.querySelector('#cars'));
