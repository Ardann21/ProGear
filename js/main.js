import { cart } from "../data/cart.js";

// Toggle mobile menu open and close when the menu button is clicked
const btn = document.getElementById("mobile-menu-toggle");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("open");
});

/* Mobile dropdown menu toggle */

const dropdown = document.getElementsByClassName("shop-m-toggle");

// Add click event to each dropdown toggle
for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    var dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

/* Accordion menu enable-disable */

const accordion = document.getElementsByClassName("accordion");

// Add click event to each accordion toggle
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* Update the cart quantity shown in the cart icon */
export function updateCartQuantity() {
  let cartQuantity = 0;
  // Summing the quantity
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  // Display the total quantity in the element with class 'num-p'
  document.querySelector(".num-p").innerHTML = cartQuantity;
}

updateCartQuantity();
