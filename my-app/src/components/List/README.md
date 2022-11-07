## Definition d'une liste
- Definir ses props (le composant a besoin de quoi pour fonctionner)
- Definir les differents etats de la liste > definir les states et useEffect associes
- Definir les enfants

## Definition d'une liste row (enfant)
- Definir props bases sur tous les scenarios possibles
- Trouver occurences dans les differentes possibilites du composant
- Definir les etats possibles / useEffect / ...
- Definir les enfants

## En se basant sur les instructions precedentes
* Faire un composant Generic ListMenu et definir des entrees mocks

* Faire un composant Generic ProductItem avec :
  * une image
  * un titre
  * une description
  * une liste d'attribut <!> attention le productItem doit etre capable de gerer 2 types de produit avec des attributs differents <!>
  * action de select de quantite 1 a 10 pour un type de produit et un textField pour l'autre
  * un boutton pour enregistrer le choix > au click une popup de validation doit apparaitre (cancel reinitialise la valeur / ok l'enregistre)
  * le parent de ProductItem doit pouvoir enregistrer les deux types de produits separement pour afficher les choix