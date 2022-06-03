// Progressive web enhancement. When JavaScript is disabled this function doesnt work and the noscript tag will be shown with a different input field
let my_elem = document.getElementById("personalColorLabel");

let input = document.createElement("input");
input.type = "color";
input.name = "personalColor";
input.id = "personalColor";
input.value = "#6246ea";

my_elem.parentNode.insertBefore(input, my_elem);
