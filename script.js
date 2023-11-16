function calculerMoyenne() {
    var noteMaths = document.getElementById('maths').value;
    var coefMaths = document.getElementById('coefMaths').value;
    var noteFrancais = document.getElementById('francais').value;
    var coefFrancais = document.getElementById('coefFrancais').value;

    // Ajouter d'autres matières si nécessaire

    var totalPoints = noteMaths * coefMaths + noteFrancais * coefFrancais;
    var totalCoefs = parseFloat(coefMaths) + parseFloat(coefFrancais);

    var moyenne = totalPoints / totalCoefs;
    document.getElementById('resultat').innerHTML = 'Votre moyenne générale est de ' + moyenne.toFixed(2);
}
