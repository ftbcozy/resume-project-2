let name = "Gabriel Wilkinson";

let education = "Bachelor of Science in Business Management (Graduation: December 2025)";

let experience = `Assembly Technician – Efdyn Inc., Tulsa, OK (December 2020–Present, Seasonal)

document.getElementById("name").textContent = name;
document.getElementById("education").textContent = "Education: " + education;
document.getElementById("experience").textContent = "Experience: " + experience;

// Skills Array
let skills = [
    "Quick Learner",
    "Engaged",
    "Innovative",
    "Adaptive",
    "Leadership",
    "Organization",
    "Critical Thinking",
    "Teachable",
    "Personable"
];

// Create skills list dynamically
let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
    let li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
}

document.getElementById("skills").appendChild(skillsList);

// Fun Fact Button Function
function showFunFact() {
    alert("Fun Fact: I've visited the Parthenon in Greece!");
}

console.log("Hello, my name is " + name);
