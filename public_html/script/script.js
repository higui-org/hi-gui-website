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
    let touchStartY = null;

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
        timer = setInterval(nextSlide, 5000);
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
        touchStartY = e.touches[0].clientY;
    });

    carousel.addEventListener("touchend", (e) => {
        if (touchStartY === null) return;

        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchEndY - touchStartY;

        if (deltaY > 20) {
            prevSlide();
        } else if (deltaY < -20) {
            nextSlide();
        }

        touchStartY = null;
        stopAutoScroll();
    });

    startAutoScroll();
    showImage(currentIndex);
});

const elements = document.querySelectorAll('.element, .element-x');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkElements() {
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkElements);
window.addEventListener('load', checkElements);