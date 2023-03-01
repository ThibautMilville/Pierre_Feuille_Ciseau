const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur

// Évènement clic sur les boutons
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    // Récupération de l'ID du bouton cliqué
    choixUtilisateur = e.target.id;
    // On ajoute l'image qui correspond
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`
    generer_choix_ordinateur()
}))

// Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) +1 // Générer des nombres compris entre 1 et 3
    if(random === 1){
        choixOrdinateur = "pierre"
    }
    if(random === 2){
        choixOrdinateur = "feuille"
    }
    if(random === 3){
        choixOrdinateur = "ciseaux"
    }
    // On ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`
}