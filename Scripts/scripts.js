document.querySelector('.modalEvent').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
document.querySelector('.bg-modal').style.display = 'none';
});

function closeModal(){
    document.querySelector('.bg-modal').style.display = 'none';
}

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })