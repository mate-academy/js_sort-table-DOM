'use strict';

const table = document.getElementById('cars');
const tBody = document.querySelector('tbody');
const rows = [...tBody.children];
const head = document.querySelector('tr');

table.addEventListener('click', sort);

function sort(e) {
  const items = e.target;

  if (items.tagName !== 'TH') {
    return;
  }

  let sorted;

  for (let i = 0; i < head.children.length; i++) {
    if (items === head.children[i]) {
      sorted = rows
        .sort((a, b) =>
          (a.children[i]).textContent.localeCompare(b.children[i].textContent));
    }
  }

  for (const element of sorted) {
    tBody.append(element);
  }
}
