const book = document.querySelector(".book");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

book.addEventListener('click' , ()=>{

    navLinks.classList.toogle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    book.classList.toggle("toogle");
});