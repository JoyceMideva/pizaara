console.log("cartpage");
const addToCart = document.querySelectorAll(".add-to-cart");

const cartPreview = document.getElementById("cart-preview");
console.log(cartPreview);
const counter = document.getElementById("counter");
console.log(counter);
const cartItems = [];
addToCart.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.target;

    if (e.target.textContent === "Add to cart") {
      const pizzaImage = e.target.parentElement.children[0].getAttribute("src");
      const pizzaName = e.target.parentElement.children[1].textContent;
      const pizzaFillings = e.target.parentElement.children[2].textContent;
      const pizzaPrice = parseInt(
        e.target.parentElement.children[3].dataset.price
      );
      // console.log(pizzaPrice)
      // console.log(pizzaFillings)
      // console.log(pizzaName)
      console.log(pizzaImage)

      const pizzaItem = {
        pizzaImage: pizzaImage,
        pizzaName: pizzaName,
        pizzaFillings: pizzaFillings,
        pizzaPrice: pizzaPrice,
      };
      console.log(pizzaItem);
      cartItems.push(pizzaItem);
      counter.textContent = cartItems.length;
      e.target.textContent = "added to cart";

      console.log(cartItems);
    }
    const cartPreviewItem=document.createElement("div")
    // console.log(e.target.parentElement.children[0].getAttribute("src"))

    // Update Cart Preview
   
    cartItems.map((item) => {
     cartPreviewItem.innerHTML=`
     <div class="cart-item">
     <i class="fa-solid fa-xmark"></i>
     <img src=${item.pizzaImage} />
     <p>${item.pizzaName}</p>
     <p>${item.pizzaFillings}</p>
     <p>${item.pizzaPrice}</p>
     </div>
     `
     cartPreview.appendChild(cartPreviewItem)

      console.log(item);
    });
  });
});
