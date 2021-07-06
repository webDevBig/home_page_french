var open_menu = document.querySelectorAll('.menu');
[].forEach.call(open_menu, function (el) {
    el.onclick = function (e) {
        document.querySelector(".mobile_bg").classList.toggle('mobile_bg_menu_open');
        //        document.querySelector(".mobile_bg").classList.toggle('.body')
        document.querySelector(".mobile_bg").style.overflow = 'hiden'
        document.querySelector(".content").classList.toggle('content_right')
        document.querySelector("body").classList.toggle('body')
    }
});
var close_menu = document.querySelectorAll('.mobile_bg');
[].forEach.call(close_menu, function (el) {
    el.onclick = function (e) {
        document.querySelector(".mobile_bg").classList.toggle('mobile_bg_menu_open');
        //        document.querySelector(".mobile_bg").classList.toggle('.body')
        document.querySelector(".mobile_bg").style.overflow = 'hiden'
        document.querySelector(".content").classList.toggle('content_right')
        document.querySelector("body").classList.toggle('body')
    }
});
var open_sub_menu = document.querySelectorAll('.open_sub_menu');
[].forEach.call(open_sub_menu, function (el) {
    el.onclick = function (e) {
        el.parentElement.querySelector('.sub_menu').classList.toggle('sub_menu_open')
        el.classList.toggle('arrow_transform')
    }
});

"use strict";
const leftArrow = document.querySelector(".left-arrow"),
    rightArrow = document.querySelector(".right-arrow"),
    slider = document.querySelector(".slider");

/**
 * @brief Scroll to the right
 */
function scrollRight() {
    if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
        slider.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        slider.scrollBy({
            left: window.innerWidth,
            behavior: "smooth"
        });
    }
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
    slider.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth"
    });
}

// Auto slider
let timerId = setInterval(scrollRight, 7000);

/**
 * @brief Reset timer for scrolling right
 */
function resetTimer() {
    clearInterval(timerId);
    timerId = setInterval(scrollRight, 7000);
}

// Scroll Events
slider.addEventListener("click", function (ev) {
    if (ev.target === leftArrow) {
        scrollLeft();
        resetTimer();
    }
});

slider.addEventListener("click", function (ev) {
    if (ev.target === rightArrow) {
        scrollRight();
        resetTimer();
    }
});
