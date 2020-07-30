const arrowDown = document.querySelector(".ed-arrow-down");
const arrowRight = document.querySelector(".ed-arrow-right")
const educationInfo = document.querySelector(".ed-content");
console.log(arrowDown)

arrowDown.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(educationInfo)
    educationInfo.style.display = "flex";
    changeArrows()
})

arrowRight.addEventListener("click", (event) => {
    event.preventDefault();
    educationInfo.style.display = "none";
    changeArrows()
})

function changeArrows(){
    if(educationInfo.style.display === "flex"){
        arrowDown.style.display = "none";
        arrowRight.style.display = "flex";
    } else {
        arrowDown.style.display = "flex";
        arrowRight.style.display = "none";
    }
}
