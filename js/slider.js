(function () {
    const slides = [...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.querySelector('#despues');
    const buttonBefore = document.querySelector('#antes');
    
    let value;

    buttonNext.addEventListener("click", () => {
        changePosition(1);
    });

    buttonBefore.addEventListener("click", () => {
        changePosition(-1);

    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony_body-show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        slides[Number(currentTestimony)-1].classList.remove('testimony_body-show');
        if (value === slides.length + 1 || value === 0) {
            value = value === 0 ? slides.length : 1;
        }

        slides[value-1].classList.add('testimony_body-show');
    }




})();