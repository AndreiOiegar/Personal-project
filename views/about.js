function education(){
    const arrowDown = document.querySelector(".ed-arrow-down");
    const arrowRight = document.querySelector(".ed-arrow-right")
    const educationInfo = document.querySelector(".ed-content");
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

education();

function experience(){
    const arrowDown = document.querySelector(".ex-arrow-down");
    const arrowRight = document.querySelector(".ex-arrow-right")
    const experienceInfo = document.querySelector(".experience-content");
    console.log(arrowDown)

    arrowDown.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(experienceInfo)
        experienceInfo.style.display = "flex";
        changeExArrows()
    })

    arrowRight.addEventListener("click", (event) => {
        event.preventDefault();
        experienceInfo.style.display = "none";
        changeExArrows()
    })

    function changeExArrows() {
        if (experienceInfo.style.display === "flex") {
            arrowDown.style.display = "none";
            arrowRight.style.display = "flex";
        } else {
            arrowDown.style.display = "flex";
            arrowRight.style.display = "none";
        }
    }
}

experience()

function ShowSkills(){
    const arrowDown = document.querySelector(".skill-arrow-down");
    const arrowRight = document.querySelector(".skill-arrow-right")
    const skillInfo = document.querySelector(".skills-content");
    console.log(arrowDown)

    arrowDown.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(skillInfo)
        skillInfo.style.display = "flex";
        changeExArrows()
    })

    arrowRight.addEventListener("click", (event) => {
        event.preventDefault();
        skillInfo.style.display = "none";
        changeExArrows()
    })

    function changeExArrows() {
        if (skillInfo.style.display === "flex") {
            arrowDown.style.display = "none";
            arrowRight.style.display = "flex";
        } else {
            arrowDown.style.display = "flex";
            arrowRight.style.display = "none";
        }
    }
}

ShowSkills()