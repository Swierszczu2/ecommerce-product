const mainPhoto = document.getElementById("main-photo");
const lightbox = document.querySelector(".lightbox");
const closeLB = document.querySelector(".exit");
const images = [...document.querySelectorAll("main .small-image")];
const nextArrow = document.querySelector(".next-arrow");
const previousArrow = document.querySelector(".previous-arrow");
const mainLB = document.getElementById("main-lightbox");
const lightboxImages = [...document.querySelectorAll(".lightbox .small-image")];
const cart = document.querySelector(".cart");
const popup = document.querySelector(".popup-cart");
const amountButtons = document.querySelectorAll(".set-amount button");
const amountEl = document.querySelector(".amount");
const addButton = document.querySelector(".add-to-cart");
const cartAmount = document.querySelector(".cart-amount");
const itemNumber = document.querySelector(".number-of-items");
const fullPrice = document.querySelector(".full-price");
const clearCart = document.querySelector(".delete-icon");
const popupEl = document.querySelector(".popup-items");

let i = 1;

mainPhoto.addEventListener("click", () => {
  lightbox.classList.add("enable-lightbox");
});

closeLB.addEventListener("click", () => {
  lightbox.classList.remove("enable-lightbox");
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    mainPhoto.src = `./images/image-product-${images.indexOf(image) + 1}.jpg`;
    images.forEach((image) => {
      image.classList.remove("active-image");
    });
    image.classList.add("active-image");
  });
});

nextArrow.addEventListener("click", () => {
  i < images.length ? i++ : (i = 1);
  mainLB.src = `./images/image-product-${i}.jpg`;
});

previousArrow.addEventListener("click", () => {
  i > 1 ? i-- : (i = images.length);
  mainLB.src = `./images/image-product-${i}.jpg`;
});

cart.addEventListener("click", () => {
  popup.classList.toggle("active");
});

amountButtons.forEach((amount) => {
  amount.addEventListener("click", (e) => {
    if (e.target.classList.contains("increase-amount")) {
      amountEl.textContent++;
    } else {
      amountEl.textContent < 1
        ? alert("You can't select lower than 0")
        : amountEl.textContent--;
    }
  });
});

function updateCart() {
  const value = amountEl.textContent;
  cartAmount.classList.add("active");
  cartAmount.textContent = value;
  itemNumber.textContent = value;
  fullPrice.textContent = `$${125 * value}.00`;
}

addButton.addEventListener("click", () => {
  console.log(amountEl.textContent);
  if (amountEl.textContent == 0) {
    alert("You can't add 0 items");
  } else {
    updateCart();
  }
});

clearCart.addEventListener("click", () => {
  popupEl.textContent = "Your cart is empty";
});
