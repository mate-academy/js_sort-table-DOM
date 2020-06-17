'use strict';

const head = document.querySelector('thead');
const content = document.querySelector('tbody');
const rowList = [...content.children];

head.addEventListener('click', sortItems);

function sortItems(e) {
  const th = e.target;
  const index = th.cellIndex;

  let compare;

  switch (e.target.dataset.type) {
    case 'string':
      compare = (a, b) => a.children[index].textContent
        .localeCompare(b.children[index].textContent);
      break;
    case 'number':
      compare = (a, b) => (
        a.children[index].textContent - b.children[index].textContent);
      break;
  };

  rowList.sort(compare);

  content.append(...rowList);
};
