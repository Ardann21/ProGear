import { products } from "../data/products.js";
import { addToCart } from "../data/cart.js";
import { updateCartQuantity } from "../js/main.js";

// 1. Build the HTML string

let productsHTML = "";
products.forEach((product) => {
  productsHTML += `
    <div class="product-card" >
      <a style="text-decoration: none;" href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p class="price">$${(product.priceCents / 100).toFixed(2)}</p>
      </a>
      <button class="js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

const productsContainer = document.querySelector(".products-js");
productsContainer.innerHTML = productsHTML;

// Build and insert product cards for a given category
export function renderCards(category = "") {
  const container = document.querySelector(".products-js");
  var list = [];
  if (category !== undefined && category !== "") {
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === category) {
        list.push(products[i]);
      }
    }
  } else {
    list = products;
  }

  let html = "";
  list.forEach((p) => {
    html += `
      <div class="product-card" data-category="${p.category}">
        <a style="text-decoration:none;" href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" />
          <h4>${p.name}</h4>
          <p class="price">$${(p.priceCents / 100).toFixed(2)}</p>
        </a>
        <button class="js-add-to-cart" data-id="${p.id}">Add to Cart</button>
      </div>
    `;
  });
  container.innerHTML = html;
}

export function addCartButtonClick() {
  const container = document.querySelector(".products-js");
  container.addEventListener("click", (event) => {
    // Check if the clicked element is an "Add to Cart" button
    if (event.target.matches(".js-add-to-cart")) {
      // Add the product to the cart using its data-id attribute
      addToCart(event.target.dataset.id);
      // Update the cart quantity shown in the cart icon
      updateCartQuantity();
    }
  });
}

// Call the function
addCartButtonClick();
renderCards();
updateCartQuantity();
