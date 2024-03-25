/* Animacao expansao menu */
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

/* Validacao de campos vazios */
function isVazio(fields) {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].value == "") {
      return false;
    }
  }
  return true;
}

/* Cancela o envio do form para simulacao do componente SweetAlert2 */
function cancelaEnvio() {
  return false;
}