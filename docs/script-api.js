function exibeFilmes() {
  let divTop = document.getElementById("galeria-cartaz");
  let texto = "";

  let dados = JSON.parse(this.responseText);
  for (i = 0; i < 12; i++) {
    let filme = dados.results[i];
    let data = new Date(filme.release_date);
    texto =
      texto +
      `
      <div class="filme-cartaz">
        <img src="https://image.tmdb.org/t/p/w300/${filme.poster_path}" loading="lazy" class="filme-cartaz-img">
        <div class="filme-hover">
            <h2 class="titulo-filme">${filme.original_title}</h2>
            <div class=data-filme>${data.toLocaleDateString()}</div>
            <div class="resumo-filme">${filme.overview}</div>
            <a class="saiba-mais-cartaz" href="https://www.themoviedb.org/movie/${filme.id}" target="_blank">Saiba mais</a>
        </div>
      </div>
    `;
  }

  divTop.innerHTML = texto;
  hoverFilmes();
}

window.onload = function () {
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeFilmes;
  xhr.open(
    "GET",
    "https://api.themoviedb.org/3/trending/movie/week?api_key=c47696d427054976b7ea39e6004a9d96&language=pt-BR"
  );
  xhr.send();
}
