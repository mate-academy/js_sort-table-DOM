'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHead.addEventListener('click', function(e) {
  const index = e.target.cellIndex;

  sortTable(index);
});

function sortTable(index) {
  const items = [ ...tBody.rows ];

  items.sort((currentEl, nextEl) => {
    const current = currentEl.cells[index].textContent;
    const next = nextEl.cells[index].textContent;

    return current.localeCompare(next);
  });

  tBody.append(...items);
}
