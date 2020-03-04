// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
}
}

// Make the image appear
function show() {
    document.getElementById('img1').style.visibility = 'visible';
}

function show2() {
    document.getElementById('img2').style.visibility = 'visible';
}