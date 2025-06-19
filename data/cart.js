// load cart from localStorage if none,we get empty array
export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  // Look for an existing cart item with the same productId
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    // If found, increment its quantity
    matchingItem.quantity += 1;
  } else {
    // If not found, add a new item with quantity 1
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  // Save the updated cart back to storage
  saveToStorage();
}

// Remove all products for the specified productId from the cart
export function removeCart(productId) {
  const newCart = [];

  // Rebuild cart, excluding the item with matching productId
  cart.forEach((item) => {
    if (item.productId !== productId) {
      newCart.push(item);
    }
  });

  // Replace the old cart with the filtered one
  cart = newCart;

  saveToStorage();
}

// Update the quantity of a specific cart item
export function updateQuantity(productId, newQuantity) {
  // Find the matching cart item
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // Set its quantity to the new value
  matchingItem.quantity = newQuantity;

  // Save the updated cart
  saveToStorage();
}
