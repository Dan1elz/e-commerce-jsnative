export function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  footer.innerHTML = `
    <div class="article_contato">
        <div class="contato">
            <p class="contato_title">Contacte-nos!</p>
            <div class="contato_metodos">
                <div class="metodo">
                    <i class="bi bi-telephone"></i>
                    <p>(19) 123-456-6789</p>
                </div>
                <div class="metodo">
                    <i class="bi bi-envelope"></i>
                    <p>Aya.semijoias@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
      `;
  return footer;
}
