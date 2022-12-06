const createProductButton = document.querySelector("#create-product");
const dialog = document.querySelector(".create-product_dialog");
const cancelButton = document.querySelector("#cancel");

const openModal = () => dialog.showModal();
// const closeModal = () => dialog.close()

createProductButton.addEventListener("click", openModal);

// cancelButton.addEventListener('click', () => {
//     dialog.close()
// })

cancelButton.addEventListener("click", () => dialog.close());
const inputs = document.querySelectorAll("input");

const saveButton = document.querySelector("#save");

function logar () {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if(login == 'admin' && senha == 'admin'){
        alert('Sucesso');
    }
}