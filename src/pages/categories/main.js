import { createNavbar } from "../../components/navbar/navbar.js";
import { createPagination } from "../../components/pagination/pagination.js";
import { createFooter } from "../../components/footer/footer.js";
import {
  createCategory,
  Categoria,
} from "../../components/categories/categories.js";
import { createProduct } from "../../components/products/products.js";

import { Produts } from "../../../public/assets/js/product.js";

function render() {
  const app = document.querySelector("[data-app]");
  const article = document.querySelector("[data-article]");
  const category = document.querySelector("[data-category");
  const pagination = document.querySelector("[data-pagination]");
  const footer = document.querySelector("[data-footer]");

  const myNavbar = createNavbar();
  app.innerHTML = "";
  app.appendChild(myNavbar);

  const myPagination = createPagination();
  pagination.innerHTML = "";
  pagination.appendChild(myPagination);

  const myFooter = createFooter();
  footer.innerHTML = "";
  footer.appendChild(myFooter);

  const myCategory = createCategory();
  category.innerHTML = "";
  category.appendChild(myCategory);

  const Category = new Categoria();

  const fundo2 = document.querySelector(".fundo2");
  const cardGrid = document.createElement("div");
  cardGrid.className = "cardGrid2";
  fundo2.appendChild(cardGrid);

  const arrayProduc = new Produts();
  arrayProduc.forEach((product) => {
    const myProduct = createProduct(
      product.img1Product,
      product.idProduct,
      product.nameProduct,
      product.oldPriceProduct,
      product.priceProduct,
      product.promotionProduct
    );
    cardGrid.appendChild(myProduct);
  });

  const imgs = document.querySelectorAll(".cardImg");

  imgs.forEach((img, index) => {
    img.addEventListener("mouseover", () => {
      img.src = "../../../src/utils/images/" + arrayProduc[index].img2Product;
    });
    img.addEventListener("mouseout", () => {
      img.src = "../../../src/utils/images/" + arrayProduc[index].img1Product;
    });
  });
  favorite();
}
function favorite() {
  const favoriteForms = document.querySelectorAll("[data-favoritarForm]");
  const icons = document.querySelectorAll(".iconFav i");
  const buttons = document.querySelectorAll("[data-link]");

  favoriteForms.forEach((form, index) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      favoritar(index);
    });
  });

  function favoritar(index) {
    const icon = icons[index];
    const visible = buttons[index];
    if (icon.classList.contains("bi-heart")) {
      icon.classList.remove("bi-heart");
      icon.classList.add("bi-heart-fill");
      icon.style.color = "#E58C80";
      icon.style.transition = "200ms";
      visible.style.visibility = "visible";
    } else {
      icon.classList.remove("bi-heart-fill");
      icon.classList.add("bi-heart");
      icon.style.color = "#FFF";
      icon.style.transition = "200ms";
      visible.style.visibility = "";
    }
  }
}

render();
