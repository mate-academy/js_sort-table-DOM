'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const tbody = document.querySelector('tbody');
  const arr = [];
  const result = new Set();
  const index = e.target.cellIndex;

  for (let i = 0; i < tbody.rows.length; i++) {
    arr.push(tbody.rows[i].cells[index].innerText);
  }

  if (e.target.dataset.type === 'number') {
    arr.sort((a, b) => {
      return a - b;
    });
  } else {
    arr.sort();
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (tbody.rows[j].cells[index].innerText === arr[i]) {
        result.add(tbody.rows[j].outerHTML);
      }
    }
  }

  tbody.innerHTML = `
  ${[...result.keys()].join('')}
  `;
});
