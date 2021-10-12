const enviar = document.querySelector("#enviar");
enviar.addEventListener("click", function(stop) {
    stop.preventDefault();
    const name = document.querySelector("#name");
    const value = name.value;
    const concatenacao =  "Seja bem vindo, "+ value + "!";
    document.getElementById('saudacao').innerHTML = concatenacao;
})
