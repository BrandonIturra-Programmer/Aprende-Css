
(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav_link--show');
        //Va a la clase nav_link y agrega la clase nav_link--show

    });

    closeMenu.addEventListener('click', () => {
        //Cuando se presiona el boton de cerrar, se remueve la clase nav_link--show
        menu.classList.remove('nav_link--show');
    });

})();