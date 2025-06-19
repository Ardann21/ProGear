import { cart } from "../data/cart.js";
import { getProduct } from "../data/products.js";

/*Calculate Total Cheackout Price*/
export function renderSummary() {
  let productPriceCents = 0;
  // For each item in the cart
  cart.forEach((cartItem) => {
    // get the full product details by ID
    const product = getProduct(cartItem.productId);
    // and add (price × quantity)
    productPriceCents += product.priceCents * cartItem.quantity;
  });
  // Convert the total from cents to dollars
  const totalDollars = (productPriceCents / 100).toFixed(2);
  // Build the HTML for the summary: total amount and checkout button
  const paymentSummaryHTML = `
    <span class="total">Total: $${totalDollars}</span>
    <button class="btn-checkout">Proceed to Checkout</button>
  `;
  // Inject the summary HTML into the page at the .cart-summary element
  document.querySelector(".cart-summary").innerHTML = paymentSummaryHTML;
}

renderSummary();
