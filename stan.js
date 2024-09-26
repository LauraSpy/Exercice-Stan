
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');

const listQuestions = [
    {
        number: 1,
        listChoice: {
            '<select>' +
                '<option value="">--Choisis un pays--</option>' +
                '<option value="pays1">Afghanistan</option>' +
                '<option value="pays2">Azerbaidjan</option>' +
                '<option value="pays3">Kirghizistan</option>' +
                '<option value="pays4">Pakistan</option>' +
                '<option value="pays5">Tadjikistan</option>' +
                '<option value="pays6">Turkmenistan</option>' +
                '<option value="pays7">Ouzbekistan</option>' +
                '</select>'
        },
        correctAnswer: pays1
    },
    {
        number: 2,
        listChoice: {
            '<select>' +
                '<option value="">--Choisis un pays--</option>' +
                '<option value="pays1">Afghanistan</option>' +
                '<option value="pays2">Azerbaidjan</option>' +
                '<option value="pays3">Kirghizistan</option>' +
                '<option value="pays4">Pakistan</option>' +
                '<option value="pays5">Tadjikistan</option>' +
                '<option value="pays6">Turkmenistan</option>' +
                '<option value="pays7">Ouzbekistan</option>' +
                '</select>'
        },
        correctAnswer: pays2
    },
    {
        number: 3,
        listChoice: {
            '<select>' +
                '<option value="">--Choisis un pays--</option>' +
                '<option value="pays1">Afghanistan</option>' +
                '<option value="pays2">Azerbaidjan</option>' +
                '<option value="pays3">Kirghizistan</option>' +
                '<option value="pays4">Pakistan</option>' +
                '<option value="pays5">Tadjikistan</option>' +
                '<option value="pays6">Turkmenistan</option>' +
                '<option value="pays7">Ouzbekistan</option>' +
                '</select>'
        },
        correctAnswer: pays3
    },
    {
        number: 4,
        listChoice: {
            '<select>' +
                '<option value="">--Choisis un pays--</option>' +
                '<option value="pays1">Afghanistan</option>' +
                '<option value="pays2">Azerbaidjan</option>' +
                '<option value="pays3">Kirghizistan</option>' +
                '<option value="pays4">Pakistan</option>' +
                '<option value="pays5">Tadjikistan</option>' +
                '<option value="pays6">Turkmenistan</option>' +
                '<option value="pays7">Ouzbekistan</option>' +
                '</select>'
        },
        correctAnswer: pays4
    },
    {
        number: 5,
        listChoice: {
            '<select>' +
                '<option value="">--Choisis un pays--</option>' +
                '<option value="pays1">Afghanistan</option>' +
                '<option value="pays2">Azerbaidjan</option>' +
                '<option value="pays3">Kirghizistan</option>' +
                '<option value="pays4">Pakistan</option>' +
                '<option value="pays5">Tadjikistan</option>' +
                '<option value="pays6">Turkmenistan</option>' +
                '<option value="pays7">Ouzbekistan</option>' +
                '</select>'
        },
        correctAnswer: pays5
    },
    {
        number: 6,
        listChoice: {
            '<select>' +
                '<option value="">--Choisis un pays--</option>' +
                '<option value="pays1">Afghanistan</option>' +
                '<option value="pays2">Azerbaidjan</option>' +
                '<option value="pays3">Kirghizistan</option>' +
                '<option value="pays4">Pakistan</option>' +
                '<option value="pays5">Tadjikistan</option>' +
                '<option value="pays6">Turkmenistan</option>' +
                '<option value="pays7">Ouzbekistan</option>' +
                '</select>'
        },
        correctAnswer: pays6
    },
    {
        number: 7,
        listChoice: {
            '<select>' +
                '<option value="">--Choisis un pays--</option>' +
                '<option value="pays1">Afghanistan</option>' +
                '<option value="pays2">Azerbaidjan</option>' +
                '<option value="pays3">Kirghizistan</option>' +
                '<option value="pays4">Pakistan</option>' +
                '<option value="pays5">Tadjikistan</option>' +
                '<option value="pays6">Turkmenistan</option>' +
                '<option value="pays7">Ouzbekistan</option>' +
                '</select>'
        },
        correctAnswer: pays7
    },
];


function buildQuiz() {
    const output = [];

    //générer la liste déroulante ici plutôt ?

    //utiliser forEach pour enregistrer la sélection de l'utilisateur pour chaque ligne

}

function showResults() { }

// display quiz right away
buildQuiz();


// on submit, show results
submitButton.addEventListener('click', theResults);
//ici gérer le changement de couleur avec theResults

// Pour le bouton "Reset"
var refresh = window.getElementById('refresh');
refresh.addEventListener('click', location.reload(), false);


function theResults() {
    //fonction pour changer la couleur des chiffres en fonction des bonnes/mauvaises réponses
}