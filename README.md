
# Projet Quizz 
## "Retrouve le bon pays sur la carte"

### Description
Ce projet consiste en un quizz interactif permettant aux utilisateurs de retrouver le bon pays sur une carte. L'application présente une série de questions où les utilisateurs doivent sélectionner le pays correspondant à chaque numéro. Les réponses sont ensuite vérifiées, et une image de la carte peut être affichée au clic d'un bouton.

## Technologies Utilisées
- HTML
- CSS
- JavaScript
## Fonctionnalités
- Sélection des réponses : L'utilisateur peut sélectionner un pays pour chaque question à partir d'une liste déroulante.
- Vérification des réponses : Les réponses sont vérifiées et le texte de la question est coloré en fonction de la réponse correcte (vert pour correct, rouge pour incorrect).
- Affichage d'une carte : Une image de la carte peut être affichée lorsque l'utilisateur clique sur un bouton.
- Reset des réponses : Un bouton permet de réinitialiser les sélections et de remettre à zéro le quizz.
## Structure du Code
### HTML
Le code HTML crée la structure de la page avec :

- Un titre pour le quizz
- Une liste de questions
- Un bouton pour valider les réponses
- Un bouton pour afficher l'image de la carte
- Un bouton pour réinitialiser les réponses
- CSS

Le style est défini pour rendre l'interface utilisateur attrayante :

- Un dégradé de fond
- Un cadre avec des coins arrondis pour le quizz
- Un effet de changement de couleur de la bordure de l'élément principal
- Des styles pour les boutons et les sélecteurs
- JavaScript

La logique principale du quizz est gérée par JavaScript :

- Récupération et affichage des questions
- Vérification des réponses des utilisateurs
- Gestion de l'affichage de l'image de la carte
- Réinitialisation des sélections

## Code
### Exemple de JavaScript
Voici un extrait du code JavaScript utilisé pour gérer le quizz :

- **JavaScript**
  

     // Récupération de l'élément correspondant en HTML const quizContainer = document.getElementById('list-number');
    
    // Création des numéros et les bonnes réponses associées const listQuestions = [
        { number: 1, correctAnswer: 'pays1' },
        { number: 2, correctAnswer: 'pays2' },
        // ... autres questions ];
    
    // Création d'une fonction pour le quizz en liste déroulante function buildQuiz() {
        // Logique pour construire le quizz }
    
    // Vérification des réponses et colorier les numéros function showResults() {
        // Logique pour afficher les résultats }

### Exemple de CSS
Voici un extrait du code CSS utilisé pour le style :

- **CSS**

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #041D42;
    }
    
    #quiz {
        border: 2px solid rgba(210, 126, 219, 0.614);
        border-radius: 45% 55% 66% 34% / 39% 41% 59% 61%;
        padding: 5%;
        animation: borderColorChange 5s infinite; /* Animation de la bordure */
    }

## Instructions d'utilisation
Cloner le repo :
- bash

Copier le code
- git clone <URL_DU_REPO>

Ouvrir le fichier index.html dans un navigateur web pour accéder au quizz.


# Conclusion
Ce projet permet de combiner des éléments interactifs avec une approche ludique pour l'apprentissage des pays. Il peut être enrichi avec d'autres fonctionnalités et questions pour augmenter la difficulté et l'interactivité.
