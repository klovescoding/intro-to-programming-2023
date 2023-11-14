let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p")

copyright.innerHTML = `&copy ${thisYear} Karen's Website`
footer.appendChild(copyright);


let skills = [
    "Tech skill 1",
    "Tech skill 2",
    "Tech skill 3",
    "Tech skill 4"
]

let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
