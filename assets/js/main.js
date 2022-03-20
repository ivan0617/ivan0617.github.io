
function menuClick() {
    var x = document.getElementById("mainNav");
    if (x.className === "mainNav") {
        x.className += " responsive";
    } else {
        x.className = "mainNav";
    }
}

function pressAbout() {
    var about = document.getElementById("aboutNav").className = "active";
    var skills = document.getElementById("skillsNav").className = "";
    var projects = document.getElementById("projectsNav").className = "";
    var contact = document.getElementById("contactNav").className = "";
}

function pressSkills() {
    var about = document.getElementById("aboutNav").className = "";
    var skills = document.getElementById("skillsNav").className = "active";
    var projects = document.getElementById("projectsNav").className = "";
    var contact = document.getElementById("contactNav").className = "";
}

function pressProjects() {
    var about = document.getElementById("aboutNav").className = "";
    var skills = document.getElementById("skillsNav").className = "";
    var projects = document.getElementById("projectsNav").className = "active";
    var contact = document.getElementById("contactNav").className = "";
}

function pressContact() {
    var about = document.getElementById("aboutNav").className = "";
    var skills = document.getElementById("skillsNav").className = "";
    var projects = document.getElementById("projectsNav").className = "";
    var contact = document.getElementById("contactNav").className = "active";
}
  