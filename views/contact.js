const messages = [{
    name:"",
    phone:"",
    mail:"",
    msg:"",
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
     commentsUser.body.appendChild(node)

     console.log(node)
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

// function addPhone(num) {
//     const newN = document.createElement("p");
//     newN.innerText = num;
//     return newN;
// }
// function addMail(mail) {
//     const newM = document.createElement("p");
//     newN.innerText = mail;
//     return newM;
// }
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