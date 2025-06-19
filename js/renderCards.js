import { products } from "../data/products.js";

// Build and insert product cards for a given category
export function renderCards(category = "") {
  const container = document.querySelector(".products-js");
  var list = [];
  // explicit if/else instead of ternary
  if (category !== undefined && category !== "") {
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === category) {
        list.push(products[i]);
      }
    }
  } else {
    list = products;
  }

  container.innerHTML = list
    .map(
      (p) => `
        <div class="product-card" data-category="${p.category}">
          <a style="text-decoration:none;" href="product.html?id=${p.id}">
            <img src="${p.image}" alt="${p.name}" />
            <h4>${p.name}</h4>
            <p class="price">$${(p.priceCents / 100).toFixed(2)}</p>
          </a>
          <button class="js-add-to-cart" data-id="${p.id}">Add to Cart</button>
        </div>
      `
    )
    .join("");
}
