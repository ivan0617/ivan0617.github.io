
function menuClick() {
    var x = document.getElementById("mainNav");
    if (x.className === "mainNav") {
        x.className += " responsive";
    } else {
        x.className = "mainNav";
    }
}

function pressAbout() {
    var about = document.getElementById("about").className = "active";
    var skills = document.getElementById("skills").className = "";
    var projects = document.getElementById("projects").className = "";
    var contact = document.getElementById("contact").className = "";
}

function pressSkills() {
    var about = document.getElementById("about").className = "";
    var skills = document.getElementById("skills").className = "active";
    var projects = document.getElementById("projects").className = "";
    var contact = document.getElementById("contact").className = "";
}

function pressProjects() {
    var about = document.getElementById("about").className = "";
    var skills = document.getElementById("skills").className = "";
    var projects = document.getElementById("projects").className = "active";
    var contact = document.getElementById("contact").className = "";
}

function pressContact() {
    var about = document.getElementById("about").className = "";
    var skills = document.getElementById("skills").className = "";
    var projects = document.getElementById("projects").className = "";
    var contact = document.getElementById("contact").className = "active";
}
  