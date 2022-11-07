# Formation React

## Exercice 3
### Utiliser Redux 
- Creer un context au niveau de la home-page permettant de choisir l'affichage d'une page avec un titre, un boutton fetchMore et une liste des donnees associees (posts ou photos)
- Chaque post/photo doit avoir un select permettant de choisir une quantite et un boutton acheter pour enregistrer la commande
- le Header doit avoir une icone avec le nombre de produit 'achete' et un boutton permettant de changer la couleur du titre 
- Creer 2 stores : 1 UI (ex light/dark mode) et 1 gestion panier

### Utiliser les Routers
- Avoir 3 pages distinctes:
-- les pages de liste (ne plus utiliser le container mais le HashRouter)
-- une page panier recapitulant la commande
-- une page commande envoye !

## Exercice 4
### Portage sur Nextjs
- Porter l'application precedente sur NextJs
- Ajouter un systeme de page / avec recuperation server-side d'un post en fonction de l'id : /posts/1 (par exemple) (- Ajouter un systeme ([id]/slug)
- Ajouter un systeme de recuperation du user de la page client-side