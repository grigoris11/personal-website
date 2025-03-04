document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("mode-toggle");

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");

        // Update button text based on the current mode
        if (document.body.classList.contains("light-mode")) {
            toggleButton.textContent = "Switch to Dark Mode";
        } else {
            toggleButton.textContent = "Switch to Light Mode";
        }
    });
});
