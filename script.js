
const burgerBtn = document.querySelector(".burger-menu");

if (burgerBtn) {
    const menu = document.querySelector(".header-menu-list");
    burgerBtn.addEventListener("click", function(e) {
        burgerBtn.toggle("active")
    })
}
