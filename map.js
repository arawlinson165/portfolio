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
        aboutButton.style.left = (scrollFraction * 100 - 25) + "%";
        projectsButton.style.left = (scrollFraction * 100 - 65) + "%";
        contactButton.style.left = (scrollFraction * 100 - 105) + "%";

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

        console.log(scrollFraction);
    }
});



video.addEventListener('loadedmetadata', () => {
    video.currentTime = 0;
});