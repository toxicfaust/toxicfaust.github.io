function display_about_me() {


    var x = document.getElementById("about_me");
    var y = document.getElementById("view_cv");
    var z = document.getElementById("projects");
    var c = document.getElementById("contact");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        c.style.display = "none";
        location.href='#about_me';
    } else {
        x.style.display = "none";
    }
}


function display_view_cv() {
    var x = document.getElementById("about_me");
    var y = document.getElementById("view_cv");
    var z = document.getElementById("projects");
    var c = document.getElementById("contact");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        c.style.display = "none";
        location.href='#view_cv';        
    } else {
        y.style.display = "none";
    }
}

function display_projects() {
    var x = document.getElementById("about_me");
    var y = document.getElementById("view_cv");
    var z = document.getElementById("projects");
    var c = document.getElementById("contact");
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        c.style.display = "none";
        location.href='#projects';
    } else {
        z.style.display = "none";
    }
}

function display_contact() {
    var x = document.getElementById("about_me");
    var y = document.getElementById("view_cv");
    var z = document.getElementById("projects");
    var c = document.getElementById("contact");
    if (c.style.display === "none") {
        c.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        y.style.display = "none";
        location.href='#contact';        
    } else {
        c.style.display = "none";
    }
}


