document.querySelectorAll(".text-input").forEach((element) => {
    element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
            event.target.nextElementSibling.classList.add("filled");
        } else {
            event.target.nextElementSibling.classList.remove("filled");
        }
    });
});
/* function load() {
    this.type = "date"
} */

let input = document.getElementById('user-input')

function load() {
    input.onfocus = function(){
        /* return type = "date" */
        this.type = 'date'
    }
}

/* Back To Top Button */
const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

document.getElementById(button).onclick = scrollToTop;

/* Set the width of the side-bar to 200px */
function openNav() {
    document.getElementById("stuff-nav").style.width = "170px";
}
function closeNav() {
    document.getElementById("stuff-nav").style.width = "0";
}

/* var acc = document.getElementsByClassName("accordion_1");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdown_1 = this.nextElementSibling;
        if (dropdown_1.style.display === 'block') {
          dropdown_1.style.display = 'none';
        } else {
          dropdown_1.style.display = 'block';
        }
    });
} */

/* function accordion() {
    document.getElementsByClassName("dropdown_1").style.display = "block";
}
 */