function toggleMenu() {
    document
    .getElementById("menu").classList.toggle("show");
}


/* ---------------- TYPEWRITER EFFECT ---------------- */

const text = "Frontend Developer";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}

// start typing when page loads
typingEffect();

/* ---------------- SCROLL ANIMATION ---------------- */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});
