
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let mi = document.querySelector(".nmi");
// console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
    nav.classList.add("navbg");
    mi.style.display = "none"

  }else{
    nav.classList.remove("sticky");
    nav.classList.remove("navbg");
    scrollBtn.style.display = "none";
    mi.style.display = "block"
  }

}