'use strict';

const carsElement = document.getElementById('cars');
const carsElementBody = carsElement.tBodies[0];
const carsList = [];

for (const carElement of carsElementBody.children) {
  carsList.push(carElement);
}

carsElement.addEventListener('click', function(e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  sortCars(e.target.cellIndex, e.target.dataset.type);

  carsElementBody.innerHTML = '';

  carsList.forEach(carElement => {
    carsElementBody.append(carElement);
  });
});

function sortCars(index, type) {
  const checkCarsCallback = (previous, next) => {
    const previousCellInner = previous.cells[index].textContent;
    const nextCellInner = next.cells[index].textContent;

    return type === 'string'
      ? previousCellInner.localeCompare(nextCellInner)
      : previousCellInner - nextCellInner;
  };

  return carsList.sort(checkCarsCallback);
}
