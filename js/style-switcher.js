/* Toggle style swicher*/

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {

    document.querySelector(".style-switcher").classList.toggle("open");

})

window.addEventListener("scroll", () => {
        if (document.querySelector(".style-switcher").classList.contains("open")) {
            document.querySelector(".style-switcher").classList.remove("open");
        }
    })
    /**Theme colors */
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('a[href*=' + sectionId + ']').classList.add("active");
            console.log(scrollY);

            console.log(sectionTop);
        } else {
            document.querySelector('a[href*=' + sectionId + ']').classList.remove("active");
        }
    })
}

window.addEventListener("scroll", scrollActive);

/**Theme light and dark modle */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");

    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})