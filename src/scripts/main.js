'use strict';

const cars = document.querySelector('#cars');
const tr = [...document.querySelectorAll('tr')];
const iterebelTr = tr.slice(1);

const tHeadTR = document.querySelector('tr');
const tHeadTHChildren = [...tHeadTR.children];

function sortFunc(e) {
  if (e.target.tagName === 'TH') {
    const index = tHeadTHChildren.findIndex(elem => elem === e.target);

    const iterebelTrValues = iterebelTr.map(item => {
      return item.children[index].innerHTML;
    });

    if (e.target.getAttribute('data-type') === 'string') {
      iterebelTrValues.sort();
    } else {
      iterebelTrValues.sort((a, b) => {
        return a - b;
      });
    }

    iterebelTrValues.forEach((item, i) => {
      iterebelTr[i].children[index].innerHTML = item;
    });
  }
}

cars.addEventListener('click', sortFunc);
