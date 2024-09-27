//récupération de l'élément HTML (id=list-number) où les listes déroulantes seront injectées
const quizContainer = document.getElementById('list-number');

//création d'une liste d'objets contenant les numéros des questions et les bonnes réponses associées
// (ils seront appelés ensuite avec le paramètre de la fonction)
const listQuestions = [
    { number: 1, correctAnswer: 'pays2' },
    { number: 2, correctAnswer: 'pays6' },
    { number: 3, correctAnswer: 'pays7' },
    { number: 4, correctAnswer: 'pays1' },
    { number: 5, correctAnswer: 'pays4' },
    { number: 6, correctAnswer: 'pays5' },
    { number: 7, correctAnswer: 'pays3' }
];

// Fonction pour construire et afficher le quiz avec des listes déroulantes
function buildQuiz() {
    // Création d'un tableau temporaire pour stocker les éléments HTML
    const output = [];

    // Utilisation de forEach pour créer une liste déroulante pour chaque question
    listQuestions.forEach((question) => {
        // Création du HTML de la liste déroulante pour chaque question
        // on y insère la liste d'objets créées plus tôt
        const selectElement = `
            <div class="question">
                <label for="question-${question.number}"> ${question.number} </label>
                <select id="question-${question.number}">
                    <option value="">--Choisis un pays--</option>
                    <option value="pays1">Afghanistan</option>
                    <option value="pays2">Azerbaidjan</option>
                    <option value="pays3">Kirghizistan</option>
                    <option value="pays4">Pakistan</option>
                    <option value="pays5">Tadjikistan</option>
                    <option value="pays6">Turkmenistan</option>
                    <option value="pays7">Ouzbekistan</option>
                </select>
            </div>
        `;
        // On ajoute l'élément HTML au tableau de sortie (le tableau était précédemment vide)
        output.push(selectElement);
    });

    // On injecte le contenu généré dans l'élément `quizContainer` (qui est le bloc dans lequel le quiz sera affiché)
    quizContainer.innerHTML = output.join('');
}

// Afficher la liste (appel de la fonction)
buildQuiz();



// Fonction pour afficher les résultats après la validation des réponses
function showResults() {
    // On utilise forEach pour vérifier la réponse de chaque question
    listQuestions.forEach((question) => {
        // On récupère la réponse de l'utilisateur pour chaque question 
        const userAnswer = document.getElementById(`question-${question.number}`).value;
        // On récupère le label associé pour changer sa couleur avec la boucle if
        const label = document.querySelector(`label[for="question-${question.number}"]`);

        // Si la réponse de l'utilisateur est correcte, le label devient vert
        // " === " signifie " tout à fait égal "
        if (userAnswer === question.correctAnswer) {
            label.style.color = 'green'; //ici, on fait appel à deux éléments HTML et CSS directement dans le JS pour changer la couleur
        } else {
            // Sinon, il devient rouge
            label.style.color = 'red';
        }
    });
}

// Écouteur d'événement pour déclencher la fonction showResults quand l'utilisateur clique sur "Valider"
// l'écouteur d'évenement est souvent utilisé pour venir gérer les clicks ou hover de la souris de l'utilisateur
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', showResults);


// Pour le bouton "Reset", on réinitialise les sélections et les couleurs
const resetButton = document.getElementById('refresh'); //ici on récupère l'id lié au bouton "reset"
resetButton.addEventListener('click', () => { //et on lui ajoute un écouteur d'événement là aussi pour gérer le click de ce bouton
    // Réinitialiser les listes déroulantes à leur état par défaut
    listQuestions.forEach((question) => { //on revient chercher chaque question
        document.getElementById(`question-${question.number}`).value = ''; // Reset des réponses en utilisant ".value"
        const label = document.querySelector(`label[for="question-${question.number}"]`); //on vient récupérer le label pour les numéros
        label.style.color = ''; // Et on réinitialise la couleur des numéros à "défault" ou vide. 
    });
});



//création d'un effet pour l'apparition de l'image au click du bouton
document.getElementById('showImage').addEventListener('click', function () { //je vais chercher l'id lié au bloc où le bouton et l'image sont mis + j'ajoute un écouteur d'événement au click
    const imageContainer = document.getElementById('imageContainer'); //je crée une constante pour chercher le bloc de l'image spécifiquement

    // Changer le style de l'image pour la rendre visible
    if (imageContainer.style.display === 'none') { // j'utilise le ".display" avec le style HTML pour le mettre à "none" par défault
        imageContainer.style.display = 'block'; //donc au click, s'il est par défault non affiché, le bloc va s'afficher
    } else {
        imageContainer.style.display = 'none'; //si le bloc est affiché au click, il va revenir à son état par défault et "se cacher"
    }
});


// Sélectionne le bouton avec l'ID 'help'
const helpButton = document.getElementById('help');

// Ajoute un écouteur d'événement 'click'
helpButton.addEventListener('click', function () {
    // Affiche une alerte lorsqu'on clique sur le bouton
    alert("Ce n'est pas ici ! Clique ailleurs...");
});
