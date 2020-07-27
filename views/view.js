function homeLink(){
    const homeBtn = document.getElementById("home-btn");
    console.log(homeBtn)

    if(window.location.href == "http://127.0.0.1:5500/pages/home.html"){
        homeBtn.style.display = "none";
    }
}

homeLink()