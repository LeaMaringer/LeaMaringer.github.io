function change_picture() {
    var picture = document.getElementById("me").src;
    if (picture.indexOf("img/photoLea.jpg") != -1) {
        document.getElementById("me").src = "img/image_deepai.jpeg";
    }
    else {
        document.getElementById("me").src = "img/photoLea.jpg";
    }
};