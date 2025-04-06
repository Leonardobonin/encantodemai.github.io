fetch('roupinhas.json')
.then(response => response.json())
.then(roupinhas => {
  const galeria = document.getElementById("galeriaRoupinhas");

  roupinhas.forEach(peca => {
    const div = document.createElement("div");
    div.className = "peca";
    div.innerHTML = `
      <img src="${peca.link_image}" alt="${peca.Nome}" />
      <h3>${peca.Nome}</h3>
      <p>${peca.Descricao}</p>
    `;
    galeria.appendChild(div);
  });
})
.catch(error => {
  console.error('Erro ao carregar o JSON:', error);
});
