'use strict';

const table = document.querySelector('#cars');
const tHead = table.children[0];
const tBody = table.children[1].querySelectorAll('tr');

function sorter(sortEvent) {
  let sorted;
  const sortType = sortEvent.target;

  if (sortType.tagName === 'TH') {
    if (sortType.dataset.type === 'number') {
      sorted = [...tBody].sort((a, b) => {
        const first = a.lastElementChild.textContent;
        const second = b.lastElementChild.textContent;

        return first - second;
      });
    }

    if (sortType.dataset.type === 'string') {
      const order = (sortType.nextElementSibling.dataset.type === 'number')
        ? 1 : 0;

      sorted = [...tBody].sort((a, b) => {
        const first = a.children[order].textContent;
        const second = b.children[order].textContent;

        return second.localeCompare(first);
      });
    }

    table.children[1].innerHTML = '';

    for (let i = 0; i < sorted.length; i++) {
      table.children[1].insertAdjacentHTML(
        'afterbegin', `
          ${sorted[i].innerHTML}
        `
      );
    }
  }
};

tHead.addEventListener('click', sorter);
