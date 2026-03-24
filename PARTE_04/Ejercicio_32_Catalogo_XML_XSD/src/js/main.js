fetch('productos.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");

    const productos = xml.querySelectorAll("producto");
    const container = document.getElementById("productosContainer");

    productos.forEach(producto => {
      const nombre = producto.querySelector("nombre").textContent;
      const precio = producto.querySelector("precio").textContent;
      const descripcion = producto.querySelector("descripcion").textContent;
      const categoria = producto.querySelector("categoria").textContent;

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${nombre}</h3>
        <p><strong>Precio:</strong> $${precio}</p>
        <p>${descripcion}</p>
        <span class="categoria">${categoria}</span>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error cargando XML:", error));