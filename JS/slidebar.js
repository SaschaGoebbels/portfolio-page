

const slidebar__ul = document.querySelector('.slidebar__ul');
const slides = Array.from(slidebar__ul.children);

const btn_slide_left = document.querySelector(".slidebar__btn_left");
const btn_slide_right = document.querySelector(".slidebar__btn_right");
const slidebar__nav = document.querySelector(".slidebar__nav");
const dots = Array.from(slidebar__nav.children);

const slidewidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide,i) => {
    slide.style.left = slidewidth * i + "px";
}

slides.forEach(setSlidePosition);

const move_to_slide = (slidebar__ul, current_slide, target_slide) => {
    slidebar__ul.style.transform = "translateX(-" + target_slide.style.left + ")";
    current_slide.classList.remove("current_slide");
    target_slide.classList.add("current_slide")
    // hide img from slidebar
    current_slide.classList.add("is_hidden")
    target_slide.classList.remove("is_hidden")
}
const update_dots = (current_dot, target_dot) => {
    current_dot.classList.remove("current_indicator");
    target_dot.classList.add("current_indicator");
}
const hide_show_arrows = (slides, btn_slide_left, btn_slide_right, target_index) => {
    if(target_index===0) {
        btn_slide_left.classList.add("is_hidden");
        btn_slide_right.classList.remove("is_hidden");
    }else if(target_index===slides.length - 1) {
        btn_slide_right.classList.add("is_hidden");
        btn_slide_left.classList.remove("is_hidden");
    }else {
        btn_slide_left.classList.remove("is_hidden");
        btn_slide_right.classList.remove("is_hidden");
    }
}
btn_slide_left.addEventListener("click", e => {
    const current_slide = slidebar__ul.querySelector(".current_slide");
    const prev_slide = current_slide.previousElementSibling;
    move_to_slide(slidebar__ul,current_slide,prev_slide);
    const current_dot = slidebar__nav.querySelector(".current_indicator");
    const prev_dot = current_dot.previousElementSibling;
    update_dots(current_dot, prev_dot);
    const prev_index = slides.findIndex(slide => slide === prev_slide)
    hide_show_arrows (slides, btn_slide_left, btn_slide_right, prev_index)
} )

btn_slide_right.addEventListener("click", e => {
    const current_slide = slidebar__ul.querySelector(".current_slide");
    const next_slide = current_slide.nextElementSibling;
    move_to_slide(slidebar__ul,current_slide,next_slide)
    const current_dot = slidebar__nav.querySelector(".current_indicator");
    const next_dot = current_dot.nextElementSibling;
    update_dots(current_dot, next_dot);
    const next_index =slides.findIndex(slide => slide === next_slide);
    hide_show_arrows (slides, btn_slide_left, btn_slide_right, next_index)
})

slidebar__nav.addEventListener("click", e => {
    const target_dot = e.target.closest("button");
        if (!target_dot) return;
    const current_slide = slidebar__ul.querySelector(".current_slide");
    const current_dot = slidebar__nav.querySelector(".current_indicator");
    const target_index = dots.findIndex(dot => dot === target_dot)
    const target_slide = slides[target_index];
    move_to_slide(slidebar__ul, current_slide, target_slide);
    update_dots(current_dot, target_dot);
    hide_show_arrows (slides, btn_slide_left, btn_slide_right, target_index)
})


/*Try Event Screen*/
// display
//Scroll down Btn
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});