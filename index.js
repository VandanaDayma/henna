    var typed = new Typed(".auto" , {
        strings: ["MEHNDI"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })