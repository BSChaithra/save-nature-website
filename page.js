

let screen1 = document.getElementById("screen1");
let sectionDiv = document.getElementById("section-save-nature");

window.onload = (event) => {
    let element = document.getElementById("nature-image1");
    element.style.display = "inline-block";

    screen1.style.display = "none";
};

let mySlides = document.getElementById("mySlides");
mySlides.addEventListener("mouseover", (event) => {
    document.getElementById("screen1").style.display = "block";
});

let img = document.querySelectorAll(".nature-image");
let imgLength = img.length;
console.log("Total images " + img.length);

let count = 1;
let previousCount = 0;
let nextCount = 0;

function previous() {
    let imgId = "";

    let currentImg = "";
    let previousImg = "";

    for (let i = 0; i < img.length; i++) {
        imgId = "nature-image" + count;

        if (document.getElementById(imgId).style.display == "inline-block") {
            currentImg = imgId;

            previousCount = count - 1;

            if (previousCount == 0) {
                previousCount = img.length;

                previousImg = "nature-image" + previousCount;
            } else {
                previousImg = "nature-image" + previousCount;
            }
        } else continue;

        count = previousCount;
    }

    setTimeout(function () {
        document.getElementById(currentImg).style.display = "none";
        document.getElementById(previousImg).style.display = "inline-block";
        document.getElementById(currentImg).style.transition = "opacity 2s ease-in-out";
    }, 1000);
}

function next() {
    let imgId = "";

    let currentImg = "";
    let nextImg = "";

    for (let i = 0; i < img.length; i++) {
        imgId = "nature-image" + count;

        if (document.getElementById(imgId).style.display == "inline-block") {
            currentImg = imgId;

            nextCount = count + 1;

            if (nextCount > imgLength) {
                nextCount = 1;

                nextImg = "nature-image" + nextCount;
            } else {
                nextImg = "nature-image" + nextCount;
            }
        } else continue;

        count = nextCount;
    }

    setTimeout(function () {
        document.getElementById(currentImg).style.display = "none";
        document.getElementById(nextImg).style.display = "inline-block";
        document.getElementById("mySlides").style.transition = "all 2s";
    }, 1000);
}
