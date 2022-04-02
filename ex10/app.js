const btnCat = document.getElementById('btn-cat');
const imgCat = document.getElementById('img-cat');
const url = 'https://api.thecatapi.com/v1/images/search';

async function fetchCat() {
  try {
          
    const resposta = await fetch(url);
    const conteudo = await resposta.json()

    console.log({ conteudo });
    imgCat.src = conteudo[0].url;

  } catch (erro) {
    console.error(erro);
  }
}

btnCat.addEventListener('click', fetchCat);

document.onload = fetchCat();