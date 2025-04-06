const roupinhas = [
    {
      "link_image": "/imagens/roupinhas/rosinha.jpeg",
      "Nome": "Vestidinho Doce Rosa",
      "Descricao": "Feito à mão com fio 100% algodão, ideal para os primeiros dias de vida. Tamanho RN."
    },
    {
      "link_image": "/imagens/roupinhas/branca_2.jpeg",
      "Nome": "Conjuntinho Brilho de Neve",
      "Descricao": "Delicado e suave como o primeiro abraço. Encomendas sob medida disponíveis."
    },
    {
      "link_image": "/imagens/roupinhas/branca_com_detalhe.jpeg",
      "Nome": "Vestido Encanto de Pérola",
      "Descricao": "Detalhes em crochê que encantam. Perfeito para ocasiões especiais."
    },
    {
      "link_image": "/imagens/roupinhas/amarela.jpeg",
      "Nome": "Conjuntinho Solzinho",
      "Descricao": "Amarelo alegre com toque de carinho. Acompanha toquinha combinando."
    },
    {
      "link_image": "/imagens/roupinhas/rosa_com_detalhe.jpeg",
      "Nome": "Vestido Flor de Amor",
      "Descricao": "Rosa suave com detalhes encantadores. Um mimo cheio de ternura."
    },
    {
      "link_image": "/imagens/roupinhas/rosa.jpeg",
      "Nome": "Conjuntinho Rosa Bebê",
      "Descricao": "Simples, delicado e cheio de amor. Crochê feito com fios de ternura."
    }
  ];

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