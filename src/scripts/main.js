'use strict';

function init() {
  const table = document.getElementById('cars');
  const tr = table.querySelector('tr');
  const rows = [...table.rows].splice(1);

  tr.addEventListener('click', function() {
    const typeOfSort = event.target.dataset.type;
    const index = event.target.cellIndex;
    let sorted = [];
    let callback = {};

    if (typeOfSort === 'string') {
      callback = (a, b) => {
        return a.cells[index].innerText > b.cells[index].innerText ? 1 : -1;
      };
    }

    if (typeOfSort === 'number') {
      callback = (a, b) => {
        const first = Number(a.cells[index].innerText);
        const second = Number(b.cells[index].innerText);

        return first - second;
      };
    }

    sorted = rows.sort(callback);
    table.tBodies[0].append(...sorted);
  });
}

init();
