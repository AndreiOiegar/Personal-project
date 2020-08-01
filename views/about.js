function education(arrowDownClass, arrowRightClass, educationInfoClass) {
    const arrowDown = document.querySelector(arrowDownClass);
    const arrowRight = document.querySelector(arrowRightClass)
    const educationInfo = document.querySelector(educationInfoClass);
    console.log(arrowDown)
    arrowDown.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(educationInfo)
        educationInfo.style.display = "flex";
        changeEdArrows()
    })
    arrowRight.addEventListener("click", (event) => {
        event.preventDefault();
        educationInfo.style.display = "none";
        changeEdArrows()
    })

    function changeEdArrows() {
        if (educationInfo.style.display === "flex") {
            arrowDown.style.display = "none";
            arrowRight.style.display = "flex";
        } else {
            arrowDown.style.display = "flex";
            arrowRight.style.display = "none";
        }
    }
}
education(".ed-arrow-down", ".ed-arrow-right", ".ed-content");
education(".ex-arrow-down", ".ex-arrow-right", ".experience-content");
education(".skill-arrow-down", ".skill-arrow-right", ".skills-content");
education(".hobbies-arrow-down", ".hobbies-arrow-right", ".hobbies-content");

//Slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        console.log(dots[i].className)
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}