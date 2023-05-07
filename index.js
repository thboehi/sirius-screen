const drinksContainer = document.getElementById("drinks-container");
const foodsContainer = document.getElementById("food-container");
let consommables = [];
let totalConsommables = 0;

function getConsommables() {
  return fetch("./assets/consommable.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données JSON");
      }
      return response.json();
    })
    .then(data => {
      consommables = data;
      totalConsommables = data.length;
    })
    .catch(error => {
      console.error(error);
    });
}

function addDrinksToPage() {
  for (let i = 0; i < consommables.length; i++) {
    if (consommables[i].type === "drink"){
        const drinkContainer = document.createElement("div");
        drinkContainer.classList.add("type-container");

        const image = document.createElement("img");
        image.classList.add("img");
        image.src = "./img/" + consommables[i].img;
        image.alt = consommables[i].name;

        const title = document.createElement("h3");
        title.textContent = consommables[i].name;
        title.classList.add("title");

        const price = document.createElement("p");
        price.textContent = consommables[i].price;
        price.classList.add("price");

        drinkContainer.appendChild(image);
        drinkContainer.appendChild(title);
        drinkContainer.appendChild(price);
        drinksContainer.appendChild(drinkContainer);
    } else {
        break;
    }
  }
}

function addFoodToPage() {
    for (let i = 0; i < consommables.length; i++) {
      if (consommables[i].type === "food"){
          const foodContainer = document.createElement("div");
          foodContainer.classList.add("type-container");
  
          const image = document.createElement("img");
          image.classList.add("img");
          image.src = "./img/" + consommables[i].img;
          image.alt = consommables[i].name;
  
          const title = document.createElement("h3");
          title.textContent = consommables[i].name;
          title.classList.add("title");
  
          const price = document.createElement("p");
          price.textContent = consommables[i].price;
          price.classList.add("price");
  
          foodContainer.appendChild(image);
          foodContainer.appendChild(title);
          foodContainer.appendChild(price);
          foodsContainer.appendChild(foodContainer);
      } else {
      }
    }
  }

getConsommables().then(() => {
    addDrinksToPage();
    addFoodToPage();
  
});
