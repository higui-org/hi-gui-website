document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML(
        "beforeend",
        `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
        `
    );

    const buttons = carousel.querySelectorAll(".carousel__button");
    let currentIndex = 0;
    let timer;
    let touchStartX = null;

    function showImage(index) {
        items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
            button.classList.remove("carousel__button--selected")
        );

        items[index].classList.add("carousel__item--selected");
        buttons[index].classList.add("carousel__button--selected");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showImage(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showImage(currentIndex);
    }

    function startAutoScroll() {
        timer = setInterval(nextSlide, 3000);
    }

    function stopAutoScroll() {
        clearInterval(timer);
    }

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            currentIndex = i;
            showImage(currentIndex);
            stopAutoScroll();
        });
    });

    carousel.addEventListener("mouseenter", stopAutoScroll);
    carousel.addEventListener("mouseleave", startAutoScroll);

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        if (touchStartX === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > 30) {
            prevSlide();
        } else if (deltaX < -30) {
            nextSlide();
        }

        touchStartX = null;
        stopAutoScroll();
    });

    startAutoScroll();
    showImage(currentIndex);
});
