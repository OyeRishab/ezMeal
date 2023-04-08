const menuBtn = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
  menuBtn.classList.toggle("fa-xmark");
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.remove("show-links");
    menuBtn.classList.remove("fa-xmark");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 74;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
