'use strict';

function sortTable(element) {
  const thead = element.querySelector('thead');
  const tbody = element.querySelector('tbody');

  thead.addEventListener('click', (enent) => {
    const head = enent.target.closest('th');

    if (!head) {
      return;
    }

    const columnInTable = head.cellIndex;
    const rowsTable = [...tbody.children];
    const typeSort = head.dataset.type;

    rowsTable.sort((rowA, rowB) => {
      const firstValue = rowA.cells[columnInTable].textContent;
      const secondValue = rowB.cells[columnInTable].textContent;

      switch (typeSort) {
        case 'number':
          return (+firstValue) - (+secondValue);
        case 'string':
          return firstValue > secondValue ? 1 : -1;
        default:
          return 0;
      }
    });

    for (const row of rowsTable) {
      tbody.appendChild(row);
    }
  });
}

sortTable(document.querySelector('#cars'));
