'use strict';

const table = document.querySelector('#cars');
const rows = table.tBodies[0].querySelectorAll('tr');

function clickHandler() {
  if (event.target.tagName !== 'TH') {
    return;
  }

  const rowsArr = [...rows];

  if (event.target.dataset.type === 'number') {
    rowsArr.sort((a, b) => a.cells[2].innerText - b.cells[2].innerText);
  }

  if (event.target.dataset.type === 'string'
    && event.target.innerText === 'Model') {
    rowsArr.sort((a, b) => (
      a.cells[1].innerText.localeCompare(b.cells[1].innerText)
    ));
  }

  if (event.target.dataset.type === 'string'
    && event.target.innerText === 'Brand') {
    rowsArr.sort((a, b) => (
      a.cells[0].innerText.localeCompare(b.cells[0].innerText)
    ));
  }

  table.append(...rowsArr);
}

table.addEventListener('click', clickHandler);
