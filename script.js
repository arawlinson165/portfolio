let scroll = document.querySelector(".scroll-container");
let video = document.querySelector(".video");
// let allButtons = document.querySelector(".video-navbtn");
let aboutButton = document.querySelector("#aboutButton");
let projectsButton = document.querySelector("#projectsButton");
let contactButton = document.querySelector("#contactButton");




let scrollFraction = 0;

window.addEventListener("scroll", function () {
    if (video.duration) {
        scrollFraction = -1.5 * (scroll.getBoundingClientRect().top / scroll.clientHeight);
        video.currentTime = video.duration * scrollFraction;
        aboutButton.style.left = (scrollFraction * 100 - 30) + "%";
        projectsButton.style.left = (scrollFraction * 100 - 70) + "%";
        contactButton.style.left = (scrollFraction * 100 - 110) + "%";

        if (scrollFraction > 1.34) {
            aboutButton.style.opacity = 0;
            projectsButton.style.opacity = 0;
            contactButton.style.opacity = 0;
        } else if (scrollFraction > 1.26) {
            aboutButton.style.opacity = (1 / (scrollFraction * 3));
            projectsButton.style.opacity = (1 / (scrollFraction * 3));
            contactButton.style.opacity = (1 / (scrollFraction * 3));
        } else {
            aboutButton.style.opacity = 1;
            projectsButton.style.opacity = 1;
            contactButton.style.opacity = 1;
        }

        // console.log(scrollFraction);
    }
});
// website for change
let websiteForChange = document.querySelector("#website-for-change");
websiteForChange.addEventListener("click", function () {
    window.location.href = "../projects/website-for-change/int-u2-project-23-24-starter-code-2/index.html";
});
// choose adventure
let chooseAdventure = document.querySelector("#choose-your-adventure");
chooseAdventure.addEventListener("click", function () {
    window.location.href = "../projects/choose-your-adventure/0/0.html";
});
// RPS
let rockPaperScissors = document.querySelector("#rock-paper-scissors");
rockPaperScissors.addEventListener("click", function () {
    window.location.href = "../projects/research-paper.html";
});
// Research
let researchPaper = document.querySelector("#research-paper");
researchPaper.addEventListener("click", function () {
    window.location.href = "../projects/research-paper.html";
});

// let scrollCont = document.querySelector(".scroll-container");
// scrollCont.addEventListener("error", function(){
//     scrollCont.style.display = "none";
// });

// scouts photos
let scouts = document.querySelector("#scouts");
let scoutsArr = ["../portfolio/Carousel/ScoutPhotos/2456401734406691370.jpg", "../portfolio/Carousel/ScoutPhotos/2870486660985228773.jpg", "../portfolio/Carousel/ScoutPhotos/IMG_5055.JPEG", "../portfolio/Carousel/ScoutPhotos/IMG_5068.JPEG", "../portfolio/Carousel/ScoutPhotos/IMG_5069.JPEG", "../portfolio/Carousel/ScoutPhotos/IMG_5070.JPEG", "../portfolio/Carousel/ScoutPhotos/IMG_5071.JPEG", "../portfolio/Carousel/ScoutPhotos/IMG_5074.JPEG", "../portfolio/Carousel/ScoutPhotos/IMG_5077.JPEG", "../portfolio/Carousel/ScoutPhotos/IMG_5099.JPEG", "../portfolio/Carousel/ScoutPhotos/IMG_5552.JPG", "../portfolio/Carousel/ScoutPhotos/IMG_6202.JPG"];
let scoutsIndex = 0;
let scoutsImg = document.querySelector("#scouts-img");

scouts.addEventListener("click", function () {
    scoutsIndex++;
    if (scoutsIndex >= scoutsArr.length) { scoutsIndex = 0; }
    scoutsImg.src = scoutsArr[scoutsIndex];
    console.log(scoutsIndex);
});

let cats = document.querySelector("#cat-photos");
let catArr = ["../portfolio/Carousel/CatPhotos/213469666192863640.JPEG", "../portfolio/Carousel/CatPhotos/IMG_2416.JPEG", "../portfolio/Carousel/CatPhotos/IMG_2557.JPEG", "../portfolio/Carousel/CatPhotos/IMG_2557.JPG", "../portfolio/Carousel/CatPhotos/IMG_2904.JPEG", "../portfolio/Carousel/CatPhotos/IMG_3027.JPEG", "../portfolio/Carousel/CatPhotos/IMG_3689.JPEG", "../portfolio/Carousel/CatPhotos/IMG_3900.JPEG", "../portfolio/Carousel/CatPhotos/IMG_4090.JPEG", "../portfolio/Carousel/CatPhotos/IMG_4091.JPEG", "../portfolio/Carousel/CatPhotos/IMG_4370.JPEG", "../portfolio/Carousel/CatPhotos/IMG_4963.JPEG", "../portfolio/Carousel/CatPhotos/IMG_5135.JPEG", "../portfolio/Carousel/CatPhotos/IMG_5303.JPG", "../portfolio/Carousel/CatPhotos/IMG_5308.JPG", "../portfolio/Carousel/CatPhotos/IMG_5450.JPG", "../portfolio/Carousel/CatPhotos/IMG_5746.JPG", "../portfolio/Carousel/CatPhotos/IMG_6013.JPG", "../portfolio/Carousel/CatPhotos/IMG_6236.JPG", "../portfolio/Carousel/CatPhotos/IMG_6245.JPG", "../portfolio/Carousel/CatPhotos/IMG_6334.JPG", "../portfolio/Carousel/CatPhotos/IMG_6456.JPG", "../portfolio/Carousel/CatPhotos/IMG_6468.JPG", "../portfolio/Carousel/CatPhotos/IMG_6508.JPG"];
let catIndex = 0;
let catImg = document.querySelector("#cats-img");

cats.addEventListener("click", function () {
    catIndex++;
    if (catIndex >= catArr.length) { catIndex = 0; }
    catImg.src = catArr[catIndex];
    console.log(catIndex);
});






let travel = document.querySelector("#travel-photos");
let travelArr = ["../portfolio/Carousel/TravelPhotos/IMG_3187.JPEG", "../portfolio/Carousel/TravelPhotos/IMG_4725.JPEG", "../portfolio/Carousel/TravelPhotos/IMG_5795.JPEG", "../portfolio/Carousel/TravelPhotos/IMG_5819.JPG", "../portfolio/Carousel/TravelPhotos/IMG_5854.JPG", "../portfolio/Carousel/TravelPhotos/IMG_5858.JPG", "../portfolio/Carousel/TravelPhotos/IMG_5867.JPG", "../portfolio/Carousel/TravelPhotos/IMG_5888.JPG", "../portfolio/Carousel/TravelPhotos/IMG_5916.JPG", "../portfolio/Carousel/TravelPhotos/IMG_5930.JPG", "../portfolio/Carousel/TravelPhotos/IMG_5931.JPG", "../portfolio/Carousel/TravelPhotos/IMG_5946.jpeg", "../portfolio/Carousel/TravelPhotos/IMG_7736.JPEG"];
let travelIndex = 0;
let travelImg = document.querySelector("#travel-img");

travel.addEventListener("click", function () {
    travelIndex++;
    if (travelIndex >= travelArr.length) { travelIndex = 0; }
    travelImg.src = travelArr[travelIndex];
    console.log(travelImg.src);
});


// video.addEventListener('loadedmetadata', () => {
//     video.currentTime = 0;
// });