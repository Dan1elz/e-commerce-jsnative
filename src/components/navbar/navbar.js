export function createNavbar() {
  const navbar = document.createElement("header");
  const currentUrl = window.location.href;
  const diretorio = currentUrl.includes("/src/pages/") ? "../../" : "";

  navbar.innerHTML = `
    <header>
        <div class='itens'>
            <div class='logo'>
                <p>Aya Semijoias</p>
            </div>
            <div class='menu'>
                <form class='pesquisar'>
                    <button class='pesquisarBtn' type='submit'><i class='bi bi-search'></i></button>
                    <input class='pesquisarInput' type='search' placeholder='Pesquisar' />
                </form>
            </div>
        </div>
        <div class='menuLinks'>
            <ul>
                <li class='menuLi'><a class='menuProdutos' href='${diretorio}../public'><i class='bi bi-bag'></i><span class='menuTitulos'>Joias</span></a></li>
                <li class='menuLi'><a class='menuProdutos' href='${diretorio}../src/pages/categories/'><i class='bi bi-list'></i><span class='menuTitulos'>Categorias</span></a></li>
                <li class='menuLi'><a class='menuProdutos' href='${diretorio}../src/pages/favorites/'><i class='bi bi-heart'></i><span class='menuTitulos'>Favoritos</span></a></li>
                <li class='menuLi'><a class='menuProdutos' href='${diretorio}../src/pages/cart/'><i class='bi bi-cart'></i><span class='menuTitulos'>Carrinho</span></a></li>
                <li class='menuLi'><a class='menuProdutos' href=''><i class='bi bi-box-arrow-in-right'></i><span class='menuTitulos'>Entrar</span></a></li>
                <li class='menuLi'><a class='menuOpções' href='#'><i class='bi bi-three-dots-vertical'></i></a></li>
            </ul>
        </div>
    </header>
    `;
  return navbar;
}
