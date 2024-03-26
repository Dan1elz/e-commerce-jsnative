export function CreateCart(
  image,
  titulo,
  tamanho,
  preco,
  quantidade,
  valorFinal
) {
  const currentUrl = window.location.href;
  const diretorio = currentUrl.includes("/src/pages/") ? "../../" : "";

  const cart = document.createElement("div");
  cart.className = "cardCarrinho";

  cart.innerHTML = `
    <div class='cardCarrinho'>
        <div class='carrinhoGrid'>
            <div class='grid1' data-position='1'>
                <img class='carrinhoImg' src='${diretorio}../src/utils/images/${image}' alt='produto'>
                <div class='carrinhoBody'>
                    <form data-formClose>
                        <button class='closeIcon'><i class='bi bi-x-circle'></i></button>
                    </form>
                    <p class='carrinhoTitulo'>${titulo}</p>
                    <div class='carrinhoItens'>
                        <p><span class='opcao'>Material:</span>${tamanho}</p>
                        <p><span class='opcao2'>Preço:</span>R$ ${preco}</p>
                    </div>
                </div>
            </div>
            <div class='gridReparticao' data-position='2'>
                <div></div>
            </div>
            <div class='gridQuantidades' data-position='3'>
                <div>
                    <p>Quantidades: </p>
                    <form data-formDash><button class='btnI'><i class='bi bi-dash-circle'></i></button></form>
                    <input type='text' value='${quantidade}' readonly='true'>
                    <form data-formPlus><button class='btnI'><i class='bi bi-plus-circle'></i></button></form>
                </div>
                <p>R$ ${valorFinal}</p>
            </div>
        </div>
    </div>
    `;

  return cart;
}
export function createCompra(nome, preco) {
  const compra = document.createElement("div");
  compra.classList.add("comprasProduto");
  compra.innerHTML = `
        <p class="produtoNome">${nome}</p>
        <p class="produtoValor2">R$ ${preco}</p>
    `;
  return compra;
}
