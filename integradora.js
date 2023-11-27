document.addEventListener("DOMContentLoaded", function () {
    var section1 = document.querySelector(".section-1");
    var section2 = document.querySelector(".section-2");
    var section3 = document.querySelector(".section-3");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        var section1Position = section1.offsetTop;
        if (scrollPosition > section1Position - windowHeight / 2) {
            section1.classList.add("section-visible");
        }

        var section2Position = section2.offsetTop;
        if (scrollPosition > section2Position - windowHeight / 2) {
            section2.classList.add("section-visible");
        }

        var section3Position = section3.offsetTop;
        if (scrollPosition > section3Position - windowHeight / 2) {
            section3.classList.add("section-visible");
        }
    });
});

