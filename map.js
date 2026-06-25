let scroll = document.querySelector(".scroll-container");
let video = document.querySelector(".video");

let scrollFraction = 0;

window.addEventListener("scroll", function(){
    if(video.duration){
        scrollFraction = -1.25 * (scroll.getBoundingClientRect().top / scroll.clientHeight);
        video.currentTime = video.duration * scrollFraction;
        console.log(scrollFraction);
    }
});

video.addEventListener('loadedmetadata', () => {
  video.currentTime = 0; 
});