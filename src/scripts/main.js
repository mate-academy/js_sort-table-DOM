'use strict';

function tableSort(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', e => {
    const th = e.target.closest('TH');
    const column = th.cellIndex;
    const rows = [...tbody.children];
    const dataType = th.dataset.type;

    if (!th) {
      return;
    }

    rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[column].textContent;
      const valueB = rowB.cells[column].textContent;

      switch (dataType) {
        case 'string':
          return valueA.localeCompare(valueB);
        case 'number':
          return valueA - valueB;
        default:
          return 0;
      }
    });

    tbody.append(...rows);
  });
}

tableSort(document.getElementById('cars'));
