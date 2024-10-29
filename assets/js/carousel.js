window.addEventListener("load", () => {
   const carousels = document.querySelectorAll(".carousel");
   carousels.forEach(carousel => {
      setupCarousel(carousel);
      autoSlide(carousel);
   });
});

function setupCarousel(carousel) {
   const itemsArray = Array.from(carousel.querySelectorAll(".carousel_item"));
   if (itemsArray.length > 0) {
      itemsArray[0].classList.add("carousel_item__active");
   }
}

function autoSlide(carousel) {
   setInterval(() => {
      slide(carousel, getItemActiveIndex(carousel) + 1);
   }, 2000); // slide speed = 2s
}

function slide(carousel, toIndex) {
   const itemsArray = Array.from(carousel.querySelectorAll(".carousel_item"));
   const itemActive = carousel.querySelector(".carousel_item__active");

   // check if toIndex exceeds the number of carousel items
   if (toIndex >= itemsArray.length) {
      toIndex = 0;
   }

   const newItemActive = itemsArray[toIndex];

   // start transition
   newItemActive.classList.add("carousel_item__pos_next");
   setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
   }, 20);

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
   }, {
      once: true
   });
}

function getItemActiveIndex(carousel) {
   const itemsArray = Array.from(carousel.querySelectorAll(".carousel_item"));
   const itemActive = carousel.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
}
