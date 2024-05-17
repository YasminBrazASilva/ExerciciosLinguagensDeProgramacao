/*Yasmin Braz de Abreu Silva RA: 236632*/

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const conteudo = document.querySelector(".conteudo");
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();

          fetch(this.href)
            .then(response => response.text())
            .then(html => {
              conteudo.innerHTML = html;
            })
            .catch(error => {
              console.error("Erro ao carregar a página:", error);
            });
        });
      });
  });
