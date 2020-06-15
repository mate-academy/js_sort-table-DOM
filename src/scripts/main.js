/* eslint-disable no-console */
'use strict';

addEventListener('click', function(ev) {
  const tableHead = ev.target.parentElement.children;
  const table = document.querySelector('tbody');
  const tableChildren = Array.from(table.children);

  if (ev.target.tagName === 'TH') {
    const columnToSort = Array.from(tableHead).indexOf(ev.target);
    const sortedTable = tableChildren.sort(function(a, b) {
      return (getElement(a, columnToSort) < getElement(b, columnToSort))
        ? -1
        : 1;
    });

    for (const row of sortedTable) {
      table.append(row);
    }
  }
});

function getElement(item, index) {
  const element = Array.from(item.querySelectorAll('td'))[index].textContent;

  return element;
}
