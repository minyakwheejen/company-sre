const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
let myNavbar = document.getElementById("myNavbar");

//navbar burger
burger.addEventListener('click', function(){
  navLinks.classList.toggle('show');
  burger.classList.toggle('toggle');
});

// accordion
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

let dropdowns = document.querySelectorAll('.dropdown-toggle')
dropdowns.forEach((dd)=>{
    dd.addEventListener('click', function (e) {
        var el = this.nextElementSibling
        el.style.display = el.style.display==='block'?'none':'block'
    })
})
// function onScroll2() {
//   // Get scroll value
//   const scroll = document.documentElement.scrollTop;
//   console.log(scroll);

//   // If scroll value is more than 0 - add class
//   if (scroll > 100) {
//     myNavbar.classList.add("visible");
//   }else{
//     myNavbar.classList.remove("visible");
//   }

//   // Remove class when scroll value is less than or equal to 0
//   if (scroll <= 100) {
//     myNavbar.classList.remove("visible");
//   }
// }

// window.addEventListener("scroll", onScroll2);
