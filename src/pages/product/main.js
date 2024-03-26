import { createFooter } from "../../components/footer/footer.js";
import { createNavbar } from "../../components/navbar/navbar.js";
import { Produts } from "../../../public/assets/js/product.js";

function render() {
  const app = document.querySelector("[data-app]");
  const footer = document.querySelector("[data-footer");
  const article = "";

  const myNavbar = createNavbar();
  app.appendChild(myNavbar);

  const myFooter = createFooter();
  footer.appendChild(myFooter);

  const arrayProduc = Produts();

  function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const productId = getURLParameter("id");

  if (productId) {
    const produtoEncontrado = arrayProduc.find(
      (product) => product.idProduct === productId
    );

    if (produtoEncontrado) {
      console.log(produtoEncontrado);
      mapProduct(
        produtoEncontrado.nameProduct,
        produtoEncontrado.oldPriceProduct,
        produtoEncontrado.priceProduct,
        produtoEncontrado.promotionProduct,
        produtoEncontrado.descriptionProduct,
        produtoEncontrado.styleProduct,
        produtoEncontrado.jewelry,
        produtoEncontrado.materialProduct,
        produtoEncontrado.codProduct,
        produtoEncontrado.img1Product,
        produtoEncontrado.img2Product,
        produtoEncontrado.img3Product,
        produtoEncontrado.img4Product
      );
    } else {
      console.log("Produto não encontrado.");
    }
  } else {
    console.log("ID não encontrado na URL.");
  }

  const descrição =
    "Ilumine o dia dos Namorados com elegancia. Supreenda a pessoa amada com a sofisticação de nosso anel banhado  em ouro 18k, cravejado com cristais e Quartzo rosa. Aproveite a oferta exclusiva na Aya Semijoias beneficiando-se de um desconto especial de 30% OFF em compras acima de R$ 200, alem de frete gratuito!";
}

function mapProduct(
  mapTitle,
  mapOldValue,
  mapValue,
  mapPromotion,
  mapDescription,
  mapStyle,
  mapJewelry,
  mapMaterial,
  mapCodigo,
  img1,
  img2,
  img3,
  img4
) {
  const title = document.querySelector("[data-titulo]");
  title.textContent = mapTitle;

  const oldValue = document.querySelector(".valorAntigo");
  oldValue.textContent = "R$ " + mapOldValue;

  const value = document.querySelector(".valor");
  value.textContent = "R$ " + mapValue;

  const promotion = document.querySelector(".promocao");
  promotion.textContent = "ou R$ " + mapPromotion + " sem juros";

  const description = document.querySelector(".descricaoDescricao");
  description.lastChild.textContent = mapDescription;

  const style = document.querySelector(".descricaoEstilo");
  style.lastChild.textContent = mapStyle;

  const jewelry = document.querySelector(".descricaoJoias");
  jewelry.lastChild.textContent = mapJewelry;

  const material = document.querySelector(".descricaoMaterial");
  material.lastChild.textContent = mapMaterial;

  const codigo = document.querySelector(".descricaoCodigo");
  codigo.lastChild.textContent = mapCodigo;
  const imgElement = document.querySelectorAll(".lateralImg");

  imgElement[0].src = "../../utils/images/" + img1;
  imgElement[1].src = "../../utils/images/" + img2;
  imgElement[2].src = "../../utils/images/" + img3;
  imgElement[3].src = "../../utils/images/" + img4;

  const imgCard = document.querySelector(".cardImg");
  imgCard.src = "../../utils/images/" + img1;
}
render();
