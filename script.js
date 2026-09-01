const comics = [
  {
    title: "Your First Comic",
    description: "Add your comic cover and PDF here.",
    cover: "",
    pdf: ""
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
