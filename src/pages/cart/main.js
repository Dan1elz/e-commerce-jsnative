import { createNavbar } from "../../components/navbar/navbar.js";
import { createFooter } from "../../components/footer/footer.js";
import { CreateCart, createCompra } from "../../components/cart/cart.js";
import { ProdutsCart } from "../../../public/assets/js/product.js";

function render() {
  const app = document.querySelector("[data-app]");
  const footerContainer = document.querySelector("[data-footer]");
  const cardGrid = document.querySelector("[data-cardGrid]");

  const myNavbar = createNavbar();
  const myFooter = createFooter();

  app.textContent = "";
  footerContainer.textContent = "";

  app.appendChild(myNavbar);
  footerContainer.appendChild(myFooter);
  const arrayProduc = new ProdutsCart();
  let total = 0;
  arrayProduc.forEach((product) => {
    const quantity = product.quantity;
    const productPrice = Number(product.priceProduct.replace(",", "."));

    const totalPrice = productPrice * quantity;
    const formattedTotalPrice = totalPrice.toFixed(2).replace(".", ",");
    const myCart = CreateCart(
      product.img1Product,
      product.nameProduct,
      product.materialProduct,
      product.priceProduct,
      quantity,
      formattedTotalPrice
    );
    cardGrid.appendChild(myCart);

    total += totalPrice;
  });

  const subtotalQuantidade = document.querySelector(".subtotalQuantidade");
  const subtotalValor = document.querySelector(".subtotalValor");
  const cardCompras = document.querySelector(".cardCompras");

  subtotalQuantidade.textContent = "Subtotal (3 Itens) ";
  subtotalValor.textContent = "R$ " + total.toFixed(2).replace(".", ",");

  arrayProduc.forEach((product) => {
    const quantity = product.quantity;
    const productPrice = Number(product.priceProduct.replace(",", "."));

    const totalPrice = productPrice * quantity;
    const formattedTotalPrice = totalPrice.toFixed(2).replace(".", ",");
    const myCompra = createCompra(product.nameProduct, formattedTotalPrice);
    cardCompras.appendChild(myCompra);
  });

  const formElement = document.createElement("form");
  formElement.setAttribute("data-formCompra", "");
  formElement.innerHTML = `
        <div class="comprasBtn">
            <button>FINALIZAR COMPRA</button>
        </div>
    `;
  cardCompras.appendChild(formElement);
}

render();
