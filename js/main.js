// navbar
let nav = document.querySelector("nav");

window.onscroll = function () {
    if(window.scrollY >= 100) {
        if(!nav.classList.contains("scroll")) {
            nav.classList.add("scroll"); 
        }
    } else {
        nav.classList.remove("scroll");
    }
}
// features section 
let tabs = document.querySelectorAll(".tabs li");
let arrayOfContent = document.querySelectorAll(".content");


tabs.forEach((tab, index)=> {
    tab.onclick = function() {
        // delete active class from tabs
        tabs.forEach((ele) => {
            ele.classList.remove("active");
        });
        // add active class on the clicked element
        tab.classList.add("active");
        // remove active class from content elements
        arrayOfContent.forEach((content)=> {
            content.classList.remove("active");
        });
        // add active class on content
        arrayOfContent.forEach((content, cindex)=> {
            if(index === cindex) {
                content.classList.add("active");
            }
        });
    }
});