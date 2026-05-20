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