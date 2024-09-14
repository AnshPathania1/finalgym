
// var x = document.getElementById("form_inquiry");
// var y = document.getElementById("form_demo");

// function demo(){
//     x = style.opacity=0;
//     y = style.opacity=1;

// }
var x = document.getElementById("form_inquiry");
var y = document.getElementById("form_demo");

function demo() {
    x.style.opacity = 0; // Hide inquiry form
    y.style.opacity = 1; // Show demo form
}
function inquiry(){
    x.style.opacity = 1; // Hide inquiry form
    y.style.opacity = 0; // Show demo form

}