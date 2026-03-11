//intersection observer.
const bars = document.querySelectorAll(".right");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

bars.forEach(bar => observer.observe(bar));

//event listener for toogle btn.
const btn = document.querySelector(".toggle_btn");
const menu = document.querySelector(".dropdown_menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
});