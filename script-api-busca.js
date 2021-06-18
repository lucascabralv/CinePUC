function exibeFilmes() {
  let divTop = document.getElementById("galeria-cartaz");
  let texto = "";

  let dados = JSON.parse(this.responseText);
  if (dados.total_results != 0) {
    for (i = 0; i < dados.results.length; i++) {
      let filme = dados.results[i];
      if(filme.poster_path != null && filme.overview != ""){
        console.log(filme);
        texto =
          texto +
          `
        <div class="filme-cartaz">
          <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" loading="lazy" class="filme-cartaz-img">
          <div class="filme-hover">
              <h2 class="titulo-filme">${filme.original_title}</h2>
              <div class="resumo-filme">${filme.overview}</div>
              <a class="saiba-mais-cartaz" href="https://www.themoviedb.org/movie/${filme.id}" target="_blank">Saiba mais</a>
          </div>
        </div>
      `;
      }
    }
    divTop.innerHTML = texto;
    hoverFilmes();
  }
}


function executaBusca() {
  let valor = document.getElementById("busca").value;
  if(valor != ""){
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeFilmes;
  xhr.open(
    "GET",
    `https://api.themoviedb.org/3/search/movie?api_key=c47696d427054976b7ea39e6004a9d96&language=pt-BR&query=${valor}`
  );
  xhr.send();
  }
}
