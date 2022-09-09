const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponivel() : filtrarCategoria(categoria);
    exibeLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calculaValorTotalLivrosDisponiveis(livrosFiltrados);
        exibeValorTotalDosLivros(valorTotal);
    }
}
function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarDisponivel() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotalDosLivros(valorDosLivros) {
    elementoValorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$<span id="valor">${valorDosLivros}</span></p>
    </div>
    `;
}
