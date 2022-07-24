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