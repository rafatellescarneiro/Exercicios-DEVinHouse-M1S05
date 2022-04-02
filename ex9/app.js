const campoCEP = document.getElementById('input-cep');
const botao = document.getElementById('botao-buscar');
const pResultado = document.getElementById('resultado');

// 'https://viacep.com.br/ws/88032005/json'

async function buscaCEP(){
    try{
        const cep = campoCEP.value;
        const url = `https://viacep.com.br/ws/${cep}/json`;
        
        const resposta = await fetch(url)
        console.log(resposta);
            
        const conteudo = await resposta.json()
        
        console.log(conteudo);
        pResultado.innerText = conteudo.logradouro;
    }catch(erro){
        console.error(erro);
    }     
}

botao.addEventListener('click', buscaCEP);
