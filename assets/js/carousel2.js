// window.addEventListener("load", () => {
//    autoSlide();
// })

// function autoSlide() {
//    setInterval(() => {
//       slide(getItemActiveIndex() + 1);
//    }, 2000); // slide speed = 3s
// }

// function slide(toIndex) {
//    const itemsArray = Array.from(document.querySelectorAll(".sliding_item"));
//    const itemActive = document.querySelector(".sliding_item__active");

//    // check if toIndex exceeds the number of sliding items
//    if (toIndex >= itemsArray.length) {
//       toIndex = 0;
//    }

//    const newItemActive = itemsArray[toIndex];

//    // start transition
//    newItemActive.classList.add("sliding_item__pos_next");
//    setTimeout(() => {
//       newItemActive.classList.add("sliding_item__next");
//       itemActive.classList.add("sliding_item__next");
//    }, 20);

//    // remove all transition class and switch active class
//    newItemActive.addEventListener("transitionend", () => {
//       itemActive.className = "sliding_item";
//       newItemActive.className = "sliding_item sliding_item__active";
//    }, {
//       once: true
//    });
// }

// function getItemActiveIndex() {
//    const itemsArray = Array.from(document.querySelectorAll(".sliding_item"));
//    const itemActive = document.querySelector(".sliding_item__active");
//    const itemActiveIndex = itemsArray.indexOf(itemActive);
//    return itemActiveIndex;
// }