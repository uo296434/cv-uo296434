function toggleX() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('cruz');
    var menu = document.querySelector('header ul');
    menu.classList.toggle('cerrado');
    menu.classList.toggle('abierto');
}