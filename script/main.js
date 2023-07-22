"use strict";

// HEADER LEFT CHECKBOX //

const mainNavBox = document.querySelector('.h__nav');
const checkboxes = document.querySelectorAll('.nav__ipt');
const menuEls = document.querySelectorAll('.descent__menu');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {

        const checkedCheckbox = mainNavBox.querySelector('.nav__ipt:checked');
        
        if (e.target.checked) {
            e.target.previousElementSibling.classList.add('rotate__svg');
            e.target.nextElementSibling.classList.add('descent');
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== e.target) {
                    otherCheckbox.checked = false;
                    otherCheckbox.previousElementSibling.classList.remove('rotate__svg');
                    otherCheckbox.nextElementSibling.classList.remove('descent');
                }
            });
        } else {
            e.target.previousElementSibling.classList.remove('rotate__svg');
            e.target.nextElementSibling.classList.remove('descent');
        }
    });
});

// MEMBERS SLIDER //

$('.members__block').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: `<button class="slider__btn prev__btn"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 9.5L12 0V19L0 9.5Z" fill="#FF5681"/>
</svg></button>`,
    nextArrow: `<button class="slider__btn next__btn"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9.5L0 0V19L12 9.5Z" fill="#FF5681"/>
</svg>
</button>`,
});

// ARTICLE RATING //

const ratingFormEl = document.querySelector('.rating');
const starEl = document.querySelectorAll('.rating__ipt');
const labelEl = document.querySelectorAll('.rating__label');

starEl.forEach((radio) => {
    radio.addEventListener('change', () => {
        const checkedNumber = document.querySelector('.rating__ipt:checked').value || undefined;

        const numberExporterEl = document.querySelector('.rating__number');

        starEl.forEach((item) => {
            const currentLabel = item.previousElementSibling;

            item.value <= checkedNumber
                ? currentLabel.classList.add('check')
                : currentLabel.classList.remove('check');
        });
        numberExporterEl.textContent = checkedNumber;
    });
});


labelEl.forEach(element => {
    element.addEventListener('mouseover', () => {
        const checkedLabel = document.querySelector('.rating__label:hover').id || undefined;

        labelEl.forEach((item) => {
            item.id <= checkedLabel
                ? item.classList.add('mouseover')
                : item.classList.remove('mouseover');
        });
    });

    element.addEventListener('mouseout', () => {
        labelEl.forEach((item) => {
            item.classList.remove('mouseover');
        });
    });
});

