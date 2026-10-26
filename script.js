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

function AjouterProduit(){
  if(input_nom.value.trim() === "" || input_nom.value.trim() === "") alert("Remplir tous les champs ...");
  else{
    const objet = {
      id: prochainId,
      nom: input_nom.value,
      prix: input_prix.value
    }
    produits.push(objet);
    prochainId ++;
  }
}

submit.addEventListener("click" , (e) => {
  e.preventDefault();
  AjouterProduit();
})

function AfficherProduits(){
  
}
