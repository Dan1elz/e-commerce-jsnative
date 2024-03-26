export function createFavorite(
  imagem,
  id,
  titulo,
  precoAntigo,
  preco,
  promocao
) {
  const cardFavoritos = document.createElement("div");
  cardFavoritos.className = "cardFavoritos";

  const linkProdutos = document.createElement("a");
  linkProdutos.className = "linkProdutos";
  cardFavoritos.appendChild(linkProdutos);

  const imageElement = document.createElement("img");
  imageElement.classList.add("favoritosImg");
  imageElement.src = "../../../src/utils/images/" + imagem;
  imageElement.alt = "produto";
  linkProdutos.appendChild(imageElement);

  const formElement = document.createElement("form");
  formElement.setAttribute("data-favoritarForm", "");
  linkProdutos.appendChild(formElement);

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    this.Delet(inputElement.value);
  });

  const inputElement = document.createElement("input");
  inputElement.setAttribute("data-id", "");
  inputElement.type = "hidden";
  inputElement.name = "id";
  inputElement.value = id;
  formElement.appendChild(inputElement);

  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("data-link", "");
  buttonElement.className = "iconClose";
  buttonElement.name = "favorito";
  buttonElement.type = "submit";
  formElement.appendChild(buttonElement);

  const iconElement = document.createElement("i");
  iconElement.className = "bi bi-x-circle";
  buttonElement.appendChild(iconElement);

  const divElement = document.createElement("div");
  divElement.className = "favoritosBody";
  linkProdutos.appendChild(divElement);

  const tituloElement = document.createElement("p");
  tituloElement.className = "favoritosTitulo";
  tituloElement.textContent = titulo;
  divElement.appendChild(tituloElement);

  const itensDiv = document.createElement("div");
  itensDiv.className = "itens2";
  divElement.appendChild(itensDiv);

  const precoAntigoElement = document.createElement("p");
  precoAntigoElement.className = "favoritosPrecoAntigo";
  precoAntigoElement.textContent = "R$ " + precoAntigo;
  itensDiv.appendChild(precoAntigoElement);

  const precoElement = document.createElement("p");
  precoElement.className = "favoritosPreco";
  precoElement.textContent = "R$ " + preco;
  itensDiv.appendChild(precoElement);

  const promocaoElement = document.createElement("p");
  promocaoElement.className = "favoritosPromocao";
  promocaoElement.textContent = "ou R$ " + promocao + " sem juros!";
  itensDiv.appendChild(promocaoElement);

  const divCampo = document.createElement("div");
  divCampo.className = "campo";
  divElement.appendChild(divCampo);

  const buttonCompraElement = document.createElement("button");
  buttonCompraElement.type = "button";
  buttonCompraElement.className = "btnComprar";
  buttonCompraElement.textContent = "COMPRAR PRODUTO";
  divCampo.appendChild(buttonCompraElement);

  return cardFavoritos;
}
export function message(msg) {
  if (msg === "Not Product") {
    const alet = document.createElement("p");
    alet.textContent = "Nenhum Produto Favoritado até o momento!";
    return alet;
  }

  if (msg === "Sessão não existente!") {
    const alet = document.createElement("p");
    alet.textContent = "Usuário não está logado. Não pode usar esta função. ";

    const link = document.createElement("a");
    link.href = "";
    link.textContent = "Clique Para Logar!";
    alet.appendChild(link);

    return alet;
  }
}
