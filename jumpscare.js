document.addEventListener("DOMContentLoaded", () => {

    const h1 = document.getElementById("h1");
    const video = document.getElementById("video");

    // First message
    h1.textContent = "Loading dog pics...";

    // Wait 2 seconds with only text
    setTimeout(() => {

        // Hide text
        h1.style.display = "none";

        // Show and play video
        video.style.display = "block";
        video.play();

    }, 2000);

    // When the jumpscare finishes
    video.addEventListener("ended", () => {

        video.style.display = "none";
        h1.style.display = "block";

        h1.textContent = "SIKE AGAIN!! 😂";

        setTimeout(() => {
            h1.textContent = "No dog pics for now.";
        }, 2000);

    });

});
