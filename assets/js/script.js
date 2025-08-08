AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".toolTipProdRow");

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