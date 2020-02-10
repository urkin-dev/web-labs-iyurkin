let 
    mainAnimation = document.querySelector(".main_animation")
    isScrolling   = false;

document.addEventListener("scroll", throttleScroll)

/**
 * Function for 60 frames in second
 * @param {Object} e event object
 */
function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(() => {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

/**
 * This function calling every time when the page get scroll
 * @param {Object} e Event object
 */
function scrolling(e) {

    if (isPartiallyVisible(mainAnimation)) {
        mainAnimation.classList.add("animated")
    }

}

/**
 * Check the element and return true if it is fully visible
 * @param {Object} el DOM element
 */
function isPartiallyVisible(el) {
    let elBound = el.getBoundingClientRect();

    let top    = elBound.top;
    let bottom = elBound.bottom;
    let height = elBound.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}