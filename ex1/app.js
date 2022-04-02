const inputname = document.getElementById('input-nome');
const botao = document.getElementById('btn');
const pMensagem = document.getElementById('id-prgf');

const mensagemOla = nome => {
    return `Olá, ${nome}`;
}

botao.addEventListener('click', ()=>{
    const nome = inputname.value;
    const mensagem = mensagemOla(nome);
    pMensagem.innerHTML = mensagem;
});