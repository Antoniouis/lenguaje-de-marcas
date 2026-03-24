const catalogContainer = document.getElementById("catalog");
const searchInput = document.getElementById("searchInput");

async function loadXML() {
    const response = await fetch('../data/datos.xml');
    const text = await response.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");

    const items = xml.querySelectorAll("item");

    return Array.from(items).map(item => ({
        title: item.querySelector("title").textContent,
        author: item.querySelector("author").textContent,
        year: item.querySelector("year").textContent,
        description: item.querySelector("description").textContent,
        category: item.getAttribute("category")
    }));
}

function renderItems(items) {
    catalogContainer.innerHTML = "";

    items.forEach(item => {
        const article = document.createElement("article");
        article.classList.add("card", `category-${item.category}`);

        article.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <small>${item.author} - ${item.year}</small>
        `;

        catalogContainer.appendChild(article);
    });
}

let allItems = [];

function setupSearch() {
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        const filtered = allItems.filter(item =>
            item.title.toLowerCase().includes(value)
        );

        renderItems(filtered);
    });
}

async function init() {
    allItems = await loadXML();
    renderItems(allItems);
    setupSearch();
}

init();