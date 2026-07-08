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
    ["Vestígios da Natureza", 3],
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
    ["Vestígios da Natureza", 3],
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
    ["Vestígios da Natureza", 2],
    ["Seiva de Pinheiro", 5],
  ],
  "Elixir da Morte": [
    ["Óleo de Tranquilidade", 1],
    ["Reagente Líquido Limpo", 6],
    ["Cogumelo Ancestral", 2],
    ["Vestígios da Natureza", 2],
    ["Seiva de Freixo", 7],
  ],
  "Elixir de Pilhagem": [
    ["Óleo de Coragem", 1],
    ["Reagente Líquido Limpo", 4],
    ["Cogumelo Corcunda", 3],
    ["Vestígios da Natureza", 2],
    ["Seiva de Bétula", 4],
  ],
  "Elixir do Ceifador": [
    ["Óleo de Coragem", 1],
    ["Reagente em Pó Puro", 4],
    ["Cogumelo Céu", 2],
    ["Vestígios da Natureza", 4],
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
    ["Vestígios da Natureza", 3],
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

const craftedIngredientRecipes = {
  ...bloodRecipes,
  ...oilRecipes,
};

const recipeLookup = {
  ...elixirRecipes,
  ...bloodRecipes,
  ...oilRecipes,
};

const baseBloodTypes = [
  "Sangue de Urso",
  "Sangue de Lagarto",
  "Sangue de Porco",
  "Sangue de Raposa",
  "Sangue de Lobo",
];

const substituteBloods = {
  "Sangue de Urso": ["Sangue de Troll", "Sangue de Ogro", "Sangue de Dinossauro", "Sangue de Leão", "Sangue de Iaque"],
  "Sangue de Lagarto": ["Sangue de Minhoca", "Sangue de Morcego", "Sangue de Pássaro Kuku", "Sangue de Cobra"],
  "Sangue de Porco": ["Sangue de Cervo", "Sangue de Ovelha", "Sangue de Boi", "Sangue de Waragon", "Sangue de Lhama", "Sangue de Cabra"],
  "Sangue de Raposa": ["Sangue de Guaxinim", "Sangue de Macaco", "Sangue de Doninha", "Sangue de Escorpião", "Sangue de Marmota"],
  "Sangue de Lobo": ["Sangue de Rinoceronte", "Sangue de Dragão Guepardo", "Sangue de Flamingo"],
};

const quantityInput = document.querySelector("#targetQuantity");
const cards = document.querySelector("#farmacoCards");
const bloodSummary = document.querySelector("#bloodSummary");
const recipePopover = document.querySelector("#recipePopover");
let selectedRecipe = null;
let activeAnchor = null;
let closeTimer = null;

recipePopover.addEventListener("pointerenter", cancelPopoverClose);
recipePopover.addEventListener("pointerleave", schedulePopoverClose);

function getQuantity() {
  return Math.max(0, Math.floor(Number(quantityInput.value) || 0));
}

function formatAmount(value) {
  return value.toLocaleString("pt-BR");
}

function isBloodItem(name) {
  return name.startsWith("Sangue de ") || name.startsWith("Sangue do ") || name.startsWith("Sangue da ");
}

function accumulateBloodTotals(name, amount, totals) {
  if (!isBloodItem(name)) return;

  const recipe = bloodRecipes[name];
  if (!recipe || baseBloodTypes.includes(name)) {
    totals[name] = (totals[name] || 0) + amount;
    return;
  }

  recipe.forEach(([ingredient, ingredientAmount]) => {
    accumulateBloodTotals(ingredient, amount * ingredientAmount, totals);
  });
}

function accumulateBaseBloodTotals(name, amount, totals) {
  const recipe = recipeLookup[name];

  if (recipe) {
    recipe.forEach(([ingredient, ingredientAmount]) => {
      accumulateBaseBloodTotals(ingredient, amount * ingredientAmount, totals);
    });
    return;
  }

  if (isBloodItem(name)) {
    accumulateBloodTotals(name, amount, totals);
  }
}

function renderBloodSummary(quantity) {
  const totals = {};

  farmacos.forEach((farmaco) => {
    const farmacoAmount = quantity * farmaco.amount;
    farmaco.items.forEach(([name, amount]) => {
      accumulateBaseBloodTotals(name, farmacoAmount * amount, totals);
    });
  });

  const rows = baseBloodTypes
    .map(
      (name) => `
        <div class="blood-row">
          <span>${name}</span>
          <strong>${formatAmount(totals[name] || 0)}</strong>
        </div>
      `
    )
    .join("");

  bloodSummary.innerHTML = `
    <h2>Sangues totais</h2>
    <p>Mostra apenas os sangues coletados usados nas receitas.</p>
    <div class="blood-list">
      ${rows}
    </div>
  `;
}

function buildBloodPopover(name, total) {
  if (craftedIngredientRecipes[name]) {
    const baseTotals = {};
    if (bloodRecipes[name]) {
      accumulateBloodTotals(name, total, baseTotals);
    }

    const materials = craftedIngredientRecipes[name]
      .map(([ingredient, amount]) => `
        <li>
          <span>${ingredient}</span>
          <strong>${formatAmount(amount * total)}</strong>
        </li>
      `)
      .join("");
    const baseMaterials = Object.entries(baseTotals)
      .map(
        ([ingredient, amount]) => `
          <li>
            <span>${ingredient}</span>
            <strong>${formatAmount(amount)}</strong>
          </li>
        `
      )
      .join("");

    return `
      <div class="material-card green" tabindex="0">
        <div class="material-badge green">${bloodRecipes[name] ? "Sangue feito" : "Ingrediente feito"}</div>
        <div class="material-name">${name}</div>
        <div class="material-count">${formatAmount(total)}</div>
        <div class="material-tip">
          <strong>Como fazer</strong>
          <small>Total para ${formatAmount(total)} unidade(s).</small>
          <ul>${materials}</ul>
          ${
            bloodRecipes[name]
              ? `<strong style="margin-top:10px; display:block;">Base coletada</strong>
          <ul>${baseMaterials || '<li><span>Sem sangue base</span><strong>0</strong></li>'}</ul>`
              : ""
          }
        </div>
      </div>
    `;
  }

  if (substituteBloods[name]) {
    const substitutes = substituteBloods[name]
      .map((item) => `<span class="sub-pill">${item}</span>`)
      .join("");

    return `
      <div class="material-card red" tabindex="0">
        <div class="material-badge red">Sangue substituível</div>
        <div class="material-name">${name}</div>
        <div class="material-count">${formatAmount(total)}</div>
        <div class="material-tip">
          <strong>Substitutos</strong>
          <small>Você pode usar outros sangues de mesmo valor.</small>
          <div class="substitutes">${substitutes}</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="material-card" tabindex="0">
      <div class="material-name">${name}</div>
      <div class="material-count">${formatAmount(total)}</div>
    </div>
  `;
}

function renderCards(quantity) {
  cards.innerHTML = farmacos
    .map((farmaco) => {
      const farmacoAmount = quantity * farmaco.amount;
      const ingredients = farmaco.items
        .map(([name, amount]) => `
          <li>
            ${
              name === "Catalisador Mágico"
                ? `<span>${name}</span>`
                : `<button class="ingredient-button" type="button" data-elixir="${name}" data-total="${farmacoAmount * amount}">${name}</button>`
            }
            <strong>${formatAmount(farmacoAmount * amount)}</strong>
          </li>
        `)
        .join("");

      return `
        <article class="farmaco-card">
          <header class="farmaco-head">
            <h3>${farmaco.title}</h3>
            <div class="count-badge">${formatAmount(farmacoAmount)}</div>
          </header>
          <ul class="ingredients">${ingredients}</ul>
        </article>
      `;
    })
    .join("");

  cards.querySelectorAll("[data-elixir]").forEach((button) => {
    button.addEventListener("pointerenter", () => openRecipe(button));
    button.addEventListener("focus", () => openRecipe(button));
    button.addEventListener("pointerleave", schedulePopoverClose);
    button.addEventListener("blur", schedulePopoverClose);
  });
}

function openRecipe(button) {
  cancelPopoverClose();
  selectedRecipe = {
    name: button.dataset.elixir,
    quantity: Number(button.dataset.total) || 0,
  };
  activeAnchor = button;
  renderRecipePopover();
}

function renderRecipePopover() {
  if (!selectedRecipe) {
    recipePopover.hidden = true;
    return;
  }

  const recipe = elixirRecipes[selectedRecipe.name];

  if (!recipe) {
    recipePopover.innerHTML = `
      <button class="popover-close" type="button" aria-label="Fechar">×</button>
      <div>
        <span class="card-kicker">Receita do elixir</span>
        <h2>${selectedRecipe.name}</h2>
        <p>A receita deste elixir ainda não está cadastrada no arquivo da pasta txt.</p>
      </div>
      <div class="popover-total">${formatAmount(selectedRecipe.quantity)}</div>
    `;
    recipePopover.hidden = false;
    requestAnimationFrame(() => positionPopover(activeAnchor));
    bindPopoverEvents();
    return;
  }

  const materials = recipe
    .map(([name, amount]) => buildBloodPopover(name, amount * selectedRecipe.quantity))
    .join("");

  recipePopover.innerHTML = `
    <button class="popover-close" type="button" aria-label="Fechar">×</button>
    <div class="recipe-detail-head">
      <div>
        <span class="card-kicker">Receita do elixir</span>
        <h2>${selectedRecipe.name}</h2>
        <p>Materiais para fazer ${formatAmount(selectedRecipe.quantity)} unidade(s).</p>
      </div>
      <div class="popover-total">${formatAmount(selectedRecipe.quantity)}</div>
    </div>
    <div class="materials-grid">${materials}</div>
  `;
  recipePopover.hidden = false;
  requestAnimationFrame(() => positionPopover(activeAnchor));
  bindPopoverEvents();
}

function bindPopoverEvents() {
  const closeButton = recipePopover.querySelector(".popover-close");
  if (closeButton) {
    closeButton.addEventListener("click", closePopover);
  }
}

function closePopover() {
  cancelPopoverClose();
  selectedRecipe = null;
  activeAnchor = null;
  recipePopover.hidden = true;
}

function schedulePopoverClose() {
  cancelPopoverClose();
  closeTimer = window.setTimeout(() => {
    closePopover();
  }, 120);
}

function cancelPopoverClose() {
  if (closeTimer) {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function positionPopover(anchor) {
  if (!anchor) return;

  const rect = anchor.getBoundingClientRect();
  const popoverWidth = Math.min(recipePopover.offsetWidth || 420, window.innerWidth - 24);
  const gap = 14;
  const popoverHeight = Math.min(recipePopover.scrollHeight || 0, window.innerHeight * 0.78);
  const spaceBelow = window.innerHeight - rect.bottom - gap;
  const spaceAbove = rect.top - gap;
  const placeAbove = spaceBelow < popoverHeight && spaceAbove > spaceBelow;
  const left = Math.min(
    Math.max(12, rect.right + gap),
    window.innerWidth - popoverWidth - 12
  );
  const viewportTop = placeAbove
    ? Math.max(12, rect.top - popoverHeight - gap)
    : Math.min(Math.max(12, rect.bottom + gap), window.innerHeight - popoverHeight - 12);

  recipePopover.style.width = `fit-content`;
  recipePopover.style.maxWidth = `${Math.min(520, window.innerWidth - 24)}px`;
  recipePopover.style.left = `${left + window.scrollX}px`;
  recipePopover.style.top = `${viewportTop + window.scrollY}px`;
  recipePopover.classList.toggle("popover-above", placeAbove);
}

function syncPopoverPosition() {
  if (!selectedRecipe || !activeAnchor || recipePopover.hidden) return;
  positionPopover(activeAnchor);
}

function render() {
  const quantity = getQuantity();

  renderCards(quantity);
  renderBloodSummary(quantity);
  if (selectedRecipe) {
    const newQuantity = farmacos
      .flatMap((farmaco) => {
        const farmacoAmount = quantity * farmaco.amount;
        return farmaco.items.map(([name, amount]) => [name, farmacoAmount * amount]);
      })
      .find(([name]) => name === selectedRecipe.name)?.[1];

    selectedRecipe.quantity = newQuantity ?? selectedRecipe.quantity;
    activeAnchor = cards.querySelector(`[data-elixir="${selectedRecipe.name}"]`);
    renderRecipePopover();
  }
}

quantityInput.addEventListener("input", render);
window.addEventListener("scroll", syncPopoverPosition, { passive: true });
window.addEventListener("resize", syncPopoverPosition);
document.addEventListener("click", (event) => {
  if (recipePopover.hidden) return;
  const clickedInsidePopover = recipePopover.contains(event.target);
  const clickedAnchor = activeAnchor && activeAnchor.contains(event.target);
  if (!clickedInsidePopover && !clickedAnchor) closePopover();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePopover();
});

render();
