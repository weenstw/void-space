function subirformulario(e){
    e.preventDefault()
    alert("bienvenido "+e.target.usuario.value)
}
const form=document.querySelector("form")
form.addEventListener("submit", subirformulario)