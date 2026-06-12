const menuToggle = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links a")
const activeSections = document.querySelectorAll("section")

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
})

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active")
    })
})

function activeMenuOnScroll() {
    let currentSection = ""

    activeSections.forEach(function (section) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
        ) {
            currentSection = section.getAttribute("id")
        }
    })

    links.forEach(function (link) {
        link.classList.remove("active")

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeMenuOnScroll)
activeMenuOnScroll()
