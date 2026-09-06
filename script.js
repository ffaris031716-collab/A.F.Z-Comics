// ====== COMICS DATA ======
const comics = [
  {
    title: "The Legion of Muslims",
    description: "The first chapter of our epic saga.",
    cover: "assets/the-legion-of-muslims.jpg",
    pdf: ""
  }
];

// ====== RENDER COMICS ======
const grid = document.getElementById("comicGrid");

function render(list) {
  if (!grid) {
    console.error("comicGrid not found!");
    return;
  }
  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML = '<p style="color:#888">No comics found.</p>';
    return;
  }
  list.forEach(c => {
    const card = document.createElement("article");
    card.className = "comic-card";
    card.innerHTML = `
      <div class="cover">
        ${c.cover ? `<img src="${c.cover}" alt="${c.title} cover">` : `<div class="placeholder">AFZ<br>COMICS</div>`}
      </div>
      <div class="comic-info">
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        <div class="comic-actions">
          ${c.pdf ? `<a class="read" href="${c.pdf}" target="_blank">READ PDF</a><a href="${c.pdf}" download>DOWNLOAD</a>` : `<a class="read" href="#about">ADD PDF</a>`}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ====== SEARCH (DISABLED - NO SEARCH BAR IN HTML) ======
// const search = document.getElementById("search");
// if (search) {
//   search.addEventListener("input", () => {
//     const q = search.value.toLowerCase();
//     render(comics.filter(c => (c.title + " " + c.description).toLowerCase().includes(q)));
//   });
// }

render(comics);

// ====== CHARACTERS DATA ======
const characters = [
  {
    name: "Sherdil",
    role: "Leader of Legion",
    description: " Sherdil from Pakistan. Blessed with superhuman strength and armed with an indestructible metal sword and shield, he was the leader of this team. Years ago, he lost his family to a demon attack. He swore never to let it happen again..",
    image: "assets/hero1.jpg"
  },
  {
    name: "Amina Noor",
    role: "The Light Weaver",
    description: "A mystic warrior who wields the power of light.",
    image: "assets/amina.jpg"
  },
  {
    name: "Malik Al-Shadow",
    role: "The Dark Prophet",
    description: "A fallen hero who now seeks to destroy the Legion.",
    image: "assets/malik.jpg"
  }
];

// ====== RENDER CHARACTERS ======
function renderCharacters(list) {
  const grid = document.getElementById("characterGrid");
  if (!grid) {
    console.error("characterGrid not found!");
    return;
  }

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = '<p style="color:#888; grid-column: 1/-1; text-align: center;">No characters added yet.</p>';
    return;
  }

  list.forEach(char => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
      <div class="char-image">
        ${char.image ? `<img src="${char.image}" alt="${char.name}">` : `<div class="placeholder-char">${char.name.charAt(0)}</div>`}
      </div>
      <div class="char-info">
        <h3>${char.name}</h3>
        <span class="char-role">${char.role || "Character"}</span>
        <p>${char.description || "Coming soon..."}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ====== RUN WHEN PAGE LOADS ======
document.addEventListener("DOMContentLoaded", function() {
  renderCharacters(characters);
});;
