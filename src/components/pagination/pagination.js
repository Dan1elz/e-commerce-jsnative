export function createPagination() {
  const pagination = document.createElement("div");
  pagination.classList.add("pagination");

  pagination.innerHTML = `
        <div>
            <ul>
                <li><a class='left tip'><i class='bi bi-arrow-left'></i></a></li>
                <li><a class='number' href='#'>1</a></li>
                <li><a class='number' href='#'>2</a></li>
                <li><a class='number' href='#'>3</a></li>
                <li><a class='right tip'><i class='bi bi-arrow-right'></i></a></li>
            </ul>
        </div>
    `;
  return pagination;
}
