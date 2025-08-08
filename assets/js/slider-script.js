{
    document.addEventListener("DOMContentLoaded", function () {
        const swiperWrapper = document.querySelector(
            ".logoSlider .swiper-wrapper"
        );
        const slide = swiperWrapper.querySelector(".swiper-slide");

        if (slide) {
            for (let i = 0; i < 10; i++) {
                let clone = slide.cloneNode(true);
                swiperWrapper.appendChild(clone);
            }
        }

        var swiper = new Swiper(".logoSlider", {
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 8000,
            breakpoints: {
                150: {
                    slidesPerView: 0.6,
                    spaceBetween: 20,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                769: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                1025: {
                    slidesPerView: 1.2,
                    spaceBetween: 40,
                },
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const MultipleSlider = () => {
        const MultipleSliders = document.querySelectorAll(".prodCardSlider");
        MultipleSliders.forEach((slider, index) => {
            const prevArrow = slider.parentElement.querySelector(".prev");
            const nextArrow = slider.parentElement.querySelector(".next");
            new Swiper(slider, {
                effect: 'slide',
                speed: 1000,
                allowTouchMove: false,
                navigation: {
                    nextEl: nextArrow,
                    prevEl: prevArrow,
                },
                breakpoints: {
                    150: {
                        slidesPerView: 1.3,
                        spaceBetween: 10
                    },
                    576: {
                        slidesPerView: 2.8,
                        spaceBetween: 15
                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },

                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                }
            });
        });
    };
    MultipleSlider();
});