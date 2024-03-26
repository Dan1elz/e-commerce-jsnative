export function createProduct(image, id, name, precoAntigo, preco, promocao) {
  const product = document.createElement("div");
  product.classList.add("card");
  const currentUrl = window.location.href;
  const diretorio = currentUrl.includes("/src/pages/categories/")
    ? "../../"
    : "";

  product.innerHTML = `
        <div class='card'>
            <a class='linkProdutos' href='${diretorio}../src/pages/product/index.html?id=${id}'>
                <img class='cardImg' src='${diretorio}../src/utils/images/${image}' alt='produto'>
            </a>
            <form data-favoritarForm> 
                <input data-id type='hidden' name='id' value='${id}'>
                <button data-link class='iconFav' name='favorito'><i class='bi bi-heart'></i></button>
            </form>

            <a class='linkProdutos' href='${diretorio}../src/pages/product/index.html?id=${id}'>
                <div class='cardBody'>
                    <p class='cardTitulo'>${name}</p>
                    <div class='Carditens'>
                        <p class='cardPreçoAntigo'>R$ ${precoAntigo}</p>
                        <p class='cardPreço'>R$ ${preco}</p>
                    </div>
                    <p class='promoção'> ou R$ ${promocao} sem juros</p>
                    <a class='iconCart' href='${diretorio}../src/pages/product/index.html?id=${id}'><i class='bi bi-cart2'></i></a>
                </div>
            </a>
        </div>
`;

  return product;
}
