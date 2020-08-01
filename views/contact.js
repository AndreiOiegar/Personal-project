const messages = [{
    name: "",
    phone: "",
    mail: "",
    msg: "",
}]

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phoneNumber = document.getElementById("phone");
const message = document.getElementById("message");
const mailAdress = document.getElementById("email");
const submitBtn = document.querySelector(".contact100-form-btn");
const commentsUser = document.querySelector(".comments-user")


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (formValidation() !== false) {
        messages.push({
            name: firstName.value + " " + lastName.value,
            phone: phoneNumber.value,
            mail: mailAdress.value,
            msg: message.value
        });
        let node = createMessageNode({
            name: firstName.value + " " + lastName.value,
            phone: phoneNumber.value,
            mail: mailAdress.value,
            msg: message.value
        });
        commentsUser.appendChild(node)

        console.log(node)
    }
})


function createMessageNode(messages) {
    const containerBox = document.querySelector(".messages-box");
    containerBox.id = "list-messages";

    const userData = document.createElement('div');
    userData.id = "user";

    const title = addTitle(messages.name);
    const n = addParagraph(messages.phone);
    const m = addParagraph(messages.mail)
    const p = addParagraph(messages.msg);

    containerBox.appendChild(userData)
    userData.appendChild(title);
    containerBox.appendChild(n);
    containerBox.appendChild(m);
    containerBox.appendChild(p);



    return containerBox;
}

function addParagraph(text) {
    const newP = document.createElement("p");
    newP.innerText = text;
    return newP;
}

function addTitle(title) {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    return h1;
}

function displayComments(messages, containerNode) {

    for (let idx = 0; idx < messages.length; idx++) {
        const message = messages[idx];
        const messageNode = createMessageNode(message);
        containerNode.appendChild(messageNode);
    }
}

function formValidation() {

    if (firstName.value.length < 4 || firstName.value === "") {
        firstName.style.border = "2px solid red"
        return false;
    } else {
        firstName.style.border = "2px solid green"
    }

    if (lastName.value.length < 4 || lastName.value === "") {
        lastName.style.border = "2px solid red"
        return false;
    } else {
        lastName.style.border = "2px solid green"
    }

    if (mailAdress.value.length < 4 || mailAdress.value === "") {
        mailAdress.style.border = "2px solid red"
        return false;
    } else {
        mailAdress.style.border = "2px solid green"
    }

    if (phoneNumber.value.length < 4 || phoneNumber.value === "") {
        phoneNumber.style.border = "2px solid red"
        return false;
    } else {
        phoneNumber.style.border = "2px solid green"
    }

    if (message.value.length < 4 || message.value === "") {
        message.style.border = "2px solid red"
        return false;
    } else {
        message.style.border = "2px solid green"
    }

}