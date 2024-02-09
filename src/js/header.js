//create header on top of cart-items container with number of items in list
export function initCartHeader() {
  const cartItems = document.querySelector(".cart-items");
  const header = document.createElement("h2");
  cartItems.insertBefore(header, cartItems.firstChild);

  const listItem = document.querySelectorAll("li");
  const numberOfItems = listItem.length;

  header.innerHTML = `My Cart (${numberOfItems} items)`;
}
