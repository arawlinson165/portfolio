let scroll = document.querySelector(".scroll-container");
let video = document.querySelector(".video");
let aboutButton = document.querySelector("#aboutButton");
let projectsButton = document.querySelector("#projectsButton");
let contactButton = document.querySelector("#contactButton");




let scrollFraction = 0;

window.addEventListener("scroll", function(){
    if(video.duration){
        scrollFraction = -1.25 * (scroll.getBoundingClientRect().top / scroll.clientHeight);
        video.currentTime = video.duration * scrollFraction;
        aboutButton.style.left= (scrollFraction * 100 - 10) + "%";
        projectsButton.style.left= (scrollFraction * 100 - 50) + "%";
        contactButton.style.left= (scrollFraction * 100 - 90) + "%";
        console.log(scrollFraction);
    }
});

// aboutButton.addEventListener("click", function(){
//     event.preventDefault();
//     window.location.href = "about-me.html";
// });

video.addEventListener('loadedmetadata', () => {
  video.currentTime = 0; 
});