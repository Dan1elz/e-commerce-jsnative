import { createNavbar } from "../../components/navbar/navbar.js";
import { createFooter } from "../../components/footer/footer.js";
import {
  createFavorite,
  message,
} from "../../components/favorites/favorites.js";
import { ProdutsFavorite } from "../../../public/assets/js/product.js";
function render() {
  const app = document.querySelector("[data-app]");
  const footer = document.querySelector("[data-footer]");
  const article = document.querySelector("[data-cardGrid]");

  const myNavbar = createNavbar();
  app.innerHTML = "";
  app.appendChild(myNavbar);

  const myFooter = createFooter();
  footer.innerHTML = "";
  footer.appendChild(myFooter);
}
render();
