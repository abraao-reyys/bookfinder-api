document.getElementById("send-button").addEventListener("click", async () => {
  try {
    const search = document.getElementById("isearch").value;
    const idiom = document.getElementById("idiom").value;
    const available = document.getElementById("iavailable").value;
    const year = document.getElementById("iyear").value;

    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        search,
        idiom,
        available,
        year,
      }),
    });

    const data = await response.json();

    const finderTable = document.getElementById("finder-table");
    finderTable.innerHTML = "";

    data.forEach((book) => {
      const a = document.createElement("a");
      a.setAttribute(
        "href",
        `https://openlibrary.org/${book.key}`
      );
      a.innerHTML = `
                <div class="book-info">
                    <img src="${book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : "img-default.png"}" alt="Foto do livro">
                    <div class="book-details">
                        <div>
                            <h2>${book.title}</h2>
                            <p>${book.author_name}</p>
                            <p>${book.first_publish_year}</p>
                        </div>
                        <div>
                            <p>${
                              book.ebook_access === "borrowable"
                                ? "Disponível"
                                : "Indisponível"
                            }</p>
                            <p>${(book.language || [])
                              .filter((lang) =>
                                ["por", "eng", "spa"].includes(lang)
                              )
                              .join(", ")}</p>
                        </div>
                    </div>
                </div>
            `;
      finderTable.appendChild(a);
    });
  } catch (error) {
    console.error("Erro ao carregar os livros:", error);
  }
});

document.getElementById("reset-button").addEventListener("click", () => {
  const finderTable = document.getElementById("finder-table");
  finderTable.innerHTML = "";
});
