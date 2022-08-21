// Select elements

const openModalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".close-btn");

// When clicked Open Modal button , show modal
openModalBtn.addEventListener("click", () => {
    modal.classList.add("open-modal")
    console.log(modal.classList);
})

// When clicked Close Modal button , hide modal
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal");
})