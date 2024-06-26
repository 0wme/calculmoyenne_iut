AOS.init();


// Fonction pour afficher les compétences en fonction du semestre sélectionné
function afficherCompetences(semestre) {
    var menuCompetences = '';
    var competences =   semestre === 'semestre1' ? ['1_1', '1_2', '1_3', '1_4', '1_5', '1_6'] :
                        semestre === 'semestre2' ? ['2_1', '2_2', '2_3', '2_4', '2_5', '2_6'] :
                        semestre === 'semestre3' ? ['3_1', '3_2', '3_3', '3_4', '3_5', '3_6'] : 
                        semestre === 'semestre4' ? ['4_1', '4_2', '4_3', '4_4', '4_5', '4_6'] : [];
    for (var i = 0; i < competences.length; i++) {
        menuCompetences += '<button onclick="afficherFormulaire(\'competence' + competences[i] + '\')">Compétence ' + competences[i] + '</button>';
    }
    document.getElementById('menuCompetences').innerHTML = menuCompetences;
    document.getElementById('formulaireNotes').innerHTML = '';
}

// Fonction pour afficher le formulaire en fonction de la compétence sélectionnée
function afficherFormulaire(competence) {
    var competenceTitleMap = {
        'competence1_1': 'UE 1.1 Réaliser un développement d\'application',
        'competence1_2': 'UE 1.2 Optimiser des applications',
        'competence1_3': 'UE 1.3 Administrer des systèmes informatiques communicants complexes',
        'competence1_4': 'UE 1.4 Gérer des données de l\'information',
        'competence1_5': 'UE 1.5 Conduire un projet',
        'competence1_6': 'UE 1.6 Collaborer au sein d\'une équipe informatique',
        'competence2_1': 'UE 2.1 Réaliser un développement d\'application',
        'competence2_2': 'UE 2.2 Optimiser des applications',
        'competence2_3': 'UE 2.3 Administrer des systèmes informatiques communicants complexes',
        'competence2_4': 'UE 2.4 Gérer des données de l\'information',
        'competence2_5': 'UE 2.5 Conduire un projet',
        'competence2_6': 'UE 2.6 Collaborer au sein d\'une équipe informatique',
        'competence3_1': 'UE 3.1 Réaliser un développement d\'application',
        'competence3_2': 'UE 3.2 Optimiser des applications',
        'competence3_3': 'UE 3.3 Administrer des systèmes informatiques communicants',
        'competence3_4': 'UE 3.4 Gérer des données de l\'information',
        'competence3_5': 'UE 3.5 Conduire un projet',
        'competence3_6': 'UE 3.6 Collaborer au sein d\'une équipe informatique',
        'competence4_1': 'UE 4.1 Réaliser un développement d\'application',
        'competence4_2': 'UE 4.2 Optimiser des applications',
        'competence4_3': 'UE 4.3 Administrer des systèmes informatiques communicants complexes',
        'competence4_4': 'UE 4.4 Gérer des données de l\'information',
        'competence4_5': 'UE 4.5 Conduire un projet',
        'competence4_6': 'UE 4.6 Collaborer au sein d\'une équipe informatique'
    };

    var formulaire = '<form id="noteForm">';
    formulaire += '<h2 class="competence-title">' + (competenceTitleMap[competence] || 'Compétence') + '</h2>';
    formulaire += '<table>';

    var competenceFunctionMap = {
        'competence1_1': creerFormulaireComp1_1,
        'competence1_2': creerFormulaireComp1_2,
        'competence1_3': creerFormulaireComp1_3,
        'competence1_4': creerFormulaireComp1_4,
        'competence1_5': creerFormulaireComp1_5,
        'competence1_6': creerFormulaireComp1_6,
        'competence2_1': creerFormulaireComp2_1,
        'competence2_2': creerFormulaireComp2_2,
        'competence2_3': creerFormulaireComp2_3,
        'competence2_4': creerFormulaireComp2_4,
        'competence2_5': creerFormulaireComp2_5,
        'competence2_6': creerFormulaireComp2_6,
        'competence3_1': creerFormulaireComp3_1,
        'competence3_2': creerFormulaireComp3_2,
        'competence3_3': creerFormulaireComp3_3,
        'competence3_4': creerFormulaireComp3_4,
        'competence3_5': creerFormulaireComp3_5,
        'competence3_6': creerFormulaireComp3_6,
        'competence4_1': creerFormulaireComp4_1,
        'competence4_2': creerFormulaireComp4_2,
        'competence4_3': creerFormulaireComp4_3,
        'competence4_4': creerFormulaireComp4_4,
        'competence4_5': creerFormulaireComp4_5,
        'competence4_6': creerFormulaireComp4_6
    };
    
    if (competenceFunctionMap[competence]) {
        formulaire += competenceFunctionMap[competence]();
    }

    formulaire += '</table>';
    formulaire += '<div class="button-container"><button type="button" class="calculate-button" onclick="calculerMoyenne()">Calculer la moyenne</button></div>';
    formulaire += '</form>';

    document.getElementById('formulaireNotes').innerHTML = formulaire;
}

function creerFormulaireComp1_1() {
    var formulaire = '';
    formulaire += creerChampNote('Initiation au développement', 'initDev1_1', 4.20);
    formulaire += creerChampNote('Développement d\'interfaces web', 'devWeb1_1', 1.20);
    formulaire += creerChampNote('Anglais', 'anglais1_1', 0.50);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro1_1', 0.10);
    formulaire += creerChampNote('Implémentation d\'un besoin client', 'impBesoinClient1_1', 4.00);
    return formulaire;
}

function creerFormulaireComp1_2() {
    var formulaire = '';
    formulaire += creerChampNote('Initiation au développement', 'initDev1_2', 2.40);
    formulaire += creerChampNote('Introduction à l\'architecture des ordinateurs', 'introArchOrd1_2', 0.60);
    formulaire += creerChampNote('Mathématiques discrètes', 'mathDiscretes1_2', 1.50);
    formulaire += creerChampNote('Outils mathématiques fondamentaux', 'outilsMathFond1_2', 1.40);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro1_2', 0.10);
    formulaire += creerChampNote('Comparaison d\'approches algorithmiques', 'compApprochesAlgo1_2', 4.00);
    return formulaire;
}

function creerFormulaireComp1_3() {
    var formulaire = '';
    formulaire += creerChampNote('Introduction à l\'architecture des ordinateurs', 'introArchOrd1_3', 2.10);
    formulaire += creerChampNote('Introduction aux systèmes d\'exploitation et à leur fonctionnement', 'introSysExp1_3', 2.10);
    formulaire += creerChampNote('Anglais', 'anglais1_3', 1.20);
    formulaire += creerChampNote('Bases de la communication', 'basesComm1_3', 0.50);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro1_3', 0.10);
    formulaire += creerChampNote('Installation d\'un poste pour le développement', 'installPosteDev1_3', 4.00);
    return formulaire;
}

function creerFormulaireComp1_4() {
    var formulaire = '';
    formulaire += creerChampNote('Introduction aux bases de données et SQL', 'introBDDSQL1_4', 3.60);
    formulaire += creerChampNote('Mathématiques discrètes', 'mathDiscretes1_4', 1.70);
    formulaire += creerChampNote('Introduction à l\'économie durable et numérique', 'introEcoDurableNum1_4', 0.60);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro1_4', 0.10);
    formulaire += creerChampNote('Création d\'une base de données', 'creationBDD1_4', 4.00);
    return formulaire;
}

function creerFormulaireComp1_5() {
    var formulaire = '';
    formulaire += creerChampNote('Développement d\'interfaces web', 'devWeb1_5', 1.80);
    formulaire += creerChampNote('Introduction à la gestion des organisations', 'introGestOrg1_5', 2.60);
    formulaire += creerChampNote('Bases de la communication', 'basesComm1_5', 1.50);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro1_5', 0.10);
    formulaire += creerChampNote('Recueil de besoins', 'recueilBesoins1_5', 4.00);
    return formulaire;
}

function creerFormulaireComp1_6() {
    var formulaire = '';
    formulaire += creerChampNote('Développement d\'interfaces web', 'devWeb1_6', 0.50);
    formulaire += creerChampNote('Introduction à la gestion des organisations', 'introGestOrg1_6', 1.10);
    formulaire += creerChampNote('Introduction à l\'économie durable et numérique', 'introEcoDurableNum1_6', 1.10);
    formulaire += creerChampNote('Anglais', 'anglais1_6', 1.10);
    formulaire += creerChampNote('Bases de la communication', 'basesComm1_6', 1.10);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro1_6', 1.10);
    formulaire += creerChampNote('Découverte de l\'environnement économique et écologique', 'decouverteEnvEcoEco1_6', 4.00);
    return formulaire;
}

function creerFormulaireComp2_1() {
    var formulaire = '';
    formulaire += creerChampNote('Développement d\'interfaces web', 'devWeb2_1', 2.80);
    formulaire += creerChampNote('Introduction aux systèmes d\'exploitation et à leur fonctionnement', 'introSysExp2_1', 1.20);
    formulaire += creerChampNote('Anglais', 'anglais2_1', 0.50);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro2_1', 0.10);
    formulaire += creerChampNote('Développement d\'une application web', 'devAppWeb2_1', 4.00);
    return formulaire;
}

function creerFormulaireComp2_2() {
    var formulaire = '';
    formulaire += creerChampNote('Introduction aux bases de données et SQL', 'introBDDSQL2_2', 2.40);
    formulaire += creerChampNote('Introduction à l\'architecture des ordinateurs', 'introArchOrd2_2', 0.60);
    formulaire += creerChampNote('Mathématiques discrètes', 'mathDiscretes2_2', 1.50);
    formulaire += creerChampNote('Outils mathématiques fondamentaux', 'outilsMathFond2_2', 1.40);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro2_2', 0.10);
    formulaire += creerChampNote('Création d\'une base de données', 'creationBDD2_2', 4.00);
    return formulaire;
}

function creerFormulaireComp2_3() {
    var formulaire = '';
    formulaire += creerChampNote('Introduction à l\'architecture des ordinateurs', 'introArchOrd2_3', 2.10);
    formulaire += creerChampNote('Introduction aux systèmes d\'exploitation et à leur fonctionnement', 'introSysExp2_3', 2.10);
    formulaire += creerChampNote('Anglais', 'anglais2_3', 1.20);
    formulaire += creerChampNote('Bases de la communication', 'basesComm2_3', 0.50);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro2_3', 0.10);
    formulaire += creerChampNote('Installation d\'un poste pour le développement', 'installPosteDev2_3', 4.00);
    return formulaire;
}

function creerFormulaireComp2_4() {
    var formulaire = '';
    formulaire += creerChampNote('Introduction aux bases de données et SQL', 'introBDDSQL2_4', 3.60);
    formulaire += creerChampNote('Mathématiques discrètes', 'mathDiscretes2_4', 1.70);
    formulaire += creerChampNote('Introduction à l\'économie durable et numérique', 'introEcoDurableNum2_4', 0.60);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro2_4', 0.10);
    formulaire += creerChampNote('Création d\'une base de données', 'creationBDD2_4', 4.00);
    return formulaire;
}

function creerFormulaireComp2_5() {
    var formulaire = '';
    formulaire += creerChampNote('Développement d\'interfaces web', 'devWeb2_5', 1.80);
    formulaire += creerChampNote('Introduction à la gestion des organisations', 'introGestOrg2_5', 2.60);
    formulaire += creerChampNote('Bases de la communication', 'basesComm2_5', 1.50);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro2_5', 0.10);
    formulaire += creerChampNote('Recueil de besoins', 'recueilBesoins2_5', 4.00);
    return formulaire;
}

function creerFormulaireComp2_6() {
    var formulaire = '';
    formulaire += creerChampNote('Développement d\'interfaces web', 'devWeb2_6', 0.50);
    formulaire += creerChampNote('Introduction à la gestion des organisations', 'introGestOrg2_6', 1.10);
    formulaire += creerChampNote('Introduction à l\'économie durable et numérique', 'introEcoDurableNum2_6', 1.10);
    formulaire += creerChampNote('Anglais', 'anglais2_6', 1.10);
    formulaire += creerChampNote('Bases de la communication', 'basesComm2_6', 1.10);
    formulaire += creerChampNote('Projet professionnel et personnel', 'projPersPro2_6', 1.10);
    formulaire += creerChampNote('Découverte de l\'environnement économique et écologique', 'decouverteEnvEcoEco2_6', 4.00);
    return formulaire;
}


function creerFormulaireComp3_1() {
    var formulaire = '';
    formulaire += creerChampNote('Développement web', 'devWeb3_1', 1.50);
    formulaire += creerChampNote('Développement efficace', 'devEff3_1', 1.00);
    formulaire += creerChampNote('Analyse', 'analyse3_1', 1.20);
    formulaire += creerChampNote('Qualité de développement', 'qualDev3_1', 1.50);
    formulaire += creerChampNote('Droit des contrats et du numérique', 'droitContratsNum3_1', 0.70);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersPro3_1', 0.10);
    formulaire += creerChampNote('Développement d\'une application', 'devApp3_1', 4.00);
    return formulaire;
}

function creerFormulaireComp3_2() {
    var formulaire = '';
    formulaire += creerChampNote('Développement web', 'devWeb3_2', 0.50);
    formulaire += creerChampNote('Développement efficace', 'devEff3_2', 1.30);
    formulaire += creerChampNote('Analyse', 'analyse3_2', 0.50);
    formulaire += creerChampNote('Architecture des réseaux', 'archRes3_2', 0.50);
    formulaire += creerChampNote('Probabilités', 'prob3_2', 1.60);
    formulaire += creerChampNote('Cryptographie et sécurité', 'cryptSec3_2', 1.00);
    formulaire += creerChampNote('Anglais', 'anglais3_2', 0.50);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersPro3_2', 0.10);
    formulaire += creerChampNote('Développement d\'une application', 'devApp3_2', 4.00);
    return formulaire;
}

function creerFormulaireComp3_3() {
    var formulaire = '';
    formulaire += creerChampNote('Développement web', 'devWeb3_3', 0.50);
    formulaire += creerChampNote('Programmation système', 'progSys3_3', 2.10);
    formulaire += creerChampNote('Architecture des réseaux', 'archRes3_3', 1.80);
    formulaire += creerChampNote('Cryptographie et sécurité', 'cryptSec3_3', 1.00);
    formulaire += creerChampNote('Anglais', 'anglais3_3', 0.50);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersPro3_3', 0.10);
    formulaire += creerChampNote('Développement d\'une application', 'devApp3_3', 4.00);
    return formulaire;
}

function creerFormulaireComp3_4() {
    var formulaire = '';
    formulaire += creerChampNote('Développement web', 'devWeb3_4', 1.00);
    formulaire += creerChampNote('SQL dans un langage de programmation', 'sqlProg3_4', 2.40);
    formulaire += creerChampNote('Probabilités', 'prob3_4', 0.50);
    formulaire += creerChampNote('Cryptographie et sécurité', 'cryptSec3_4', 0.50);
    formulaire += creerChampNote('Management des systèmes d\'information', 'managSysInfo3_4', 1.00);
    formulaire += creerChampNote('Droit des contrats et du numérique', 'droitContratsNum3_4', 0.50);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersPro3_4', 0.10);
    formulaire += creerChampNote('Développement d\'une application', 'devApp3_4', 4.00);
    return formulaire;
}

function creerFormulaireComp3_5() {
    var formulaire = '';
    formulaire += creerChampNote('Analyse', 'analyse3_5', 1.00);
    formulaire += creerChampNote('Qualité de développement', 'qualDev3_5', 0.80);
    formulaire += creerChampNote('Management des systèmes d\'information', 'managSysInfo3_5', 1.70);
    formulaire += creerChampNote('Droit des contrats et du numérique', 'droitContratsNum3_5', 1.00);
    formulaire += creerChampNote('Anglais', 'anglais3_5', 0.70);
    formulaire += creerChampNote('Communication professionnelle', 'commProf3_5', 0.70);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersPro3_5', 0.10);
    formulaire += creerChampNote('Développement d\'une application', 'devApp3_5', 4.00);
    return formulaire;
}

function creerFormulaireComp3_6() {
    var formulaire = '';
    formulaire += creerChampNote('Qualité de développement', 'qualDev3_6', 0.50);
    formulaire += creerChampNote('Management des systèmes d\'information', 'managSysInfo3_6', 1.60);
    formulaire += creerChampNote('Anglais', 'anglais3_6', 0.80);
    formulaire += creerChampNote('Communication professionnelle', 'commProf3_6', 1.60);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersPro3_6', 1.50);
    formulaire += creerChampNote('Développement d\'une application', 'devApp3_6', 4.00);
    return formulaire;
}


function creerFormulaireComp4_1() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLog', 1.50);
    formulaire += creerChampNote('Qualité de développement', 'qualDev', 0.80);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersoPro', 0.10);
    formulaire += creerChampNote('Complément web', 'compWeb', 0.80);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMob', 0.80);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComp', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

function creerFormulaireComp4_2() {
    var formulaire = '';
    formulaire += creerChampNote('Méthodes d\'optimisation', 'methOpt', 1.10);
    formulaire += creerChampNote('Anglais', 'anglais', 0.40);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersoPro', 0.10);
    formulaire += creerChampNote('Management avancé des systèmes d\'information', 'managInfo', 0.40);
    formulaire += creerChampNote('Complément web', 'compWeb', 0.40);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMob', 0.40);
    formulaire += creerChampNote('Automates et Langages', 'autoLang', 1.20);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComp', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

function creerFormulaireComp4_3() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLog', 1.20);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersoPro', 0.10);
    formulaire += creerChampNote('Virtualisation', 'virtual', 2.70);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComp', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

function creerFormulaireComp4_4() {
    var formulaire = '';
    formulaire += creerChampNote('Qualité et au-delà du relationnel', 'qualRel', 1.80);
    formulaire += creerChampNote('Communication interne', 'commInterne', 0.50);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersoPro', 0.10);
    formulaire += creerChampNote('Complément web', 'compWeb', 0.80);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMob', 0.80);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComp', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

function creerFormulaireComp4_5() {
    var formulaire = '';
    formulaire += creerChampNote('Qualité de développement', 'qualDev', 1.00);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersoPro', 0.10);
    formulaire += creerChampNote('Management avancé des systèmes d\'information', 'managInfo', 2.10);
    formulaire += creerChampNote('Complément web', 'compWeb', 0.40);
    formulaire += creerChampNote('Développement pour applications mobiles', 'devAppMob', 0.40);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComp', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

function creerFormulaireComp4_6() {
    var formulaire = '';
    formulaire += creerChampNote('Architecture logicielle', 'archiLog', 0.40);
    formulaire += creerChampNote('Anglais', 'anglais', 1.30);
    formulaire += creerChampNote('Communication interne', 'commInterne', 1.30);
    formulaire += creerChampNote('Projet personnel et professionnel', 'projPersoPro', 1.00);
    formulaire += creerChampNote('Développement d\'une application complexe', 'devAppComp', 1.50);
    formulaire += creerChampNote('Stage', 'stage', 4.00);
    formulaire += creerChampNote('Portfolio', 'portfolio', 0.50);
    return formulaire;
}

// Fonction pour créer un champ de note
function creerChampNote(nomMatiere, id, coef) {
    return '<tr>' +
           '<td><label for="' + id + '">' + nomMatiere + ':</label></td>' +
           '<td><input type="number" id="' + id + '" name="' + id + '" style="width: 50px;" oninput="miseAJourNoteCoef(\'' + id + '\')"></td>' +
           '<td><label for="coef' + id + '">Coefficient:</label></td>' +
           '<td><input type="number" value="' + coef + '" id="coef' + id + '" name="coef' + id + '" readonly style="width: 50px;"></td>' +
           '<td id="result' + id + '"></td>' +
           '</tr>';
}

// Fonction pour mettre à jour la note multipliée par le coefficient
function miseAJourNoteCoef(id) {
    var noteElement = document.getElementById(id);
    var coefElement = document.getElementById('coef' + id);
    var resultElement = document.getElementById('result' + id);
    if (noteElement && coefElement && resultElement) {
        var note = parseFloat(noteElement.value) || 0;
        var coef = parseFloat(coefElement.value);
        var noteCoef = note * coef;
        resultElement.innerText = noteCoef.toFixed(2);
    }
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
                var note = parseFloat(noteElement.value) || 0;
                var coef = parseFloat(element.value);
                totalPoints += note * coef;
                totalCoefs += coef;
            }
        }
    }
    var moyenne = totalCoefs > 0 ? totalPoints / totalCoefs : 0;
    let resultat = document.getElementById('resultat');
    resultat.style.color = 'white';
    resultat.innerHTML = 'Votre moyenne est de ' + moyenne.toFixed(2);}


 // Animation de la page d'accueil

document.addEventListener("DOMContentLoaded", function() {

    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    let properties = {
        particleCount: 100,
        particleRadius: 3,
        particleMaxVelocity: 0.5,
        lineLength: 150,
        particleLife: 6000
    };

    let mouseX = -1;
    let mouseY = -1;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.onresize = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.velocityX = (Math.random() * (properties.particleMaxVelocity * 2)) - properties.particleMaxVelocity;
            this.velocityY = (Math.random() * (properties.particleMaxVelocity * 2)) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
        }

        position() {
            this.x + this.velocityX > canvas.width && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
            this.y + this.velocityY > canvas.height && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        reDraw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
        }

        reCalculateLife() {
            if(this.life < 1) {
                this.reInit();
            }
            this.life--;
        }

        reInit() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.velocityX = (Math.random() * (properties.particleMaxVelocity * 2)) - properties.particleMaxVelocity;
            this.velocityY = (Math.random() * (properties.particleMaxVelocity * 2)) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
        }
    }

    function drawLines() {
        let x1, y1, x2, y2, length, opacity;
        for (let i in particles) {
            x1 = particles[i].x;
            y1 = particles[i].y;

            length = Math.sqrt(Math.pow(mouseX - x1, 2) + Math.pow(mouseY - y1, 2));
            if (length < properties.lineLength) {
                opacity = 1 - length / properties.lineLength;
                ctx.lineWidth = '0.5';
                ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(mouseX, mouseY);
                ctx.closePath();
                ctx.stroke();
            }

            for (let j in particles) {
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (length < properties.lineLength) {
                    opacity = 1 - length / properties.lineLength;
                    ctx.lineWidth = '0.5';
                    ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function reDrawParticles() {
        for (let i in particles) {
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
    }

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    function init() {
        for (let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle);
        }
        loop();
    }

    let particles = [];
    init();

    window.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
});

