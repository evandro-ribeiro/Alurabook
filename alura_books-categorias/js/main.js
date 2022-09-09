let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibeLivrosNaTela(livrosComDesconto);
}

