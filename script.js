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
        } else if(scrollFraction > 1.26){
            aboutButton.style.opacity = (1 / (scrollFraction * 3));
            projectsButton.style.opacity = (1 / (scrollFraction * 3));
            contactButton.style.opacity = (1 / (scrollFraction * 3));
        } else{
            aboutButton.style.opacity = 1;
            projectsButton.style.opacity = 1;
            contactButton.style.opacity = 1;
        }

        // console.log(scrollFraction);
    }
});
// website for change
let websiteForChange = document.querySelector("#website-for-change");
websiteForChange.addEventListener("click", function (){
    window.location.href = "../projects/website-for-change/int-u2-project-23-24-starter-code-2/index.html";
});
// choose adventure
let chooseAdventure = document.querySelector("#choose-your-adventure");
chooseAdventure.addEventListener("click", function (){
    window.location.href = "../projects/choose-your-adventure/0/0.html";
});
// RPS
let rockPaperScissors = document.querySelector("#rock-paper-scissors");
rockPaperScissors.addEventListener("click", function (){
    window.location.href = "../projects/research-paper.html";
});
// Research
let researchPaper = document.querySelector("#research-paper");
researchPaper.addEventListener("click", function (){
    window.location.href = "../projects/research-paper.html";
});

// let scrollCont = document.querySelector(".scroll-container");
// scrollCont.addEventListener("error", function(){
//     scrollCont.style.display = "none";
// });

// scouts photos
let scouts = document.querySelector("#scouts");
let scoutsArr = ["Assets/alex-and-luna.jpg", "Assets/hiking-trail.jpg"];
let scoutsIndex = 0;
let scoutsImg = document.querySelector("#scouts-img");

scouts.addEventListener("click", function(){
    scoutsIndex++;
    if(scoutsIndex >= scoutsArr.length) {scoutsIndex = 0;}
    scoutsImg.src = scoutsArr[scoutsIndex];
    console.log(scoutsIndex);
});



// video.addEventListener('loadedmetadata', () => {
//     video.currentTime = 0;
// });