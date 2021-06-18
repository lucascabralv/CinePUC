function hoverFilmes() {
    $(".filme-cartaz").each(function () {
      $(this).hover(
        function () {
          $(this).find(".filme-hover").css("top", "0px");
        },
        function () {
          $(this).find(".filme-hover").css("top", "100%");
        }
      );
    });
}

