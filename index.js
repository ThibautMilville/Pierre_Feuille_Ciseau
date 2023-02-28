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
}))