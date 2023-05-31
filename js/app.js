const filterButtons = document.querySelectorAll(".select");
const pizzaItems = document.querySelectorAll(".menu__item");
// pizzaItems.forEach(function(pizza){
//     if(item.classList.contains("chicken")){

//        }
// })
filterButtons.forEach(function (buttons) {
  buttons.addEventListener("click", function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
      
      console.log(buttons);
    });
    buttons.classList.add("active")
    
    const filterName = buttons.innerHTML;
    if (filterName.toLowerCase() === "chicken pizza") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("chicken")) {
          console.log(item);
          item.style.display = "flex";
        } else {
          console.log("iam not a chicken");
          item.style.display = "none";
        }
      });
    } else if (filterName.toLowerCase() === "pepperoni") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("pepperoni")) {
          console.log(item);
          item.style.display = "flex";
        } else {
          console.log("iam not a chicken");
          item.style.display = "none";
        }
      });
    } else if (filterName.toLowerCase() === "margherita") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("magherita")) {
          console.log(item);
          item.style.display = "flex";
        } else {
          console.log("iam not a chicken");
          item.style.display = "none";
        }
      });
    } else if (filterName.toLowerCase() === "hawaiin") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("hawaiian")) {
          console.log(item);
          item.style.display = "flex";
        } else {
          console.log("iam not a chicken");
          item.style.display = "none";
        }
      });
    } else if (filterName.toLowerCase() === "meat lover's pizza") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("meatlovers")) {
          console.log(item);
          item.style.display = "flex";
        } else {
          console.log("iam not a chicken");
          item.style.display = "none";
        }
      });
    }
  });
});
