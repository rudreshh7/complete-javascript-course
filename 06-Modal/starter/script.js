'use strict';



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal)


// Function to SHow the hidden modal 
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", function() {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });

}

// Function to close when clicked close

btnCloseModal.addEventListener("click", function() {

    modal.classList.add("hidden");
    overlay.classList.add("hidden");


})

// Function to close modal when clicked on background

overlay.addEventListener("click", function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})

document.addEventListener("keydown", function(event) {

    if (event.key == "Escape") {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }

})