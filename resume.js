let name = "Gabriel Wilkinson";
let education = "Bachelor of Science in Business Management (Graduation: December 2025)";
let experience = `
Assembly Technician — Efdyn Inc., Tulsa, OK (December 2020–Present, Seasonal)
• Operated manual and automatic machinery to prepare and assemble components.
• Met multiple deadlines and tracked performance metrics for evaluation.
• Learned and applied new technical skills, including running new machines and improving workflow efficiency.
;

// Updating the HTML page content
document.getElementById("name").textContent = name;
document.getElementById("education").textContent = "Education: " + education;
document.getElementById("experience").textContent = "Experience: " + experience;

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

let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
  let li = document.createElement("li");
  li.textContent = skills[i];
  skillsList.appendChild(li);
}
document.getElementById("skills").appendChild(skillsList);

// Fun Fact Button Function
function showFunFact() {
  alert("I've visited the Parthenonin Greece!");
}

console.log("Hello, my name is " + name);
