document.addEventListener("DOMContentLoaded", function () {
  fetchDataAndRender();
});

function fetchDataAndRender() {
  fetch("http://localhost:3000/api/rent_products")
    .then((response) => response.json())
    .then((data) => renderData(data))
    .catch((error) => console.error("Ошибка получения данных:", error));
}

function renderData(data) {
  const rentProductsContainer = document.querySelector(".rent-products-cards");
  rentProductsContainer.innerHTML = "";

  data.forEach((product) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("rent-products-card-container");

    const card = document.createElement("div");
    card.classList.add("rent-products-card");

    const image = document.createElement("img");
    image.src = `http://localhost:3000/api/images/${product.image}`;
    image.alt = "";

    const name = document.createElement("div");
    name.classList.add("rent-products-card-text-name");
    name.innerHTML = `<p>${product.name}</p>`;

    if (product.description) {
      name.innerHTML += `<p>${product.description}</p>`;
    }

    let i = 0;
    let prices_prefix = ["30 мин - ", "1 час - ", "2 часа - "];

    const prices = document.createElement("div");
    prices.classList.add("rent-products-card-text-prices");
    product.prices.forEach((price) => {
      prices.innerHTML += `<p>${prices_prefix[i++]} ${price} руб.</p>`;
    });

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(prices);

    cardContainer.appendChild(card);
    rentProductsContainer.appendChild(cardContainer);
  });
}
