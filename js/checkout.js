import { cart, removeCart, updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { renderSummary } from "../js/payment.js";

let innerHTMLcart = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  innerHTMLcart += `
      <div class="cart-item js-cart-item-container-${matchingProduct.id}">
        <img src="${matchingProduct.image}" alt="Adjustable Bench">
        <div class="item-details">
          <h4>${matchingProduct.name}</h4>
          <p class="price">$${matchingProduct.priceCents / 100}</p>
        </div>
        <div class="quantity-controls">
          <span>
              Quantity: <span class="quantity-label js-quantity-label-${
                matchingProduct.id
              }">${cartItem.quantity}</span>
            </span>
            
            <input class="quantity-input js-quantity-input-${
              matchingProduct.id
            }">
            <span class="save-quantity-link link-primary js-save-link"
              data-product-id="${matchingProduct.id}">
              Save
            </span>
          <button ><i class="fa-solid fa-trash delete-js" data-product-id="${
            matchingProduct.id
          }"></i></button>
        </div>
        
      </div>
  `;
});
document.querySelector(".added-cart-items").innerHTML = innerHTMLcart;

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  /*Show Cart Quantity into Cart Icon*/
  document.querySelector(".num-p").innerHTML = cartQuantity;
}

// Add click event listeners to all delete (trash) icons
document.querySelectorAll(".delete-js").forEach((link) => {
  link.addEventListener("click", () => {
    // Get the product ID from the clicked trash icon
    const productId = link.dataset.productId;
    // Remove the product from the cart data
    removeCart(productId);

    // Find the cart item container in the DOM and remove it from the page
    const itemContainer = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    itemContainer.remove();
    // Update the summary and cart quantity display
    renderSummary();
    updateCartQuantity();
  });
});

// Add click event listeners to all "Save" links for quantity changes
document.querySelectorAll(".js-save-link").forEach((link) => {
  link.addEventListener("click", () => {
    // Get the product ID from the clicked save link
    const productId = link.dataset.productId;

    // Find the input field for the new quantity
    const quantityInput = document.querySelector(
      `.js-quantity-input-${productId}`
    );

    // Get the new quantity value from the input
    const newQuantity = Number(quantityInput.value);
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else {
      alert("Invalid quantity !");
      return;
    }
    // Update the quantity label in the cart item display
    const quantityLabel = document.querySelector(
      `.js-quantity-label-${productId}`
    );
    quantityLabel.innerHTML = newQuantity;
    // Update the cart quantity and summary display
    updateCartQuantity();
    renderSummary();
  });
});
