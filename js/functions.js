function change_picture() {
    var picture = document.getElementById("me").src;
    if (picture.indexOf("img/photoLea.jpg") != -1) {
        document.getElementById("me").src = "img/midjourney_picture.png";
    }
    else {
        document.getElementById("me").src = "img/photoLea.jpg";
    }
};