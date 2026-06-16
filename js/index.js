

const body = document.querySelector('body');
const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = `\u00a9 Miya Simms ${thisYear}`;

footer.appendChild(copyright);

const skills = ['Sass','MongoDB', 'Vercel', 'Google Web Analytics', 'HTML'];
const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++){
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

fetch("https://api.github.com/users/MIYANOTMIA/repos")
.then(response => response.json())
.then (data => {
    let repositories = data;
    console.log(repositories);

const projectSection = document.querySelector("#projects"
);
const projectList = projectSection.querySelector("ul");

for (let i = 0; i < repositories.length; i++){
    let project = document.createElement("li");
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
}
})

.catch(error => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Something went wrong while fetching the repository data. Please try again.";

    projectSection.appendChild(errorMessage);
});

let messageForm = document.querySelector("[name='leave_message']");

messageForm.addEventListener("submit", function(event){
   event.preventDefault()
    let userName =  event.target.usersName.value;
   let userEmail = event.target.usersEmail.value;
   let usersMessage = event.target.usersMessage.value;
   console.log(userName,userEmail,usersMessage);

   const messageSection = document.getElementById('messages');
   const messageList = messageSection.querySelector('ul');
   let newMessage = document.createElement('li');
   newMessage.innerHTML=`<a href='mailto:${userEmail}'> ${userName}  </a> <span>${usersMessage}</span>`;
   const removeButton = document.createElement('button');
   removeButton.innerHTML = `remove`;
    removeButton.type = "button";
    removeButton.addEventListener("click" ,function(event){
        const entry = this.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
   event.target.reset();
})

