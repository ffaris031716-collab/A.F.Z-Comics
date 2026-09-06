const comics = [
  {
    title: "The Legion of Muslims",
    description: "The first chapter of our epic saga.",
    cover: "assets/the-legion-of-muslims.jpg",
    pdf: "assets/your-comic.pdf"   //
  }
];
  }
];

const grid = document.getElementById("comicGrid");
const search = document.getElementById("search");

function render(list){
  grid.innerHTML = "";
  if(!list.length){
    grid.innerHTML = '<p style="color:#888">No comics found.</p>';
    return;
  }
  list.forEach(c=>{
    const card=document.createElement("article");
    card.className="comic-card";
    card.innerHTML=`
      <div class="cover">
        ${c.cover ? `<img src="${c.cover}" alt="${c.title} cover">` : `<div class="placeholder">AFZ<br>COMICS</div>`}
      </div>
      <div class="comic-info">
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        <div class="comic-actions">
          ${c.pdf ? `<a class="read" href="${c.pdf}" target="_blank">READ PDF</a><a href="${c.pdf}" download>DOWNLOAD</a>` : `<a class="read" href="#about">ADD PDF</a>`}
        </div>
      </div>`;
    grid.appendChild(card);
  });
}
search.addEventListener("input",()=>{
  const q=search.value.toLowerCase();
  render(comics.filter(c=>(c.title+" "+c.description).toLowerCase().includes(q)));
});
render(comics);
// ====== CHARACTERS DATA ======
const characters = [
  {
    name: "Hero Name",
    role: "The Protector",
    description: "A brave hero with incredible powers who stands against the forces of darkness.",
    image: "assets/hero1.jpg"  // Add your image filename here
  },
  {
    name: "Villain Name",
    role: "The Shadow Lord",
    description: "A dark force seeking to plunge the world into eternal darkness.",
    image: "assets/villain1.jpg"
  },
  {
    name: "Ally Name",
    role: "The Wise Mentor",
    description: "An ancient warrior who guides the Legion with wisdom and experience.",
    image: "assets/ally1.jpg"
  }
  // Add more characters as needed
];

// ====== RENDER CHARACTERS ======
function renderCharacters(list) {
  const grid = document.getElementById("characterGrid");
  if (!grid) return;
  
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

// Render characters when page loads
document.addEventListener("DOMContentLoaded", function() {
  renderCharacters(characters);
});
