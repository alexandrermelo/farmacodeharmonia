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

// Part 2 - Estado e renderização
const quantityInput = document.querySelector("#targetQuantity");
const cards = document.querySelector("#farmacoCards");
const bloodSummary = document.querySelector("#bloodSummary");
const templatePopover = document.querySelector("#recipePopover");

const openPopovers = [];

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

function renderIngredientItem(name, amount) {
  const total = formatAmount(amount);
  const recipe = getRecipe(name);

  if (recipe) {
    return `
      <li>
        <button
          type="button"
          class="ingredient-button recipe-link"
          data-recipe-name="${escapeHtml(name)}"
          data-recipe-total="${amount}"
        >${escapeHtml(name)}</button>
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
          <span>${escapeHtml(name)}</span>
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
          <span>${escapeHtml(name)}</span>
          <strong>${formatAmount(amount)}</strong>
        </div>
      `
    )
    .join("");

  bloodSummary.innerHTML = `
    <h2>Totais</h2>
    <div class="summary-section">
      <h3>Sangues base</h3>
      <div class="blood-list">${bloodRows}</div>
    </div>
    <div class="summary-section">
      <h3>Materiais totais</h3>
      <div class="blood-list">${materialRows || '<div class="blood-empty">Nenhum material encontrado.</div>'}</div>
    </div>
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
                <button
                  type="button"
                  class="ingredient-button"
                  data-elixir="${escapeHtml(name)}"
                  data-total="${total}"
                >${escapeHtml(name)}</button>
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
        <article class="farmaco-card">
          <header class="farmaco-head">
            <h3>${escapeHtml(farmaco.title)}</h3>
            <div class="count-badge">${formatAmount(farmacoAmount)}</div>
          </header>
          <ul class="ingredients">${ingredients}</ul>
        </article>
      `;
    })
    .join("");
}

// Part 3 - Pop-ups e eventos
function createPopoverInstance() {
  const popover = document.createElement("aside");
  popover.className = "recipe-popover recipe-popover-instance";
  popover.hidden = false;
  document.body.appendChild(popover);
  openPopovers.push(popover);
  return popover;
}

function renderPopoverContent(name, quantity) {
  const recipe = getRecipe(name);

  if (!recipe) {
    return `
      <button class="popover-close" type="button" aria-label="Fechar">&times;</button>
      <div>
        <span class="card-kicker">Receita</span>
        <h2>${escapeHtml(name)}</h2>
        <p>A receita deste item ainda não está cadastrada.</p>
      </div>
      <div class="popover-total">${formatAmount(quantity)}</div>
    `;
  }

  const ingredients = recipe
    .map(([ingredient, amount]) => renderIngredientItem(ingredient, amount * quantity))
    .join("");

  const baseBloodTotals = {};
  resolveBaseBloodTotals(name, quantity, baseBloodTotals);
  const baseBloodRows = Object.entries(baseBloodTotals)
    .map(
      ([blood, amount]) => `
        <li>
          <span>${escapeHtml(blood)}</span>
          <strong>${formatAmount(amount)}</strong>
        </li>
      `
    )
    .join("");

  let badge = "Receita";
  if (bloodRecipes[name]) badge = "Sangue feito";
  else if (oilRecipes[name]) badge = "Óleo feito";
  else if (reagentRecipes[name]) badge = "Reagente feito";

  return `
    <button class="popover-close" type="button" aria-label="Fechar">&times;</button>
    <div class="recipe-detail-head">
      <div>
        <span class="card-kicker">Receita do item</span>
        <h2>${escapeHtml(name)}</h2>
        <p>Materiais para fazer ${formatAmount(quantity)} unidade(s).</p>
      </div>
      <div class="popover-total">${formatAmount(quantity)}</div>
    </div>
    <div class="materials-grid">
      <div class="material-card green">
        <div class="material-badge green">${badge}</div>
        <div class="material-name">${escapeHtml(name)}</div>
        <div class="material-tip" style="max-height:none; opacity:1; visibility:visible; transform:none; padding:14px;">
          <strong>Ingredientes</strong>
          <ul>${ingredients}</ul>
          ${
            baseBloodRows
              ? `<strong style="margin-top:10px; display:block;">Base coletada</strong><ul>${baseBloodRows}</ul>`
              : ""
          }
        </div>
      </div>
    </div>
  `;
}

function positionPopover(popover, anchor) {
  if (!popover || !anchor) return;

  const rect = anchor.getBoundingClientRect();
  const gap = 14;
  const popoverWidth = Math.min(popover.offsetWidth || 420, window.innerWidth - 24);
  const popoverHeight = Math.min(popover.scrollHeight || 0, window.innerHeight * 0.78);
  const spaceBelow = window.innerHeight - rect.bottom - gap;
  const spaceAbove = rect.top - gap;
  const placeAbove = spaceBelow < popoverHeight && spaceAbove > spaceBelow;
  const left = Math.min(Math.max(12, rect.right + gap), window.innerWidth - popoverWidth - 12);
  const top = placeAbove
    ? Math.max(12, rect.top - popoverHeight - gap)
    : Math.min(Math.max(12, rect.bottom + gap), window.innerHeight - popoverHeight - 12);

  popover.style.width = "fit-content";
  popover.style.maxWidth = `${Math.min(520, window.innerWidth - 24)}px`;
  popover.style.left = `${left + window.scrollX}px`;
  popover.style.top = `${top + window.scrollY}px`;
  popover.classList.toggle("popover-above", placeAbove);
}

function openRecipe(name, quantity, anchor, replace = false) {
  if (replace) closeAllPopovers();

  const popover = createPopoverInstance();
  popover.dataset.recipeName = name;
  popover.dataset.recipeTotal = String(quantity);
  popover.__anchor = anchor;
  popover.innerHTML = renderPopoverContent(name, quantity);

  const closeButton = popover.querySelector(".popover-close");
  if (closeButton) {
    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closePopoverFrom(popover);
    });
  }

  requestAnimationFrame(() => positionPopover(popover, anchor));
}

function closePopoverFrom(popover) {
  if (!popover) return;
  const index = openPopovers.indexOf(popover);
  if (index === -1) return;

  const removed = openPopovers.splice(index);
  removed.forEach((item) => item.remove());
}

function closeAllPopovers() {
  while (openPopovers.length) {
    openPopovers.pop().remove();
  }
}

function refreshOpenPopovers() {
  openPopovers.forEach((popover) => {
    if (popover.__anchor && document.body.contains(popover.__anchor)) {
      positionPopover(popover, popover.__anchor);
    }
  });
}

function render() {
  const quantity = getQuantity();
  renderCards(quantity);
  renderBloodSummary(quantity);
  closeAllPopovers();
}
quantityInput.addEventListener("input", render);
window.addEventListener("scroll", refreshOpenPopovers, { passive: true });
window.addEventListener("resize", refreshOpenPopovers);

document.addEventListener("click", (event) => {
  const closeButton = event.target.closest(".popover-close");
  if (closeButton) {
    const popover = closeButton.closest(".recipe-popover");
    if (popover) closePopoverFrom(popover);
    event.preventDefault();
    return;
  }

  const nestedTrigger = event.target.closest("[data-recipe-name]");
  if (nestedTrigger) {
    event.preventDefault();
    event.stopPropagation();
    openRecipe(
      nestedTrigger.dataset.recipeName,
      Number(nestedTrigger.dataset.recipeTotal) || 0,
      nestedTrigger,
      false
    );
    return;
  }

  const mainTrigger = event.target.closest("[data-elixir]");
  if (mainTrigger) {
    event.preventDefault();
    openRecipe(
      mainTrigger.dataset.elixir,
      Number(mainTrigger.dataset.total) || 0,
      mainTrigger,
      true
    );
    return;
  }

  if (!event.target.closest(".recipe-popover")) {
    closeAllPopovers();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllPopovers();
});

render();


