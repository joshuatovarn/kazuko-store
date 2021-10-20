window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("abajo", window.scrollY>0)
})