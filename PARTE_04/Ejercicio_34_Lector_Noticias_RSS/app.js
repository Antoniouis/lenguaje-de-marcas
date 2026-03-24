async function cargarNoticias() {
    try {
        const response = await fetch('feed.xml');
        const text = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const items = xml.querySelectorAll("item");
        const container = document.getElementById("news-container");

        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const description = item.querySelector("description").textContent;
            const pubDate = item.querySelector("pubDate").textContent;
            const author = item.querySelector("author").textContent;
            const category = item.getAttribute("category");

            const article = document.createElement("article");

            // Clases dinámicas
            article.classList.add("card", `category-${category}`);

            article.innerHTML = `
                <h2>${title}</h2>
                <p>${description}</p>
                <small>${pubDate} | ${author}</small>
            `;

            container.appendChild(article);
        });

    } catch (error) {
        console.error("Error cargando XML:", error);
    }
}

cargarNoticias();