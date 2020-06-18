'use strict';

const cars = document.querySelector('#cars');
const table = [...cars.tBodies[0].children];

document.addEventListener('click', e => {
  if (e.target.tagName === 'TH') {
    const i = e.target.cellIndex;

    table.sort((a, b) => {
      if (b.cells[i].innerText > a.cells[i].innerText) {
        return -1;
      }

      return 0;
    }).forEach(x => cars.tBodies[0].appendChild(x));
  }
});
