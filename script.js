document.addEventListener("DOMContentLoaded", function() {
    console.log("Website is fully loaded");

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            alert(`You clicked on ${link.textContent}`);
        });
    });
});
