const data = {
    "produtos": [
      {
        "id": 1,
        "nome": "Guitarra Stratocaster T-640 Super SG Tagima",
        "preco": 2809.45,
        "categoria": "Guitarras",
        "imagem": "https://pub-c83d3a132dbd48baaf0c726c6fe46c2b.r2.dev/images/2025/02/guitarra-strat-2s-1h-escala-escura-escudo-awh-t-640-super-sg-tagima-produto-1738692660.png",
        "descricao": "Guitarra modelo Stratocaster Tagima com escala em Rosewood, captadores Single-Coils e um Humbucker, visual clássico e timbre versátil.",
        "emEstoque": true
      },
      {
        "id": 2,
        "nome": "Violão Elétrico Aço Michael VMS314",
        "preco": 679.00,
        "categoria": "Violões",
        "imagem": "https://http2.mlstatic.com/D_Q_NP_2X_600690-MLA95710282376_102025-P.webp",
        "descricao": "Violão elétrico com cordas de aço e corte no corpo para acesso às cordas mais altas (Cutaway) com cavalete e escala em blackwood.",
        "emEstoque": false
      },
      {
        "id": 3,
        "nome": "Contrabaixo Fender Squier Fender Classic 70s Jazz Bass",
        "preco": 5190.00,
        "categoria": "Contrabaixos",
        "imagem": "https://images.tcdn.com.br/img/img_prod/1205809/contra_baixo_fender_squier_4_cordas_classic_vibe_70_s_jazz_bass_black_6311_1_5c7a1c6fa842f87e681d2b983d788de0.jpg",
        "descricao": "Contrabaio Fender de 4 cordas com escala em Maple com graves fortes e estilo vintage.",
        "emEstoque": true
      },
      {
        "id": 4,
        "nome": "Guitarra Fender Standard Stratocaster HSS",
        "preco": 6292.80,
        "categoria": "Guitarras",
        "imagem": "https://ninjasomfaststore.vtexassets.com/arquivos/ids/185283/Guitarra-Player-Stratocaster-HSS-MN-TPL---Fender.png?v=638179537624600000",
        "descricao": "Guitarra Stratocaster Fender com escala em Maple com 21 trastes, captadores cerâmicos (Humbucker e Single-Coils) e timbre versátil.",
        "emEstoque": false
      },
      {
        "id": 5,
        "nome": "Guitarra Epiphone Les Paul Ebony",
        "preco": 7990.00,
        "categoria": "Guitarras",
        "imagem": "https://akusticamusical.fbitsstatic.net/img/p/guitarra-epiphone-les-paul-standard-60s-original-series-ebony-preta-c-escudo-creme-e-escala-escura-354403/572233.jpg?w=1000&h=1000&v=202508062257&qs=ignore",
        "descricao": "Guitarra Les Paul Epiphone com escala em Ébano e corpo e braço em Mogno, dois captadores Epiphone Probucker Custom inspirados nos CustomBuckers da Gibson.",
        "emEstoque": true
      },
      {
        "id": 6,
        "nome": "Guitarra Fender Squier Debut Telecaster",
        "preco": 1490.00,
        "categoria": "Guitarras",
        "imagem": "https://ninjasomfaststore.vtexassets.com/arquivos/ids/189318/Guitarra-Affinity-Series-Telecaster-LPB---Squier-By-Fender.png?v=638407626707470000",
        "descricao": "Guitarra Telecaster Fender com escala em Laurel, corpo levemente fino em Poplar e braço em Maple com 21 trastes, a guitarra conta com captadores Single-Coils e ponte em estilo vintage.",
        "emEstoque": true
      },
      {
        "id": 7,
        "nome": "Bateria Pearl Masters Air Arc Design",
        "preco": 66000.00,
        "categoria": "Baterias",
        "imagem": "https://cdnbatera.bateraclube.com.br/files/122/MED_produto-pearl-masters-maple-gum-root-beer-fade-hybrid-shell-228101214-16-shell-pack-r2-air-arc-design-6668750315.webp",
        "descricao": "Bateria Pearl com três tons (8x7, 10x7, 12x8), dois surdos (14x14, 16x16) e um bumbo (22x18) com cascos híbridos em Maple e Gum Wood.",
        "emEstoque": true
      },
      {
        "id": 8,
        "nome": "Violão Eletroacústico Giannini GDC Plus CEQ Natural",
        "preco": 710.10,
        "categoria": "Violões",
        "imagem": "https://www.giannini.com.br/wp-content/uploads/2026/03/gdc-plus-ceq-n.jpg",
        "descricao": "Violão Eletroacústico Giannini com escala em Rosewood e Cutaway lave para acesso às notas mais altas.",
        "emEstoque": true
      },
      {
        "id": 9,
        "nome": "Baixo Tagima Rupture Mdouble Unique",
        "preco": 3229.00,
        "categoria": "Contrabaixos",
        "imagem": "https://cdn.awsli.com.br/2500x2500/125/125927/produto/392932404/e779aab223ba8b6ab5b35df41699412a-7yedp3rj0t.jpg",
        "descricao": "Contrabaixo Tagima com escala em Bolivian Rosewood e braço em Roasted Maple com controles múltiplos e timbre versátil.",
        "emEstoque": true
      }
    ]
  }


  //B2 - Seleção de elementos (DOM)

  const catalogo = document.getElementById("product-list");
  const detalhes = document.getElementById("product-details");
  const select = document.querySelector('#category');
  const pesquisa = document.querySelector('#search');
  const allCards = document.querySelectorAll('.card');

  //B3 - Funções Obrigatórias

  //1.FormatPrice(preco)
  FormatPrice = (preco) => {
    return `R$${preco.toFixed(2)}`
  }

  //2.createProductCard(produto)
  const meusCards = [];
  function createProductCard(produto)
  {
    const card = document.createElement('div');
    card.innerHTML = `
      <img src="${produto.imagem}" alt="foto ${produto.nome}">
      <h4>${produto.nome}</h4>
      <p>${produto.categoria}</p>
      <p>${FormatPrice(produto.preco)}</p>
      <button class="btn-detalhes">Ver Detalhes</button> <br><br>
      <button class="btn-destaque">Destacar</button>`;

    card.classList.add('card');
    card.setAttribute('data-id', produto.id);
    card.style.padding = '30px';
    card.querySelector('.btn-detalhes').addEventListener('click', () => {
      showProductDetails(produto, card);
    })

    card.querySelector('.btn-destaque').addEventListener('click', () => {
      destaqueCard(card);
    })

    return card;
  }

  //3.renderProducts(produto)
  renderProduct = (produto) => {
    catalogo.innerHTML = '';
    data.produtos.forEach (item => {
      const cardProduto = createProductCard(item);
      catalogo.appendChild(cardProduto);
    })
    const select = document.querySelector('#category');
    select.value = 'todas';
    const pesquisa = document.querySelector('#search');
    pesquisa.value = '';
    querySelectorAllObrigatorio();
  }

  const render = document.getElementById('btnRender');
  render.addEventListener('click', () => {
    renderProduct();
  });

  //4.renderCategories()
  renderCategories = () => {
    var categoria = [];
    const select = document.querySelector('#category');
    select.innerHTML = `<option value="todas">Todas</option>`
    for (i = 0; i < data.produtos.length; i++)
      if(!categoria.includes(data.produtos[i].categoria))
      {
        select.innerHTML += `<option value="${data.produtos[i].categoria}">${data.produtos[i].categoria}</option>`;
        categoria[i] = data.produtos[i].categoria;
      }
  } 

  //5.showProductDetails(produto)
  showProductDetails = (produto, card) => {
    const seAberto = card.getAttribute('data-selected') === 'true'
    detalhes.innerHTML = '';
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
      card.removeAttribute('data-selected', true)
    });
    card.setAttribute('data-selected', true);

    if (seAberto)
      card.removeAttribute('data-selected', true);
    
    else if(produto.emEstoque === true)
      {
        detalhes.innerHTML = `
          <h3>${produto.nome}</h3>
          <h5>${FormatPrice(produto.preco)}</h5>
          <p>${produto.categoria}</p>
          <p>Disponível</p>
          <p>${produto.descricao}</p>`
      }
    else
    {
        detalhes.innerHTML = `
          <h3>${produto.nome}</h3>
          <h5>${FormatPrice(produto.preco)}</h5>
          <p>${produto.categoria}</p>
          <p>Indisponível no momento</p>
          <p>${produto.descricao}</p>`
    }
  }

  //6.filterProducts()
  filterProducts = () => {
    const pesquisa = document.querySelector('#search').value;
    const select = document.querySelector('#category');
    var filtro = [];
    j = 0;
    for (i = 0; i < data.produtos.length; i++)
    {
      if(data.produtos[i].nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()))
      {
        filtro[j] = data.produtos[i];
        j++;
      }
    }

    if (select.value != 'todas')
      cat = filtro.filter(item => {
        return item.categoria == select.value;
    })
    else
      cat = filtro;
    
    catalogo.innerHTML = '';
    cat.forEach (item => {
        cardProduto = createProductCard(item);
        catalogo.appendChild(cardProduto);
    })
  }

  pesquisa.addEventListener('input', () => {
    filterProducts();
  })
  select .addEventListener('change', () => {
    filterProducts();    
  })

  //B4 - Cards com botões e eventos

  //Botão Destaque
  destaqueCard = (card) => {
      card.classList.toggle('destaque');
  }

  //A maior parte dos EventListeners estão junto com os botões ou com suas devidas funções

  querySelectorAllObrigatorio = () => {
    const TodosCards = document.querySelectorAll('.card')
    TodosCards.forEach (card => {
      console.log(`data-id: ${card.getAttribute('data-id')}`)
    })
  }
  


