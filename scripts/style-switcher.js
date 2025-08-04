/* ================= Color Switcher ==================*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");    
})

// Close style switcher on scroll
window.addEventListener("scroll", () => {

    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// Color switching functionality
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    // Remove localStorage usage and implement immediate color switching
    changeColor(color);
}

function changeColor(selectedColor) {
    alternateStyle.forEach((style) => {
        if(selectedColor === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}

// Initialize with default color on page load
window.addEventListener("load", () => {
    // Set default color to color-1
    changeColor("color-1");
});

/* ================= Theme Light and Dark Mode ==================*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

// Initialize day/night mode on page load
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun");
    }
})