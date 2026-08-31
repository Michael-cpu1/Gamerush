const grid = document.getElementById("gameGrid");
const search = document.getElementById("search");
const modal = document.getElementById("playerModal");
const frame = document.getElementById("gameFrame");
const playerTitle = document.getElementById("playerTitle");
const playerCategory = document.getElementById("playerCategory");
const closeBtn = document.getElementById("closeBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const emptyMessage = document.getElementById("emptyMessage");

function renderGames(filter = "") {
  const term = filter.trim().toLowerCase();
  const filtered = GAMES.filter(game =>
    game.name.toLowerCase().includes(term) ||
    game.category.toLowerCase().includes(term)
  );

  grid.innerHTML = "";

  filtered.forEach(game => {
    const card = document.createElement("article");
    card.className = "game-card";
    card.innerHTML = `
      <div class="game-cover">${game.icon || "🎮"}</div>
      <div class="game-info">
        <h4>${game.name}</h4>
        <p>${game.category}</p>
        <span class="play-pill">▶ Play now</span>
      </div>
    `;
    card.addEventListener("click", () => openGame(game));
    grid.appendChild(card);
  });

  emptyMessage.classList.toggle("hidden", filtered.length !== 0);
}

function openGame(game) {
  playerTitle.textContent = game.name;
  playerCategory.textContent = game.category;
  frame.src = game.path;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeGame() {
  frame.src = "about:blank";
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

search.addEventListener("input", e => renderGames(e.target.value));
closeBtn.addEventListener("click", closeGame);

modal.addEventListener("click", e => {
  if (e.target === modal) closeGame();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeGame();
});

fullscreenBtn.addEventListener("click", async () => {
  try {
    if (frame.requestFullscreen) await frame.requestFullscreen();
  } catch (err) {
    console.error(err);
  }
});

renderGames();
