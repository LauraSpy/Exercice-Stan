//récupération de l'élément HTML où les listes déroulantes seront injectées
const quizContainer = document.getElementById('list-number');

//création d'une liste d'objets contenant les numéros des questions et les bonnes réponses associées
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
        // On ajoute l'élément HTML au tableau de sortie
        output.push(selectElement);
    });

    // On injecte le contenu généré dans l'élément `quizContainer`
    quizContainer.innerHTML = output.join('');
}

// Afficher la liste
buildQuiz();



// Fonction pour afficher les résultats après la validation des réponses
function showResults() {
    // On utilise forEach pour vérifier la réponse de chaque question
    listQuestions.forEach((question) => {
        // On récupère la réponse de l'utilisateur pour chaque question
        const userAnswer = document.getElementById(`question-${question.number}`).value;
        // On récupère le label associé pour changer sa couleur
        const label = document.querySelector(`label[for="question-${question.number}"]`);

        // Si la réponse de l'utilisateur est correcte, le label devient vert
        if (userAnswer === question.correctAnswer) {
            label.style.color = 'green';
        } else {
            // Sinon, il devient rouge
            label.style.color = 'red';
        }
    });
}

// Écouteur d'événement pour déclencher la fonction showResults quand l'utilisateur clique sur "Valider"
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', showResults);


// Pour le bouton "Reset", on réinitialise les sélections et les couleurs
const resetButton = document.getElementById('refresh');
resetButton.addEventListener('click', () => {
    // Réinitialiser les listes déroulantes à leur état par défaut
    listQuestions.forEach((question) => {
        document.getElementById(`question-${question.number}`).value = ''; // Reset des réponses
        const label = document.querySelector(`label[for="question-${question.number}"]`);
        label.style.color = ''; // Réinitialiser la couleur des numéros
    });
});



//création d'un effet pour l'apparition de l'image au click du bouton
document.getElementById('showImage').addEventListener('click', function () {
    const imageContainer = document.getElementById('imageContainer');

    // Changer le style de l'image pour la rendre visible
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
});
