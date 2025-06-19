import { getProduct } from "../data/products.js";
import { addToCart } from "../data/cart.js";
import { updateCartQuantity } from "../js/main.js";

// 1. Read the `id` query-param from the URL:
const params = new URLSearchParams(window.location.search);
const productId = params.get("id"); // e.g. "03"

// 2. Fetch the product data using our lookup function:
const product = getProduct(productId);

if (!product) {
  // If no product matches that ID, show an error message
  document.querySelector(".detail-container").innerHTML =
    "<p>Product not found.</p>";
} else {
  // 3. Populate the product detail page with image, text, and specs
  // Main image element
  const mainImg = document.querySelector(".main-img");
  mainImg.src = product.image; // set image URL
  // Breadcrumb and heading names
  document.querySelector(".bread-name").textContent = product.name;
  document.querySelector(".product-name").textContent = product.name;

  // Description section
  document.querySelector(".description-sec").textContent = product.desc;

  // Technical specifications (HTML list)
  document.getElementById("product-spec").innerHTML = product.spec;

  // Price display, converting cents to dollars with two decimals
  document.querySelector(".price").textContent = `$${(
    product.priceCents / 100
  ).toFixed(2)}`;

  // 4. Wire up “Add to Cart” button to use the quantity input:
  document.querySelector(".js-add-to-cart").addEventListener("click", () => {
    const qtyInput = document.getElementById("qty"); // the quantity input field
    const qty = qtyInput.value;

    // Add the product to the cart once per unit selected
    for (let i = 0; i < qty; i++) {
      addToCart(productId);
    }

    updateCartQuantity();
  });
}
