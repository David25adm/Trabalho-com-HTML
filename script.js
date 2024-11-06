//altera o texto do parágrafo inicial
function alterarTexto() {
    document.getElementById("text").innerText = "Ao clicar, eu mudei!!";
}
    
//Adiciona umnovo paragrafo no final do corpo
function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Depois que voce clicou, eu apareci 🙂 !!";
    document.body.appendChild(novoParagrafo);
}

//remove o ultimo paragrafo, se houver mais de um
function removerParagrafo() {
    const paragrafos = document.querySelectorAll("p");
    if(paragrafos.length > 1) {
        paragrafos[paragrafos.length - 1].remove();
    } else {
        alert("Não há mais paragrafos para remover 😭 !!");
    }
}

//muda a cor de fundo da pagina para uma cor aleatoria
function mudarCorFundo() {
    const corAleatoria = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = corAleatoria;
}

//muda a cor de texto do paragrafo inicial para uma cor aleatoria
function mudarCorTexto() {
    const cores = ["#FF5733", "#3357FF", "#FF36A6", "#FFC133"];
    document.getElementById("text").style.color = cores[Math.floor(Math.random() * cores.length)];
}