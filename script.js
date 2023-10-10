import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
    },

    autoplay: {
        delay: 5000
    },
    
    pagination: {
    el: ".swiperpagination"
    }

});
