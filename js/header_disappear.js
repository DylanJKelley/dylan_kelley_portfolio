// Script for <h1 id="name">...</h1>.
// If the page is scrolled down 100 pixels, past the heading, the heading will disappear.
window.addEventListener("scroll", function () {
    var target = document.getElementsByTagName('h1');
    if (window.pageYOffset > 100) {
        target[0].style.color = "transparent";
    } else if (window.pageYOffset < 150) {
        target[0].style.color = "white";
    }
}, false);