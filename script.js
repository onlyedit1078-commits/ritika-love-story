/* =========================
   LOADING SCREEN
========================= */

const loading = document.getElementById("loading");

setTimeout(() => {
    if (loading) {
        loading.style.opacity = "0";

        setTimeout(() => {
            loading.style.display = "none";
        }, 600);
    }
}, 2500);


/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");

function startStory() {

    if (music) {
        music.play().catch(() => {});
    }

    showSection("story");
}


/* =========================
   SECTION NAVIGATION
========================= */

function showSection(id) {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================
   15 PHOTO MEMORY GALLERY
========================= */

const photos = [

    "IMG-20260816-WA0002.jpg",
    "IMG-20260816-WA0005.jpg",
    "IMG-20260816-WA0006.jpg",
    "IMG-20260816-WA0007.jpg",
    "IMG-20260816-WA0008.jpg",
    "IMG-20260816-WA0009.jpg",
    "IMG-20260816-WA0010.jpg",
    "IMG-20260816-WA0011.jpg",
    "IMG-20260816-WA0012.jpg",
    "IMG-20260816-WA0013.jpg",
    "IMG-20260816-WA0014.jpg",
    "IMG-20260816-WA0015.jpg",
    "IMG-20260816-WA0017.jpg",
    "IMG-20260816-WA0018.jpg",
    "IMG-20260816-WA0019.jpg"

];

let currentPhoto = 0;


/* =========================
   CREATE GALLERY
========================= */

const memoryBox = document.querySelector(".memory-box");

if (memoryBox) {

    memoryBox.innerHTML = `

        <div class="photo-slider">

            <img
                id="memorySlide"
                src="${photos[0]}"
                alt="Our beautiful memory"
            >

            <div class="photo-counter">
                1 / ${photos.length}
            </div>

        </div>

        <div class="slider-buttons">

            <button id="previousPhoto">
                ❤️ Previous
            </button>

            <button id="nextPhoto">
                Next ❤️
            </button>

        </div>

    `;

}


/* =========================
   PHOTO SLIDER
========================= */

function changePhoto(direction) {

    currentPhoto += direction;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    const image = document.getElementById("memorySlide");
    const counter = document.querySelector(".photo-counter");

    if (image) {

        image.style.opacity = "0";

        setTimeout(() => {

            image.src = photos[currentPhoto];

            image.style.opacity = "1";

        }, 200);

    }

    if (counter) {

        counter.textContent =
            `${currentPhoto + 1} / ${photos.length}`;

    }

}


const nextPhoto = document.getElementById("nextPhoto");
const previousPhoto = document.getElementById("previousPhoto");

if (nextPhoto) {

    nextPhoto.addEventListener("click", () => {

        changePhoto(1);

    });

}

if (previousPhoto) {

    previousPhoto.addEventListener("click", () => {

        changePhoto(-1);

    });

}


/* =========================
   AUTOMATIC SLIDER
========================= */

setInterval(() => {

    changePhoto(1);

}, 5000);


/* =========================
   YES BUTTON
========================= */

function yesClicked() {

    if (music) {
        music.play().catch(() => {});
    }

    showSection("final");

    setTimeout(() => {

        alert(
            "❤️ Thank You Ritika ❤️\n\n" +
            "I promise I'll always love you.\n\n" +
            "- Your Aditya"
        );

    }, 900);

}


/* =========================
   RUNNING NO BUTTON
========================= */

const noBtn = document.getElementById("noBtn");

function moveNoButton() {

    if (!noBtn) return;

    const container = document.querySelector(".buttons");

    if (!container) return;

    const maxX =
        container.clientWidth - noBtn.offsetWidth - 10;

    const maxY =
        container.clientHeight - noBtn.offsetHeight - 10;

    const x =
        Math.max(5, Math.random() * maxX);

    const y =
        Math.max(5, Math.random() * maxY);

    noBtn.style.position = "absolute";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

}


/* =========================
   NO BUTTON ALSO RUNS
   WHEN MOUSE COMES NEAR
========================= */

if (noBtn) {

    noBtn.addEventListener("mouseenter", moveNoButton);

}


/* =========================
   BACKGROUND HEARTS
========================= */

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML =
        Math.random() > .5 ? "❤️" : "💖";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (14 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1";

    heart.style.opacity = ".7";

    heart.style.transition =
        "transform 5s linear, opacity 5s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            "translateY(-110vh) rotate(360deg)";

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 5000);

}, 900);


/* =========================
   SMOOTH PAGE START
========================= */

window.addEventListener("load", () => {

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});
