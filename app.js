// Part 1 - Dados
const farmacos = [
  {
    key: "raiva",
    title: "Fármaco da Raiva",
    amount: 1,
    items: [
      ["Elixir de Fúria", 3],
      ["Elixir do Frenesi", 3],
      ["Elixir da Concentração", 3],
      ["Elixir da Destruição", 3],
      ["Catalisador Mágico", 1],
    ],
  },
  {
    key: "adaptacao",
    title: "Fármaco da Adaptação",
    amount: 1,
    items: [
      ["Elixir da Defesa", 3],
      ["Elixir de Espiral", 3],
      ["Elixir da Vida", 3],
      ["Elixir de Estamina", 3],
      ["Catalisador Mágico", 1],
    ],
  },
  {
    key: "potencial",
    title: "Fármaco do Potencial",
    amount: 1,
    items: [
      ["Elixir do Vento", 3],
      ["Elixir de Feitiço", 3],
      ["Elixir de Choque", 3],
      ["Elixir de Rapidez", 3],
      ["Catalisador Mágico", 1],
    ],
  },
  {
    key: "decadencia",
    title: "Fármaco da Decadência",
    amount: 1,
    items: [
      ["Elixir de Perfuração", 3],
      ["Elixir da Morte", 3],
      ["Elixir de Pilhagem", 3],
      ["Elixir do Ceifador", 3],
      ["Catalisador Mágico", 1],
    ],
  },
  {
    key: "ira",
    title: "Fármaco da Ira Descontrolada",
    amount: 1,
    items: [
      ["Elixir de Assassinato", 3],
      ["Elixir de Detecção", 3],
      ["Elixir de Carnificina", 3],
      ["Elixir do Céu", 3],
      ["Catalisador Mágico", 1],
    ],
  },
];

const elixirRecipes = {
  "Elixir de Fúria": [
    ["Seiva de Freixo", 1],
    ["Cogumelo Anão", 4],
    ["Sangue de Urso", 4],
    ["Água Purificada", 3],
  ],
  "Elixir do Frenesi": [
    ["Óleo de Regeneração", 1],
    ["Reagente Líquido Limpo", 5],
    ["Cogumelo Fantasma", 2],
    ["Fruto da Natureza", 3],
    ["Seiva de Cedro", 5],
  ],
  "Elixir da Concentração": [
    ["Reagente Líquido Limpo", 1],
    ["Cogumelo Nuvem", 3],
    ["Sangue de Urso", 3],
    ["Grama Selvagem", 2],
  ],
  "Elixir da Destruição": [
    ["Óleo da Tempestade", 1],
    ["Fruto da Natureza", 3],
    ["Reagente Líquido Limpo", 5],
    ["Pó de Chama", 5],
    ["Seiva de Cedro Nevado", 7],
  ],
  "Elixir da Defesa": [
    ["Reagente Líquido Limpo", 1],
    ["Seiva de Freixo", 6],
    ["Sangue de Porco", 5],
    ["Água Purificada", 3],
  ],
  "Elixir de Espiral": [
    ["Seiva de Tuia", 6],
    ["Galho de Monge", 3],
    ["Sangue de Palhaço", 2],
    ["Pó de Chama", 2],
    ["Água Purificada", 3],
  ],
  "Elixir da Vida": [
    ["Reagente em Pó Puro", 1],
    ["Poção de HP (Pequena)", 3],
    ["Azaleia Real Prateada", 3],
    ["Sangue de Raposa", 5],
  ],
  "Elixir de Estamina": [
    ["Reagente em Pó Puro", 1],
    ["Seiva de Bétula", 5],
    ["Sangue de Urso", 4],
    ["Cogumelo Anão", 2],
  ],
  "Elixir do Vento": [
    ["Sangue de Homem Sábio", 1],
    ["Cogumelo Vidente", 5],
    ["Pó de Escuridão", 2],
    ["Seiva de Pinheiro", 5],
  ],
  "Elixir de Feitiço": [
    ["Sangue do Tirano", 1],
    ["Flor de Escama de Fogo", 5],
    ["Pó de Escuridão", 2],
    ["Seiva de Bordo", 3],
  ],
  "Elixir de Choque": [
    ["Sangue de Palhaço", 1],
    ["Cogumelo Tigre", 5],
    ["Pó do Tempo", 3],
    ["Seiva de Cedro", 7],
  ],
  "Elixir de Rapidez": [
    ["Sangue da Fera Lendária", 1],
    ["Cogumelo Flecha", 5],
    ["Pó de Escuridão", 2],
    ["Seiva de Bétula", 5],
  ],
  "Elixir de Perfuração": [
    ["Óleo da Corrupção", 1],
    ["Reagente Líquido Limpo", 4],
    ["Cogumelo Bluffer", 5],
    ["Fruto da Natureza", 2],
    ["Seiva de Pinheiro", 5],
  ],
  "Elixir da Morte": [
    ["Óleo de Tranquilidade", 1],
    ["Reagente Líquido Limpo", 6],
    ["Cogumelo Ancestral", 2],
    ["Fruto da Natureza", 2],
    ["Seiva de Freixo", 7],
  ],
  "Elixir de Pilhagem": [
    ["Óleo de Coragem", 1],
    ["Reagente Líquido Limpo", 4],
    ["Cogumelo Corcunda", 3],
    ["Fruto da Natureza", 2],
    ["Seiva de Bétula", 4],
  ],
  "Elixir do Ceifador": [
    ["Óleo de Coragem", 1],
    ["Reagente em Pó Puro", 4],
    ["Cogumelo Céu", 2],
    ["Fruto da Natureza", 4],
    ["Galho de Monge", 2],
  ],
  "Elixir de Assassinato": [
    ["Óleo de Regeneração", 1],
    ["Reagente Pó Puro", 5],
    ["Cogumelo Amanita", 4],
    ["Vestígio da Natureza", 2],
    ["Caroço de Árvore Vermelha", 2],
  ],
  "Elixir de Detecção": [
    ["Óleo da Tempestade", 1],
    ["Reagente Pó Puro", 6],
    ["Trufa", 3],
    ["Fruto da Natureza", 3],
    ["Casca de Árvore Velha", 2],
  ],
  "Elixir de Carnificina": [
    ["Óleo da Corrupção", 1],
    ["Reagente Pó Puro", 7],
    ["Cogumelo Tigre", 2],
    ["Vestígio da Natureza", 3],
    ["Folha de Espírito", 2],
  ],
  "Elixir do Céu": [
    ["Óleo de Tranquilidade", 1],
    ["Reagente Pó Puro", 6],
    ["Cogumelo Imperador", 1],
    ["Vestígio da Natureza", 4],
    ["Laço de Árvore Sangrenta", 2],
  ],
};

const bloodRecipes = {
  "Sangue de Homem Sábio": [
    ["Reagente Líquido Limpo", 1],
    ["Sangue de Raposa", 2],
    ["Vestígio da Natureza", 1],
    ["Galho de Monge", 1],
  ],
  "Sangue do Pecador": [
    ["Reagente Líquido Limpo", 1],
    ["Sangue de Porco", 2],
    ["Pó de Chama", 1],
    ["Laço de Árvore Sangrenta", 1],
  ],
  "Sangue da Fera Lendária": [
    ["Reagente em Pó Puro", 1],
    ["Sangue de Lagarto", 2],
    ["Vestígio da Natureza", 1],
    ["Folha de Espírito", 1],
  ],
  "Sangue de Palhaço": [
    ["Reagente Líquido Limpo", 1],
    ["Sangue de Lobo", 2],
    ["Pó de Escuridão", 1],
    ["Folha de Espírito", 1],
  ],
  "Sangue do Tirano": [
    ["Reagente em Pó Puro", 1],
    ["Sangue de Urso", 2],
    ["Vestígio da Natureza", 1],
    ["Galho de Monge", 1],
  ],
};

const oilRecipes = {
  "Óleo de Coragem": [
    ["Sangue de Palhaço", 1],
    ["Fruto da Natureza", 1],
    ["Pó de Chama", 1],
    ["Galho de Monge", 1],
  ],
  "Óleo de Tranquilidade": [
    ["Sangue de Homem Sábio", 1],
    ["Fruto da Natureza", 1],
    ["Pó da Terra", 1],
    ["Laço de Árvore Sangrenta", 1],
  ],
  "Óleo da Corrupção": [
    ["Sangue do Pecador", 1],
    ["Fruto da Natureza", 1],
    ["Pó de Escuridão", 1],
    ["Folha de Espírito", 1],
  ],
  "Óleo de Regeneração": [
    ["Sangue da Fera Lendária", 1],
    ["Fruto da Natureza", 1],
    ["Pó de Rachadura", 1],
    ["Caroço de Árvore Vermelha", 1],
  ],
  "Óleo da Tempestade": [
    ["Sangue do Tirano", 1],
    ["Fruto da Natureza", 1],
    ["Pó do Tempo", 1],
    ["Casca de Árvore Velha", 1],
  ],
};

const reagentRecipes = {
  "Reagente Líquido Limpo": [
    ["Sal", 1],
    ["Erva Aurora", 1],
    ["Água Purificada", 1],
    ["Grama Selvagem", 1],
  ],
  "Reagente em Pó Puro": [
    ["Açúcar", 1],
    ["Azaleia Prata", 1],
    ["Água Purificada", 1],
    ["Grama Selvagem", 1],
  ],
  "Reagente Pó Puro": [
    ["Açúcar", 1],
    ["Azaleia Prata", 1],
    ["Água Purificada", 1],
    ["Grama Selvagem", 1],
  ],
};

const recipeLookup = {
  ...elixirRecipes,
  ...bloodRecipes,
  ...oilRecipes,
  ...reagentRecipes,
};

const baseBloodTypes = [
  "Sangue de Urso",
  "Sangue de Lagarto",
  "Sangue de Porco",
  "Sangue de Raposa",
  "Sangue de Lobo",
];

const bloodSubstitutionGroups = [
  {
    id: "blood-group-lobo",
    title: "Grupo 1 - Sangue de Lobo",
    reference: "Sangue de Lobo",
    substitutes: ["Sangue de Rinoceronte", "Sangue de Dragão-Leopardo", "Sangue de Flamingo"],
  },
  {
    id: "blood-group-cervo",
    title: "Grupo 2 - Sangue de Cervo",
    reference: "Sangue de Cervo",
    substitutes: ["Sangue de Ovelha", "Sangue de Boi", "Sangue de Waragon", "Sangue de Porco", "Sangue de Lhama", "Sangue de Cabra"],
  },
  {
    id: "blood-group-raposa",
    title: "Grupo 3 - Sangue de Raposa",
    reference: "Sangue de Raposa",
    substitutes: ["Sangue de Doninha", "Sangue de Guaxinim", "Sangue de Macaco", "Sangue de Escorpião", "Sangue de Marmota"],
  },
  {
    id: "blood-group-urso",
    title: "Grupo 4 - Sangue de Urso",
    reference: "Sangue de Urso",
    substitutes: ["Sangue de Troll", "Sangue de Ogro", "Sangue de Dinossauro", "Sangue de Leão", "Sangue de Yak", "Sangue de Elefante de Pedra"],
  },
  {
    id: "blood-group-lagarto",
    title: "Grupo 5 - Sangue de Lagarto",
    reference: "Sangue de Lagarto",
    substitutes: ["Sangue de Verme", "Sangue de Morcego", "Sangue de Pássaro Kuku", "Sangue de Cobra"],
  },
];

const bloodSubstitutionAnchorByName = Object.fromEntries(
  bloodSubstitutionGroups.flatMap((group) => [
    [group.reference, group.id],
    ...group.substitutes.map((name) => [name, group.id]),
  ])
);

const harmonyRecipe = farmacos.map((farmaco) => [farmaco.title, 3]);

// Part 2 - Estado e renderização
const quantityInput = document.querySelector("#targetQuantity");
const cards = document.querySelector("#farmacoCards");
const bloodSummary = document.querySelector("#bloodSummary");
const recipeLibrary = document.querySelector("#recipeLibrary");
const bloodSubstitutions = document.querySelector("#bloodSubstitutions");

function getQuantity() {
  return Math.max(0, Math.floor(Number(quantityInput.value) || 0));
}

function formatAmount(value) {
  const safeValue = Number.isFinite(Number(value)) ? Number(value) : 0;
  return safeValue.toLocaleString("pt-BR");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRecipe(name) {
  return recipeLookup[name] || null;
}

function getRecipeAnchorId(name) {
  if (name === "Fármaco da Harmonia") return "farmaco-harmonia";
  const farmaco = farmacos.find((item) => item.title === name);
  if (farmaco) return `farmaco-${slugify(farmaco.key)}`;
  if (recipeLookup[name]) return `recipe-${slugify(name)}`;
  if (bloodSubstitutionAnchorByName[name]) return bloodSubstitutionAnchorByName[name];
  return null;
}

function renderLinkedText(name) {
  const anchorId = getRecipeAnchorId(name);
  if (!anchorId) return escapeHtml(name);
  return `<a class="ingredient-button recipe-link" href="#${anchorId}">${escapeHtml(name)}</a>`;
}

function renderIngredientItem(name, amount) {
  const total = formatAmount(amount);
  const anchorId = getRecipeAnchorId(name);

  if (anchorId) {
    return `
      <li>
        <a class="ingredient-button recipe-link" href="#${anchorId}">${escapeHtml(name)}</a>
        <strong>${total}</strong>
      </li>
    `;
  }

  return `
    <li>
      <span>${escapeHtml(name)}</span>
      <strong>${total}</strong>
    </li>
  `;
}

function resolveBaseBloodTotals(name, amount, totals = {}, trail = new Set()) {
  const recipe = getRecipe(name);

  if (recipe) {
    if (trail.has(name)) return totals;
    trail.add(name);
    recipe.forEach(([ingredient, ingredientAmount]) => {
      resolveBaseBloodTotals(ingredient, amount * ingredientAmount, totals, trail);
    });
    trail.delete(name);
    return totals;
  }

  if (baseBloodTypes.includes(name)) {
    totals[name] = (totals[name] || 0) + amount;
  }

  return totals;
}

function resolveBaseMaterialTotals(name, amount, totals = {}, trail = new Set()) {
  const recipe = getRecipe(name);

  if (recipe) {
    if (trail.has(name)) return totals;
    trail.add(name);
    recipe.forEach(([ingredient, ingredientAmount]) => {
      resolveBaseMaterialTotals(ingredient, amount * ingredientAmount, totals, trail);
    });
    trail.delete(name);
    return totals;
  }

  totals[name] = (totals[name] || 0) + amount;
  return totals;
}

function renderBloodSummary(quantity) {
  const bloodTotals = {};
  const materialTotals = {};

  farmacos.forEach((farmaco) => {
    const farmacoAmount = quantity * farmaco.amount;
    farmaco.items.forEach(([name, amount]) => {
      const totalAmount = farmacoAmount * amount;
      resolveBaseBloodTotals(name, totalAmount, bloodTotals);
      resolveBaseMaterialTotals(name, totalAmount, materialTotals);
    });
  });

  const bloodRows = baseBloodTypes
    .map(
      (name) => `
        <div class="blood-row">
          <span>${renderLinkedText(name)}</span>
          <strong>${formatAmount(bloodTotals[name] || 0)}</strong>
        </div>
      `
    )
    .join("");

  const materialRows = Object.entries(materialTotals)
    .filter(([name]) => !baseBloodTypes.includes(name))
    .sort((a, b) => b[1] - a[1])
    .map(
      ([name, amount]) => `
        <div class="blood-row">
          <span>${
            getRecipeAnchorId(name) ? `<a class="ingredient-button recipe-link" href="#${getRecipeAnchorId(name)}">${escapeHtml(name)}</a>` : escapeHtml(name)
          }</span>
          <strong>${formatAmount(amount)}</strong>
        </div>
      `
    )
    .join("");

  bloodSummary.innerHTML = `
    <h2>Totais</h2>
    <div class="summary-section">
      <h3>Sangues base</h3>
      <div class="blood-list blood-list-materials">${bloodRows}</div>
    </div>
    <div class="summary-section">
      <h3>Materiais totais</h3>
      <div class="blood-list blood-list-materials">${materialRows || '<div class="blood-empty">Nenhum material encontrado.</div>'}</div>
    </div>
  `;
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderRecipeLibrary() {
  const sections = [
    {
      id: "farmaco-harmonia",
      title: "Fármaco da Harmonia",
      kind: "Fármaco",
      subtitle: "Receita principal",
      ingredients: harmonyRecipe,
    },
    ...farmacos.map((farmaco) => ({
      id: `farmaco-${slugify(farmaco.key)}`,
      title: farmaco.title,
      kind: "Fármaco",
      subtitle: "Ingredientes para produzir 1 unidade",
      ingredients: farmaco.items,
    })),
    ...Object.keys(recipeLookup)
      .sort((a, b) => a.localeCompare(b, "pt-BR"))
      .map((name) => ({
        id: `recipe-${slugify(name)}`,
        title: name,
        kind: bloodRecipes[name] ? "Sangue" : oilRecipes[name] ? "Óleo" : reagentRecipes[name] ? "Reagente" : "Elixir",
        subtitle: "Ingredientes de produção",
        ingredients: recipeLookup[name],
      })),
  ]
    .map((entry) => {
      const ingredients = entry.ingredients
        .map(
          ([ingredient, amount]) => `
            <li>
              <span>${renderLinkedText(ingredient)}</span>
              <strong>${formatAmount(amount)}</strong>
            </li>
          `
        )
        .join("");

      return `
        <article class="library-card anchor-section" id="${entry.id}">
          <header class="library-head">
            <div>
              <span class="card-kicker">${entry.kind}</span>
              <h2>${escapeHtml(entry.title)}</h2>
            </div>
          </header>
          <div class="library-body">
            <h3>${escapeHtml(entry.subtitle)}</h3>
            <ul class="library-list">${ingredients}</ul>
          </div>
        </article>
      `;
    })
    .join("");

  recipeLibrary.innerHTML = `
    <div class="library-section-head">
      <span class="eyebrow">Base de receitas</span>
      <h2>Como fazer cada combinação</h2>
      <p>Clique no nome do item nos cards acima para vir direto para esta seção.</p>
    </div>
    <div class="library-grid">${sections}</div>
  `;
}

function renderBloodSubstitutions() {
  const sections = bloodSubstitutionGroups
    .map((group) => {
      const substituteItems = group.substitutes
        .map((name) => `<li><span>${escapeHtml(name)}</span><strong>compatível</strong></li>`)
        .join("");

      return `
        <article class="library-card anchor-section" id="${group.id}">
          <header class="library-head">
            <div>
              <span class="card-kicker">Sangue natural</span>
              <h2>${escapeHtml(group.reference)}</h2>
            </div>
          </header>
          <div class="library-body">
            <h3>${escapeHtml(group.title)}</h3>
            <ul class="library-list">
              <li><span>Sangue de referência</span><strong>${escapeHtml(group.reference)}</strong></li>
              ${substituteItems}
            </ul>
          </div>
        </article>
      `;
    })
    .join("");

  bloodSubstitutions.innerHTML = `
    <div class="library-section-head">
      <span class="eyebrow">Substituição de sangues naturais</span>
      <h2>Possible substitution / Alternative Ingredient</h2>
      <p>Os nomes dos sangues-base no card lateral levam para esta tabela.</p>
    </div>
    <div class="library-grid">${sections}</div>
  `;
}
function renderCards(quantity) {
  cards.innerHTML = farmacos
    .map((farmaco) => {
      const farmacoAmount = quantity * farmaco.amount;
      const ingredients = farmaco.items
        .map(([name, amount]) => {
          const total = farmacoAmount * amount;
          const recipe = getRecipe(name);

          if (recipe) {
            return `
              <li>
                <a class="ingredient-button recipe-link" href="#recipe-${slugify(name)}">${escapeHtml(name)}</a>
                <strong>${formatAmount(total)}</strong>
              </li>
            `;
          }

          return `
            <li>
              <span>${escapeHtml(name)}</span>
              <strong>${formatAmount(total)}</strong>
            </li>
          `;
        })
        .join("");

      return `
        <article class="farmaco-card anchor-section" id="farmaco-${slugify(farmaco.key)}">
          <header class="farmaco-head">
            <h3><a class="ingredient-button recipe-link" href="#farmaco-${slugify(farmaco.key)}">${escapeHtml(farmaco.title)}</a></h3>
            <div class="count-badge">${formatAmount(farmacoAmount)}</div>
          </header>
          <ul class="ingredients">${ingredients}</ul>
        </article>
      `;
    })
    .join("");
}

function render() {
  const quantity = getQuantity();
  renderCards(quantity);
  renderBloodSummary(quantity);
  renderRecipeLibrary();
  renderBloodSubstitutions();
}
quantityInput.addEventListener("input", render);

function highlightAnchorFromHash() {
  document.querySelectorAll(".anchor-section.is-target").forEach((el) => el.classList.remove("is-target"));
  const id = decodeURIComponent(window.location.hash.replace("#", ""));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.add("is-target");
  window.clearTimeout(target.__highlightTimer);
  target.__highlightTimer = window.setTimeout(() => {
    target.classList.remove("is-target");
  }, 2200);
}

window.addEventListener("hashchange", highlightAnchorFromHash);

render();
highlightAnchorFromHash();


