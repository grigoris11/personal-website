document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".progress-circle");

    circles.forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        const offset = 283 - (283 * percent) / 100; // Calculate stroke-dashoffset
        circle.style.strokeDashoffset = offset;
    });
});
