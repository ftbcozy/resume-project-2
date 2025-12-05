// Personal Bio
let name = "Gabriel Wilkinson";
let education = "Bachelor of Science in Business Management (Graduation: December 2025)";
let experience = "Assembly Technician – Efdyn Inc., Tulsa, OK (December 2020–Present, Seasonal)";

// Contact info
let address = "18126 E Falcon Pass, Owasso, OK  74055";
let email = "gabewilk@oru.edu";
let phone = "918-706-6131";

// Update page content with personal info
document.getElementById("name").textContent = name;
document.getElementById("address").textContent = "Address: " + address;
document.getElementById("email").textContent = "Email: " + email;
document.getElementById("phone").textContent = "Phone: " + phone;
document.getElementById("education").textContent = "Education: " + education;
document.getElementById("experience").textContent = "Experience: " + experience;

// Skills array
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

// Display skills
let skillsList = document.createElement("ul");
for (let i = 0; i < skills.length; i++) {
    let li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
}
document.getElementById("skills").appendChild(skillsList);

// Fun fact button
function showFunFact() {
    alert("Fun Fact: I've visited the Parthenon in Greece!");
}

// Log a message to the console
console.log("Hello, my name is " + name);
