// ===============================
// PAGE LOADING
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        if (loading) {
            loading.style.display = "none";
        }

    }, 2500);

});


// ===============================
// SECTION NAVIGATION
// ===============================

function nextSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ===============================
// YES BUTTON
// ===============================

function yesClicked() {

    const finalSection = document.getElementById("final");

    if (finalSection) {

        finalSection.scrollIntoView({
            behavior: "smooth"
        });

    }

    createHearts();

}


// ===============================
// NO BUTTON
// ===============================

function noClicked() {

    const noBtn = document.getElementById("noBtn");

    if (!noBtn) return;

    noBtn.style.position = "fixed";

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

}


// ===============================
// MOVING HEARTS
// ===============================

function createHearts() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.innerHTML = ["❤️", "💖", "💕", "💗", "💘"][
                Math.floor(Math.random() * 5)
            ];

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.bottom = "-30px";
            heart.style.fontSize =
                (18 + Math.random() * 25) + "px";

            heart.style.pointerEvents = "none";
            heart.style.zIndex = "10000";

            heart.style.transition =
                "transform 4s linear, opacity 4s linear";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.style.transform =
                    `translateY(-${window.innerHeight + 100}px)`;

                heart.style.opacity = "0";

            }, 50);

            setTimeout(() => {

                heart.remove();

            }, 4200);

        }, i * 100);

    }

}


// ===============================
// CONTINUOUS SMALL HEARTS
// ===============================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    heart.style.opacity = "0.7";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    heart.style.transition =
        "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 100}px)`;

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 6200);

}, 900);
