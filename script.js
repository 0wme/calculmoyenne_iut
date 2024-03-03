AOS.init();


// Fonction pour afficher les compétences en fonction du semestre sélectionné
function afficherCompetences(semestre) {
    var menuCompetences = '';
    var competences = semestre === 'semestre3' ? ['3_1', '3_2', '3_3', '3_4', '3_5', '3_6'] : ['4_1', '4_2', '4_3', '4_4', '4_5', '4_6'];
    for (var i = 0; i < competences.length; i++) {
        menuCompetences += '<button onclick="afficherFormulaire(\'competence' + competences[i] + '\')">Compétence ' + competences[i] + '</button>';
    }
    document.getElementById('menuCompetences').innerHTML = menuCompetences;
    document.getElementById('formulaireNotes').innerHTML = '';
}

// Fonction pour afficher le formulaire en fonction de la compétence sélectionnée
function afficherFormulaire(competence) {
    var formulaire = '<form id="noteForm"><table>';
    var competenceFunctionMap = {
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
    formulaire += '<button type="button" class="calculate-button" onclick="calculerMoyenne()">Calculer la moyenne</button></form>';

    document.getElementById('formulaireNotes').innerHTML = formulaire;
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

