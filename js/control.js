const nome = document.querySelector("#nome")
const cargo = document.querySelector("#cargo")
const setor = document.querySelector("#seto")
const unidade = document.querySelector("#unidade")
const telefone = document.querySelector("#telefone")
const movimentacao = document.querySelector("#movimentacao")
const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
	modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
	if (clickedOutside) {
		if (e.target.classList.contains("modal-overlay"))
			modal.classList.add("hide");
	} else modal.classList.add("hide");
}

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);



const p = document.querySelector("#print")

const info = document.querySelector(".info")

btn.addEventListener('click', clic)
   
function clic(){
    let res = []

    res[0] = nome.value
    res[1] = cargo.value
    res[2] = setor.value
    res[3] = unidade.value
    res[4] = telefone.value
    res[5] = movimentacao.value
    for (let i = 0; i < res.length; i++) {
       console.log(res[i])
       //p.innerHTML = `Olá ${res[0]}`
    }
    
    //closeModal()
    
   
}