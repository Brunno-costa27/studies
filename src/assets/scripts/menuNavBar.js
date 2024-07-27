document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");

         // Subir a posição do menu-toggle
        //  if (menuToggle.classList.contains("active")) {
        //     menuToggle.style.transform = "translateY(-15px)"; // Ajuste conforme necessário
        // } else {
        //     menuToggle.style.transform = "translateY(0px)";
        // }
    });
});
