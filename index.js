const bars = document.querySelector('[data-id="bars"]');
const nav = document.querySelector('[data-id="nav"]');
const header = document.querySelector('.grid-1')

bars.addEventListener('click', (event) => {
    nav.classList.toggle('hidden')
    /* nav.classList.toggle('nav-animations') */
})
