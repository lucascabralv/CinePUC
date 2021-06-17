function exibeFilmes() {
  let divTop = document.getElementById("divTop");
  let texto = "";

  let dados = JSON.parse(this.responseText);
  for (i = 0; i < dados.results.length; i++) {
    let filme = dados.results[i];
    texto =
      texto +
      `
      <img src="https://image.tmdb.org/t/p/w300/${filme.poster_path}" alt="">
      <div class="title">
        ${filme.original_title}
      </div>
    `;
  }

  divTop.innerHTML = texto;
}

window.onload = function () {
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeFilmes;
  xhr.open(
    "GET",
    "https://api.themoviedb.org/3/trending/movie/week?api_key=c47696d427054976b7ea39e6004a9d96"
  );
  xhr.send();
};
