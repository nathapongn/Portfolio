const ham = document.querySelector(".ham");
const navmenu = document.querySelector(".navmenu");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    navmenu.classList.toggle("active");
})

var typed = new Typed(".auto-type", {
    strings: ["Nat", "a UX/UI Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
// slider
function scrolll(){
    var left=document.querySelector(".slider")
    left.scrollBy(-785, 0)
}
function scrollr(){
    var right=document.querySelector(".slider")
    right.scrollBy(785, 0)
}

//header change transparent to blurred


