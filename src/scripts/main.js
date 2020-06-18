'use strict';

const table = document.querySelector('#cars');
const trWrapper = document.querySelector('tbody');

function catchTarget(e) {
  const target = e.target;

  return target.tagName === 'TH';
}

function rotation(list, cell) {
  list.sort((a, b) => {
    return a.cells[cell].innerHTML.localeCompare(b.cells[cell].innerHTML);
  });

  list.forEach(tr => trWrapper.append(tr));
}

table.addEventListener('click', e => {
  if (catchTarget(e)) {
    const trList = Array.from(trWrapper.rows);

    trWrapper.innerHTML = '';

    switch (e.target.innerHTML) {
      case 'Brand':
        rotation(trList, 0);
        break;
      case 'Model':
        rotation(trList, 1);
        break;
      case 'Year':
        trList.sort((a, b) => {
          return a.cells[2].innerHTML - b.cells[2].innerHTML;
        });

        trList.forEach(tr => trWrapper.append(tr));
        break;
    }
  }
});
