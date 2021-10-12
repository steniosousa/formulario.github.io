const enviar = document.querySelector("#enviar");
enviar.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    if(name.value === ""){
        const error = "Por favor, preencha seu nome.";
        document.getElementById('estatos').innerHTML = error;
      } else {
        const NameValue = document.querySelector('#name').value;
        document.getElementById('estatos').innerHTML = "Seja bem vindo, " + NameValue + "!" ;
    }
    const clean = document.querySelector('#name').value = "";
})



