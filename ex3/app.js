const produtos = [
{nome: 'arroz', preco: 9},
{nome: 'feijao', preco: 12},
{nome: 'batata', preco: 8},
{nome: 'macarrao', preco: 5},
];

const nomeCampo = document.getElementById('item');
const botao = document.getElementById('botao');
const pMensagem = document.getElementById('mensagem');

function buscaPreco(nomeProduto){
    const produto = produtos.find(p => p.nome === nomeProduto);
    return produto ? `R$ ${produto.preco}` : 'Produto não encontrado';
    
}

botao.addEventListener('click', ()=>{
    const nome = nomeCampo.value;
    const mensagem = buscaPreco(nome);
    pMensagem.innerText = mensagem;
})

