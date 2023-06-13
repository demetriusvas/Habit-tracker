const botao = document.getElementById("circle1");
botao.addEventListener("click", trocarCor);

function trocarCor(){
    document.getElementById("circle1").className = 'circle1_checked';
}