document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("nav ul li a");
    const headerHeight = document.querySelector("header").offsetHeight;
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight,
                });
            }
        });
    });


    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const sectionId = section.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").replace("#", "") === sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});

window.onscroll = function () {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("back-to-top").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
