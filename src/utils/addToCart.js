export function addToCart(amount, good, method) {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  const newArray = JSON.parse(localStorage.getItem('cart'));
  let isInArray;
  const mapedArray = newArray.map((el) => {
    if (el.id === good.id) {
      if (method === 'replace') {
        el.quantity = amount;
      }
      if (method === 'add') {
        el.quantity += amount;
      }

      isInArray = true;
    }
    return el;
  });

  if (!isInArray) {
    const temp = { ...good };
    temp.quantity = amount;

    mapedArray.push(temp);
  }

  localStorage.setItem('cart', JSON.stringify(mapedArray));

  return !isInArray;
}
