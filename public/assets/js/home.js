import { createNavbar } from "../../../src/components/navbar/navbar.js";
import { createProduct } from "../../../src/components/products/products.js";
import { createPagination } from "../../../src/components/pagination/pagination.js";
import { createFooter } from "../../../src/components/footer/footer.js";
import { Produts } from "./product.js";

// import "../../../src/components/navbar/navbar.css";
// import "../../../src/components/products/products.css";
// import "../../../src/components/pagination/pagination.css";
// import "../../../src/components/footer/footer.css";

function render() {
  const app = document.querySelector("[data-app]");
  const article = document.querySelector("[data-article]");
  const pagination = document.querySelector("[data-pagination]");
  const footer = document.querySelector("[data-footer]");

  const myNavbar = createNavbar();
  app.innerHTML = "";
  app.appendChild(myNavbar);

  const cardGrid = document.createElement("div");
  cardGrid.className = "cardGrid";
  article.appendChild(cardGrid);

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
      img.src = "../src/utils/images/" + arrayProduc[index].img2Product;
    });
    img.addEventListener("mouseout", () => {
      img.src = "../src/utils/images/" + arrayProduc[index].img1Product;
    });
  });

  const myPagination = createPagination();
  pagination.innerHTML = "";
  pagination.appendChild(myPagination);

  const myFooter = createFooter();
  footer.innerHTML = "";
  footer.appendChild(myFooter);

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
