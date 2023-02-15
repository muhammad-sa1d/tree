document.querySelector('.menuBtn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('translate-x-full')
})
document.querySelector('.xBtn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('translate-x-full')
})



var feedback = new Swiper(".feedback", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});
