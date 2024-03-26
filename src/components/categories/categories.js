export function createCategory() {
  const category = document.createElement("div");
  category.classList.add("categoria");

  category.innerHTML = `

  <form class='telaPequena' method='post'>
  <div class='category'>
      <button data-filtros type='button' class='categoryButton'>
          <span class='buttonTitle'>Filtros</span>
          <span class='buttonIcon'><i class='bi bi-plus'></i></span>
      </button>
      <div data-category2 class='category'>
          <button type='button' data-title class='categoryButton'>
              <span class='buttonTitle'>Joias</span>
              <span class='buttonIcon'><i class='bi bi-plus'></i></span>
          </button>
          <ul data-item='1' class='categoryItem'>
              <li><span class='categoryProduct'><input name='joias[]' value='Aneis' class='categoryCheckbox' type='checkbox' id='2Opção1__1'><label for='2Opção1__1'>Aneis</label></span></li>
              <li><span class='categoryProduct'><input name='joias[]' value='Colares' class='categoryCheckbox' type='checkbox' id='2Opção1__2'><label for='2Opção1__2'>Colares</label></span></li>
              <li><span class='categoryProduct'><input name='joias[]' value='Gargantilhas' class='categoryCheckbox' type='checkbox' id='2Opção1__3'><label for='2Opção1__3'>Gargantilhas</label></span></li>
              <li><span class='categoryProduct'><input name='joias[]' value='Choker' class='categoryCheckbox' type='checkbox' id='2Opção1__4'><label for='2Opção1__4'>Choker</label></span></li>
              <li><span class='categoryProduct'><input name='joias[]' value='Pulseiras' class='categoryCheckbox' type='checkbox' id='2Opção1__5'><label for='2Opção1__5'>Pulseiras</label></span></li>
              <li><span class='categoryProduct'><input name='joias[]' value='Brincos' class='categoryCheckbox' type='checkbox' id='2Opção1__6'><label for='2Opção1__6'>Brincos</label></span></li>
              <li><span class='categoryProduct'><input name='joias[]' value='Tornozeleiras' class='categoryCheckbox' type='checkbox' id='2Opção1__7'><label for='2Opção1__7'>Tornozeleiras</label></span></li>
          </ul>
      </div>

      <div data-category2 class='category'>
          <button type='button' data-title class='categoryButton'>
              <span class='buttonTitle'>Material</span>
              <span class='buttonIcon'><i class='bi bi-plus'></i></span>
          </button>
          <ul data-item='1' class='categoryItem'>
              <li><span class='categoryProduct'><input name='material[]' value='Ouro' class='categoryCheckbox' type='checkbox' id='2Opção2_1'><label for='2Opção2_1'>Ouro 18k</label></span></li>
              <li><span class='categoryProduct'><input name='material[]' value='Rhodium' class='categoryCheckbox' type='checkbox' id='2Opção2_2'><label for='2Opção2_2'>Rhodium</label></span></li>
              <li><span class='categoryProduct'><input name='material[]' value='RhodiumNegro' class='categoryCheckbox' type='checkbox' id='2Opção2_3'><label for='2Opção2_3'>Rhodium Negro</label></span></li>
          </ul>
      </div>

      <div data-category2 class='category'>
          <button type='button' data-title class='categoryButton'>
              <span class='buttonTitle'>Estilo</span>
              <span class='buttonIcon'><i class='bi bi-plus'></i></span>
          </button>
          <ul data-item='1' class='categoryItem'>
              <li><span class='categoryProduct'><input name='estilo[]' value='Moderno' class='categoryCheckbox' type='checkbox' id='2Opção3__1'><label for='2Opção3__1'>Moderno</label></span></li>
              <li><span class='categoryProduct'><input name='estilo[]' value='Clássico' class='categoryCheckbox' type='checkbox' id='2Opção3__2'><label for='2Opção3__2'>Clássico</label></span></li>
              <li><span class='categoryProduct'><input name='estilo[]' value='Vintage' class='categoryCheckbox' type='checkbox' id='2Opção3__3'><label for='2Opção3__3'>Vintage</label></span></li>
              <li><span class='categoryProduct'><input name='estilo[]' value='Minimalista' class='categoryCheckbox' type='checkbox' id='2Opção3__4'><label for='2Opção3__4'>Minimalista</label></span></li>
              <li><span class='categoryProduct'><input name='estilo[]' value='ArtNouveau' class='categoryCheckbox' type='checkbox' id='2Opção3__5'><label for='2Opção3__5'>Art Nouveau</label></span></li>
              <li><span class='categoryProduct'><input name='estilo[]' value='ArtDéco' class='categoryCheckbox' type='checkbox' id='2Opção3__6'><label for='2Opção3__6'>Art Déco</label></span></li>
          </ul>
      </div>
      
      <div data-category2 class='filtro'>
          <div class='filtro_1'>
              <button type='submit' name='submit' class='filtroBtn' >FILTRAR</button>
          </div>
      </div>
  </div>
</form>
<form class='telaGrande' method='post'>
  <div class='category'>
      <button type='button' data-title class='categoryButton'>
          <span class='buttonTitle'>Joias</span>
          <span class='buttonIcon'><i class='bi bi-plus'></i></span>
      </button>
      <ul data-item='1' class='categoryItem'>
      <li><span class='categoryProduct'><input name='joias[]' value='Aneis' class='categoryCheckbox' type='checkbox' id='Opção1__1'><label for='Opção1__1'>Aneis</label></span></li>
      <li><span class='categoryProduct'><input name='joias[]' value='Colares' class='categoryCheckbox' type='checkbox' id='Opção1__2'><label for='Opção1__2'>Colares</label></span></li>
      <li><span class='categoryProduct'><input name='joias[]' value='Gargantilhas' class='categoryCheckbox' type='checkbox' id='Opção1__3'><label for='Opção1__3'>Gargantilhas</label></span></li>
      <li><span class='categoryProduct'><input name='joias[]' value='Choker' class='categoryCheckbox' type='checkbox' id='Opção1__4'><label for='Opção1__4'>Choker</label></span></li>
      <li><span class='categoryProduct'><input name='joias[]' value='Pulseiras' class='categoryCheckbox' type='checkbox' id='Opção1__5'><label for='Opção1__5'>Pulseiras</label></span></li>
      <li><span class='categoryProduct'><input name='joias[]' value='Brincos' class='categoryCheckbox' type='checkbox' id='Opção1__6'><label for='Opção1__6'>Brincos</label></span></li>
      <li><span class='categoryProduct'><input name='joias[]' value='Tornozeleiras' class='categoryCheckbox' type='checkbox' id='Opção1__7'><label for='Opção1__7'>Tornozeleiras</label></span></li>
      </ul>
  </div>

  <div class='category'>
      <button type='button' data-title class='categoryButton'>
          <span class='buttonTitle'>Material</span>
          <span class='buttonIcon'><i class='bi bi-plus'></i></span>
      </button>
      <ul data-item='1' class='categoryItem'>
          <li><span class='categoryProduct'><input name='material[]' value='Ouro' class='categoryCheckbox' type='checkbox' id='Opção2_1'><label for='Opção2_1'>Ouro 18k</label></span></li>
          <li><span class='categoryProduct'><input name='material[]' value='Rhodium' class='categoryCheckbox' type='checkbox' id='Opção2_2'><label for='Opção2_2'>Rhodium</label></span></li>
          <li><span class='categoryProduct'><input name='material[]' value='RhodiumNegro' class='categoryCheckbox' type='checkbox' id='Opção2_3'><label for='Opção2_3'>Rhodium Negro</label></span></li>
      </ul>
  </div>

  <div class='category'>
      <button type='button' data-title class='categoryButton'>
          <span class='buttonTitle'>Estilo</span>
          <span class='buttonIcon'><i class='bi bi-plus'></i></span>
      </button>
      <ul data-item='1' class='categoryItem'>
          <li><span class='categoryProduct'><input name='estilo[]' value='Moderno' class='categoryCheckbox' type='checkbox' id='Opção3__1'><label for='Opção3__1'>Moderno</label></span></li>
          <li><span class='categoryProduct'><input name='estilo[]' value='Clássico' class='categoryCheckbox' type='checkbox' id='Opção3__2'><label for='Opção3__2'>Clássico</label></span></li>
          <li><span class='categoryProduct'><input name='estilo[]' value='Vintage' class='categoryCheckbox' type='checkbox' id='Opção3__3'><label for='Opção3__3'>Vintage</label></span></li>
          <li><span class='categoryProduct'><input name='estilo[]' value='Minimalista' class='categoryCheckbox' type='checkbox' id='Opção3__4'><label for='Opção3__4'>Minimalista</label></span></li>
          <li><span class='categoryProduct'><input name='estilo[]' value='ArtNouveau' class='categoryCheckbox' type='checkbox' id='Opção3__5'><label for='Opção3__5'>Art Nouveau</label></span></li>
          <li><span class='categoryProduct'><input name='estilo[]' value='ArtDéco' class='categoryCheckbox' type='checkbox' id='Opção3__6'><label for='Opção3__6'>Art Déco</label></span></li>
      </ul>
  </div>
  
  <div class='filtro'>
      <div class='filtro_1'>
          <button type='submit' name='submit' class='filtroBtn' >FILTRAR</button>
      </div>
  </div>
</form>
`;

  return category;
}
export class Categoria {
  constructor() {
    this.btns = document.querySelectorAll("[data-title]");
    this.listas = document.querySelectorAll("[data-item='1']");
    this.btns2 = document.querySelector("[data-filtros]");

    this.btns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        this.Categoria(index);
      });
    });
    this.btns2.addEventListener("click", () => {
      this.Categoria2();
    });
  }
  Categoria(index) {
    const btn = this.btns[index];
    if (this.listas[index].style.display === "block") {
      this.listas[index].style.display = "none";
      this.listas[index].style.height = "0px";

      btn.querySelector(".buttonIcon i").classList.remove("bi-dash");
      btn.querySelector(".buttonIcon i").classList.add("bi-plus");
    } else {
      this.listas[index].style.display = "block";
      this.listas[index].style.height = "";

      btn.querySelector(".buttonIcon i").classList.remove("bi-plus");
      btn.querySelector(".buttonIcon i").classList.add("bi-dash");
    }
  }
  Categoria2() {
    const category2Elements = document.querySelectorAll("[data-category2]");
    category2Elements.forEach((element) => {
      if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        this.btns2.querySelector(".buttonIcon i").classList.add("bi-dash");
        this.btns2.querySelector(".buttonIcon i").classList.remove("bi-plus");
      } else {
        element.style.display = "none";
        this.btns2.querySelector(".buttonIcon i").classList.add("bi-plus");
        this.btns2.querySelector(".buttonIcon i").classList.remove("bi-dash");
      }
    });
  }
}
