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


// Slide

var _imgArray = [];
var index = 0;
var tagImg;
var t;

function slideShow() {
    tagImg = document.getElementById('slide-show');
    for (var i = 0; i < 4; i++) {
        _imgArray[i] = new Image();
        _imgArray[i].src = 'img/image/nha-trang/nha-trang-' + (i + 1) + '.jpg';
        console.log(_imgArray[i].src);
        index = i;
    }
    _autoPlay();
}
//hello

function _autoPlay() {
    tagImg.style.backgroundImage = 'linear-gradient(rgba(136, 100, 33, 0.4),rgba(192, 192, 192, 0.4)),url(\'' + _imgArray[index].src + '\')';
    index++;
    t = setTimeout('_autoPlay()', 3800);
    if (index == _imgArray.length) {
        index = 0;
    }
}

function next() {
    console.log(index);
    if (index < (_imgArray.length)) {

        tagImg.style.backgroundImage = 'linear-gradient(rgba(136, 100, 33, 0.4),rgba(192, 192, 192, 0.4)),url(\'' + _imgArray[index].src + '\')';
        console.log(tagImg.style.backgroundImage);
        index++;
    }
    else {
        tagImg.style.backgroundImage = 'linear-gradient(rgba(136, 100, 33, 0.4),rgba(192, 192, 192, 0.4)),url(' + _imgArray[0].src + ');';
        index = 0;
    }
}