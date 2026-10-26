// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.

const input_nom = document.querySelector("#nom");
const input_prix = document.querySelector("#prix");
const submit = document.querySelector("#submit");
const pVide = document.querySelector("#etat-vide");


function AjouterProduit() {
  if (input_nom.value.trim() === "" || input_prix.value.trim() === "") alert("Remplir tous les champs ...");
  else {
    const objet = {
      id: prochainId,
      nom: input_nom.value,
      prix: input_prix.value
    }
    produits.push(objet);
    prochainId++;
    input_nom.value = "";
    input_prix.value = "";
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  AjouterProduit();
  AfficherProduits();
})

function AfficherProduits() {
  const ul = document.querySelector("#liste-produits");
  ul.innerHTML = ""; 
  if (produits.length === 0) pVide.classList.remove("hidden");
  else pVide.classList.add("hidden");

  produits.forEach((produit) => {
    const li = document.createElement("li");
    li.classList.add("produit");

    const div = document.createElement("div");

    const strong = document.createElement("strong");
    strong.classList.add("nom-produit");
    strong.textContent = produit.nom;

    const span = document.createElement("span");
    span.classList.add("prix-produit");
    span.textContent = produit.prix;

    div.append(strong, span);

    const supprimer = document.createElement("button");
    supprimer.classList.add("supprimer");
    supprimer.textContent = "Retirer";
    supprimer.dataset.id = produit.id;
    supprimer.addEventListener("click", () => {
      if (confirm("Sûr de supprimer ?")) {
        SupprimerProduit(supprimer.dataset.id);
      }
    });

    li.append(div, supprimer);
    ul.append(li);
  });

  TotalPrix();
  Conteur();
}
AfficherProduits();

function Conteur() {
  document.querySelector("#compteur").textContent = produits.length;
}
Conteur();

function TotalPrix() {
  let som = 0;
  produits.forEach((produit) => {
    som += Number(produit.prix);
  })
  document.querySelector("#total").textContent = som;
}
TotalPrix();

function SupprimerProduit(id) {
  produits = produits.filter((produit) => produit.id != id);
  AfficherProduits();
}
