# Formation React

## Structurer un projet React.js

- Creer un dossier /components
```shell
mkdir src/components
```

- Definir les composants metier et UI
```shell
mkdir src/components/ui
mkdir src/components/business
```

Pour Creer un Composant il est conseille de creer un dossier dans l'un des dossiers crees precedement pour pouvoir y mettre l'ensemble des fichiers imherents au composant.

Il faut decomposer schematiquement chaque element de la page en composant pour que le changement de l'un n'affecte pas le rendu d'un autre en effet de bord.

## Exercice 1
### Creer une Page avec un composant Header et un composant Footer
- le Header et le Footer doivent contenir un logo et une liste de lien (avec un style different)

### Creer des inputs et buttons
- les inputs doivent etre reutilisables : definir les props / states necessaires
- il faut un select / une checkbox / un textfield
- creer un button gerant les differentes etapes d'un envoie de formulaire

### Creer un Formulaire 
- creer un formulaire : nom / prenom / genre / [question avec checkbox]
- creer une gestion de validation d'erreur
- (optionnel) gerer un champs list (via select ou multiple checkbox) avec un afficheur du nombre de champs selectionne

### Affichage Des reponses du formulaire
- creer sur la page un visualiseur de reponse
- celui-ci doit se mettre a jour dans un premier temps a chaque submit
- la fonction de submit doit etre une Promise qui attend 5s avant de renvoyer true
- (optionnel) Randomiser la reponse avec un renvoie d'erreur

### Initialisation du formulaire
- creer un composant (une liste de boutton par exemple) permettant de definir l'etat initial du formulaire

### Utiliser une librairie pour gerer le formulaire
- creer un second formulaire utilisant la librairie : [react-hook-form](https://react-hook-form.com/get-started) pour gerer le formulaire en entier
- console.log et verifier les nombre de rendu
- (optionnel) utiliser yup-resolver pour gerer les erreurs [yup](https://www.npmjs.com/package/yup)
