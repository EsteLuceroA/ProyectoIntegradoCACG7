// eslint-disable-next-line no-undef
const add = document.querySelector('#add');
// eslint-disable-next-line no-undef
const subtract = document.querySelector('#subtract');
// eslint-disable-next-line no-undef
const quantity = document.querySelector('#quantity');
// eslint-disable-next-line camelcase, no-unused-vars

const add_2 = document.querySelector('#add_2');
subtract_2 = document.querySelector('#subtract_2');
const quantity_2 = document.querySelector('#quantity_2');

add.addEventListener(
'click',
  // eslint-disable-next-line no-return-assign
() => (quantity.value = Number(quantity.value) + 1),
);
subtract.addEventListener(
'click',
  // eslint-disable-next-line no-return-assign
() => (quantity.value = Number(quantity.value) - 1),
);

add_2.addEventListener(
'click',
  // eslint-disable-next-line no-return-assign
() => (quantity_2.value = Number(quantity_2.value) + 1),
);
subtract_2.addEventListener(
'click',
  // eslint-disable-next-line no-return-assign
() => (quantity_2.value = Number(quantity_2.value) - 1),
);