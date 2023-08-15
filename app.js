const apiRick = async (pagina) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  const api = await fetch(url);
  const data = await api.json();
  console.log(data);
  divRes = document.querySelector("#resultado");
  divRes.innerHTML = "";
  data.results.map((item) => {
    divItem = document.createElement("div");
    divItem.innerHTML = ` <div class="card" style="width: 16rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h4 class="card-title">${item.name}</h4>
          <p class="card-text"><b>Estado:</b> ${item.status}</p>
          <p class="card-text"><b>Especie:</b> ${item.species}</p>
          <p class="card-text"><b>Genero:</b> ${item.gender}</p>
        </div>
      </div>`;
    divRes.appendChild(divItem);
  });
};

apiRick(1);




// EPISODIOS
const apiMorty = async (pagina) => {
  let url = "https://rickandmortyapi.com/api/episode/?page=" + pagina;
  const api = await fetch(url);
  const data = await api.json();
  console.log(data);
  divRes = document.querySelector("#episodios");
  divRes.innerHTML = "";
  data.results.map((item) => {
    divItem = document.createElement("div");
    divItem.innerHTML = ` <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title">${item.name}</h4>
            <p class="card-text"><b>Id:</b> ${item.id}</p>
            <p class="card-text"><b>Fecha:</b> ${item.air_date}</p>
            <p class="card-text"><b>Episodio:</b> ${item.episode}</p>
            </div>
        </div>`;
    divRes.appendChild(divItem);
  });
};

apiMorty(1);

// LOCACIONES

const apiMortyRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/location/?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#locaciones");
    divRes.innerHTML = "";
    data.results.map((item) => {
      divItem = document.createElement("div");
      divItem.innerHTML = ` <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">${item.name}</h4>
              <p class="card-text"><b>Tipo:</b> ${item.type}</p>
              <p class="card-text"><b>Dimension:</b> ${item.dimension}</p>
              
              </div>
          </div>`;
      divRes.appendChild(divItem);
    });
  };
  
  apiMortyRick(1);
