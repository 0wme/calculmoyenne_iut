// Fonction pour afficher le formulaire en fonction de la compétence sélectionnée
function afficherFormulaire(competence) {
    var formulaire = '';
    switch (competence) {
        case 'competence3_1':
            formulaire = creerFormulaireComp3_1();
            break;
        case 'competence3_2':
            formulaire = creerFormulaireComp3_2();
            break;
        case 'competence3_3':
            formulaire = creerFormulaireComp3_3();
            break;
        case 'competence3_4':
            formulaire = creerFormulaireComp3_4();
            break;
        case 'competence3_5':
            formulaire = creerFormulaireComp3_5();
            break;
        case 'competence3_6':
            formulaire = creerFormulaireComp3_6();
            break;
        default:
            formulaire = '';
    }
    document.getElementById('formulaireNotes').innerHTML = formulaire;
}

// Fonction pour créer le formulaire de la Compétence 3.1
function creerFormulaireComp3_1() {
    return '<form id="noteForm">' +
           // Exemple pour Compétence 3.1
           creerChampNote('Développement Web', 'devWeb', 1.5) +
           creerChampNote('Développement efficace', 'devEfficace', 1.0) +
           creerChampNote('Analyse', 'analyse', 1.2) +
           creerChampNote('Qualité de développement', 'qualiteDev', 1.5) +
           creerChampNote('Droit des contrats et du numérique', 'droitContrats', 0.7) +
           creerChampNote('Projet personnel et professionnel', 'projetPerso', 0.1) +
           creerChampNote('Développement d\'une application', 'devApp', 4.0) +
           '<button type="button" onclick="calculerMoyenne()">Calculer la Moyenne</button>' +
           '</form>';
}

// Fonctions similaires pour les compétences 3.2 à 3.6
// Remplacer les valeurs des champs et coefficients selon la spécification

function creerChampNote(nomMatiere, id, coef) {
    return '<div><label for="' + id + '">' + nomMatiere + ':</label>' +
           '<input type="number" id="' + id + '" name="' + id + '">' +
           '<label for="coef' + id + '">Coefficient:</label>' +
           '<input type="number" value="' + coef + '" id="coef' + id + '" name="coef' + id + '" readonly></div>';
}

// Fonction pour calculer la moyenne
function calculerMoyenne() {
    var form = document.getElementById('noteForm');
    var totalPoints = 0;
    var totalCoefs = 0;

    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        if (element.name && element.name.startsWith('coef')) {
            var noteId = element.name.substring(4);
            var noteElement = document.getElementById(noteId);
            if (noteElement) {
                var note = parseFloat(noteElement.value);
                var coef = parseFloat(element.value);
                totalPoints += note * coef;
                totalCoefs += coef;
            }
        }
    }
    var moyenne = totalPoints / totalCoefs;
    document.getElementById('resultat').innerHTML = 'Votre moyenne générale est de ' + moyenne.toFixed(2);
}
   
