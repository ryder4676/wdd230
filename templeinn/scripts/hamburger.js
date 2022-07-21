const ham = document.querySelector("#hamburgerBtn");
function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

ham.addEventListener("click", toggleMenu);