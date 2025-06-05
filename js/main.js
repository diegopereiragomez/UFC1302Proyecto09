(function(){
    const getButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.head_link');
    const closeMenu = document.querySelector('.nav_close');
    getButton.addEventListener("click", () => { menu.classList.add('head_link-show') });
    closeMenu.addEventListener("click", () => { menu.classList.remove('head_link-show') });
})();