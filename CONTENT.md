## J1
### Introduction à React
- Philosophie de React
- Les autres Frameworks JavaScript
- Environnement de développement
- Outils de debug

#### Travaux pratiques
- Mise en place de l’environnement de développement
- Mise en place pour le début de liens directs vers les fichiers react et react-DOM
- Voir la différence avec un import de fichiers optimisés par le web pack

### Les nouveautés ECMAScript 
- Présentation d’ECMAScript
- Les nouveautés ES6/ES2015
- ES2017 : les fonctions « async »

### Premiers développements avec ReactJS
- Le composant
- Principe et conséquences du Virtual Dom
- La fonction render()
- 'props' et 'state'
- Le langage JSX

#### Travaux pratiques
- Initiation à JSX. Définition de la structure de l’application.
- Réalisation d’un générateur de formulaires en JSX pour utiliser des class/fonctions réutilisables. L’objectif est de se créer une bibliothèque de composants réutilisables.

## J2

### Les possibilités de build
- Build complet avec webpack
- Build managé avec la cli create-react-app
- Les différents packages de bootstraping React
- Optimisation et construction des fichiers nécessaires à l’affichage complet du site (js, mais aussi images et css)
- Comparaison de la version lien dans le html/ la version développement et la version production

### Les Composants React
- Les composants fonctionnels et de classe
- Composition de multiple composants
- Cycle de vie d'un Composant de classe
- Les Hooks des composants fonctionnels
- Gestion des événements click, mouseover...

### Styliser ces composants
- Les différentes approches pour styliser un composant
- La bibliothèque de « styled-components » Emotion
- Interaction de l'utilisateur avec les composants
- Gestion d'Ajax
- Gestion des formulaires
- Manipulation du DOM, DOM virtuel

#### Travaux pratiques
- Création d’un ensemble structuré de composant UI.
- Mise en place d’une page qui permet de déclarer des variables et de donner à l’internaute de modifier ces valeurs et de déclencher un nouveau rendu de la page. Nous allons créer une page formulaire avec des données venant d’une api externe et contrôler les valeurs saisies dans le formulaire par l’internaute pour pouvoir envoyer les données du formulaire.

## J3

### Gestion centralisée des données
- Présentation des différentes technologies de gestion (Redux, MobX, context, Recoil etc.)
- Présentation de Redux
- Le Store et les Actions
- Création de Reducteurs pour les Actions
- Utilisation avec React

### Application monopage avec ReactJS et un module de store de variables
- Flux/Redux : présentation. Propagation de données.
- Comparaison des architectures.
- Création de vues et contrôleurs dans Flux.
- Rôle du "Dispacther" store reducer action.

#### Travaux pratiques
- Apprendre à manipuler ces stores de données
- Créer un projet avec des composants et partager les variables entre eux
- Le store permet de simplifier les changements de données au sein de l’application en centralisant tout à un unique endroit.

### Le Router
- Les différents Routers
- HashRouter ou PushState
- Conséquences sur le déploiement

### Application isomorphique
- Présentation de NodeJS
- Principe et bénéfices du développement isomorphique
- Découverte du Framework NextJs

#### Travaux pratiques
- Prérendu serveur d’une application.
- Créer un projet de plusieurs vues avec tous les éléments vus précédemment
- Un mini-site avec plusieurs vues accessibles via les routes
- Différents composants faisant appel à des données venant d’apis et des variables partagées entre certains composants.