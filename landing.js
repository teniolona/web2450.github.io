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
