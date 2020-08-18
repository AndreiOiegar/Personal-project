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
emailjs.init("user_PVcMgtXUCEJ8UWYbWuulQ");


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
        const template_params = {
            from_name: firstName.value + " " + lastName.value,
            senderEmail: mailAdress.value,
            first_name: firstName.value,
            number: phoneNumber.value,
            message_html: message.value
        }
        const service_id = "default_service";
        const template_id = "template_MGSXBddP";
        emailjs.send(service_id, template_id, template_params)
            .then(function (response) {
                if(response.status = "200"){
                    alert("Your message has been sent! Thank you!")
                }
            })
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
    const red = "2px solid red";
    const green = "2px solid green";

    if (firstName.value.length < 4 || firstName.value === "") {
        firstName.style.border = red;
        return false;
    } else {
        firstName.style.border = green;
    }

    if (lastName.value.length < 4 || lastName.value === "") {
        lastName.style.border = red;
        return false;
    } else {
        lastName.style.border = green;
    }

    if (mailAdress.value.length < 4 || mailAdress.value === "") {
        mailAdress.style.border = red;
        return false;
    } else {
        mailAdress.style.border = green;
    }

    if (phoneNumber.value.length < 4 || phoneNumber.value === "") {
        phoneNumber.style.border = red;
        return false;
    } else {
        phoneNumber.style.border = green;
    }

    if (message.value.length < 4 || message.value === "") {
        message.style.border = red;
        return false;
    } else {
        message.style.border = green;
    }

}