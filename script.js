const burgerBtn = document.querySelector(".burger-menu");

if (burgerBtn) {
    const menu = document.querySelector(".header-menu-list");
    burgerBtn.addEventListener("click", function(e) {
        burgerBtn.classList.toggle("active");
        menu.classList.toggle("active");
    })
}


let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  };

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};