// Fonction pour afficher les compétences en fonction du semestre sélectionné
function afficherCompetences(semestre) {
    var menuCompetences = '';
    var competences = semestre === 'semestre3' ? ['3_1', '3_2', '3_3', '3_4', '3_5', '3_6'] : ['4_1', '4_2', '4_3', '4_4', '4_5', '4_6'];
    for (var i = 0; i < competences.length; i++) {
        menuCompetences += '<button onclick="afficherFormulaire(\'competence' + competences[i] + '\')">Compétence ' + competences[i] + '</button>';
    }
    document.getElementById('menuCompetences').innerHTML = menuCompetences;
    document.getElementById('formulaireNotes').innerHTML = ''; // Clear the previous form
}

// Fonction pour afficher le formulaire en fonction de la compétence sélectionnée
function afficherFormulaire(competence) {
    var formulaire = '';
    var competenceFunctionMap = {
        'competence4_1': creerFormulaireComp4_1,
        'competence4_2': creerFormulaireComp4_2,
        'competence4_3': creerFormulaireComp4_3,
        'competence4_4': creerFormulaireComp4_4,
        'competence4_5': creerFormulaireComp4_5,
        'competence4_6': creerFormulaireComp4_6
    };
    
    if (competenceFunctionMap[competence]) {
        formulaire = competenceFunctionMap[competence]();
    }

    formulaire += '<button onclick="calculerMoyenne()">Calculer la moyenne</button>'; // Add the validation button

    document.getElementById('formulaireNotes').innerHTML = formulaire;
}

// Fonction pour créer le formulaire pour la compétence 4.1
function creerFormulaireComp4_1() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLogiciel', 1.50);
    formulaire += creerChampNote('Qualité de développement', 'qualiteDev', 0.80);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projetPersoPro', 0.10);
    formulaire += creerChampNote('Complément web', 'complementWeb', 0.80);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMobile', 0.80);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComplexe', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

// Fonction pour créer le formulaire pour la compétence 4.2
function creerFormulaireComp4_2() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLogiciel', 1.50);
    formulaire += creerChampNote('Qualité de développement', 'qualiteDev', 0.80);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projetPersoPro', 0.10);
    formulaire += creerChampNote('Complément web', 'complementWeb', 0.80);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMobile', 0.80);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComplexe', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

// Fonction pour créer le formulaire pour la compétence 4.3
function creerFormulaireComp4_3() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLogiciel', 1.50);
    formulaire += creerChampNote('Qualité de développement', 'qualiteDev', 0.80);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projetPersoPro', 0.10);
    formulaire += creerChampNote('Complément web', 'complementWeb', 0.80);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMobile', 0.80);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComplexe', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

// Fonction pour créer le formulaire pour la compétence 4.4
function creerFormulaireComp4_4() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLogiciel', 1.50);
    formulaire += creerChampNote('Qualité de développement', 'qualiteDev', 0.80);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projetPersoPro', 0.10);
    formulaire += creerChampNote('Complément web', 'complementWeb', 0.80);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMobile', 0.80);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComplexe', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

// Fonction pour créer le formulaire pour la compétence 4.5
function creerFormulaireComp4_5() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLogiciel', 1.50);
    formulaire += creerChampNote('Qualité de développement', 'qualiteDev', 0.80);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projetPersoPro', 0.10);
    formulaire += creerChampNote('Complément web', 'complementWeb', 0.80);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMobile', 0.80);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComplexe', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

// Fonction pour créer le formulaire pour la compétence 4.6
function creerFormulaireComp4_6() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLogiciel', 1.50);
    formulaire += creerChampNote('Qualité de développement', 'qualiteDev', 0.80);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projetPersoPro', 0.10);
    formulaire += creerChampNote('Complément web', 'complementWeb', 0.80);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMobile', 0.80);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComplexe', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}
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