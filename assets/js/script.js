AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".toolTipProd");

    if (!element) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add("active");
                } else {
                    element.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    observer.observe(element);
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".videRevBx");

    boxes.forEach(function (box) {
        const video = box.querySelector("video");
        const playBtnHldr = box.querySelector(".videoPlayBtnHldr");

        function pauseVideo(v, btn) {
            v.pause();
            btn.style.display = "flex";
        }

        function playVideo(v, btn) {
            boxes.forEach(function (otherBox) {
                const otherVideo = otherBox.querySelector("video");
                const otherBtn = otherBox.querySelector(".videoPlayBtnHldr");
                if (!otherVideo.paused) {
                    pauseVideo(otherVideo, otherBtn);
                    otherVideo.currentTime = 0;
                }
            });

            v.muted = false;
            v.play();
            btn.style.display = "none";
        }

        playBtnHldr.addEventListener("click", function () {
            if (video.paused) {
                playVideo(video, playBtnHldr);
            } else {
                pauseVideo(video, playBtnHldr);
            }
        });

        video.addEventListener("click", function () {
            if (video.paused) {
                playVideo(video, playBtnHldr);
            } else {
                pauseVideo(video, playBtnHldr);
            }
        });

        video.addEventListener("ended", function () {
            playBtnHldr.style.display = "flex";
            video.currentTime = 0;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function faqsAccordion() {
        var accordionSections = document.querySelectorAll(".accordion-item");

        if (accordionSections.length > 0) {
            var firstAccordionItemHeader = accordionSections[0].querySelector(
                ".accordion-item-header"
            );
            var firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

            if (firstAccordionItemBody) {
                firstAccordionItemHeader.classList.add("active");
                firstAccordionItemBody.style.maxHeight =
                    firstAccordionItemBody.scrollHeight + "px";
            }

            for (let i = 1; i < accordionSections.length; i++) {
                var otherHeader = accordionSections[i].querySelector(".accordion-item-header");
                var otherBody = otherHeader.nextElementSibling;

                if (otherBody) {
                    otherHeader.classList.remove("active");
                    otherBody.style.maxHeight = "0";
                }
            }
        }

        accordionSections.forEach((section) => {
            var accordionItemHeaders = section.querySelector(".accordion-item-header");
            var accordionItemBody = section.querySelector(".accordion-item-body");

            accordionItemHeaders.addEventListener("click", function () {
                var currentlyActiveHeader = document.querySelector(
                    ".accordion-item-header.active"
                );
                var currentlyActiveBody = currentlyActiveHeader
                    ? currentlyActiveHeader.nextElementSibling
                    : null;

                if (currentlyActiveHeader && currentlyActiveBody) {
                    currentlyActiveHeader.classList.remove("active");
                    currentlyActiveBody.style.maxHeight = 0;
                }

                if (accordionItemHeaders !== currentlyActiveHeader) {
                    accordionItemHeaders.classList.add("active");
                    accordionItemBody.style.maxHeight =
                        accordionItemBody.scrollHeight + "px";
                } else {
                    accordionItemHeaders.classList.remove("active");
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });
    }

    faqsAccordion();
});