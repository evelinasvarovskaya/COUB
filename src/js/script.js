window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.links'),
        menuItem = document.querySelectorAll('.links_link'),
        hamburger = document.querySelector('.logo__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('links_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('links_active');
        })
    })
})
