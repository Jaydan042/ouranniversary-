// ===== AUTO PLAY MUSIC & HEARTS ON LOAD =====
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.play().catch(()=>{console.log("Autoplay blocked")});
  startHearts();
  revealSections();
});

// ===== FLOATING HEARTS =====
function startHearts(){
  setInterval(()=>{
    const heart = document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=Math.random()*15+15+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  },500);
}

// ===== SECTION REVEAL =====
const sections=document.querySelectorAll("section");
function revealSections(){
  sections.forEach(section=>{
    const top=section.getBoundingClientRect().top;
    if(top<window.innerHeight-100) section.classList.add("show");
  });
}
window.addEventListener("scroll",revealSections);

// ===== SLIDESHOW =====
const slides=document.querySelectorAll(".slideshow img");
let currentSlide=0;
let slideInterval=setInterval(showSlide,4000);
function showSlide(){
  slides.forEach((slide,index)=>{ slide.classList.remove("active"); if(index===currentSlide) slide.classList.add("active"); });
  currentSlide=(currentSlide+1)%slides.length;
}

// ===== VIDEO POPUPS =====
function openVideo(src){
  clearInterval(slideInterval);
  const overlay=document.getElementById("video-overlay");
  const video=document.getElementById("popup-video");
  video.src=src;
  overlay.style.display="flex";
  video.play();
}
function closeVideo(){
  const overlay=document.getElementById("video-overlay");
  const video=document.getElementById("popup-video");
  video.pause();
  overlay.style.display="none";
  video.src="";
  slideInterval=setInterval(showSlide,4000);
}

// ===== HIDDEN MESSAGE =====
function revealMessage(){ document.getElementById("hidden-msg").style.display="block"; }
