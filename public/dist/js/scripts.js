var my_elem = document.getElementById("personalColorLabel");

var input = document.createElement("input");
input.type = "color";
input.name = "personalColor";
input.id = "personalColor";
input.value = "#6246ea";

my_elem.parentNode.insertBefore(input, my_elem);
