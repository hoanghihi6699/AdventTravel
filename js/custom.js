// Scroll To Top
mybutton = document.getElementById("btnToTop");
window.onscroll = function () { scrollFunction() };
window.scroll(console.log(document.documentElement.scrollTop));


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function srcollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}