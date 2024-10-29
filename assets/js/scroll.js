let backgroundElement = document.querySelector('.background');
window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    let clipPathValue = Math.max(0, scrollY - 0.5 * window.innerHeight) * 1;

    // Check if scroll Y has reached 50%
    if (scrollY >= 0.5 * window.innerHeight) {
        backgroundElement.style.clipPath = "circle(" + clipPathValue + "px at left center)";
    } else {
        // Reset clipPath if scroll Y is less than 50%
        backgroundElement.style.clipPath = "circle(0px at left center)";
    }
});