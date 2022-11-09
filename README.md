# Formation React

https://nextjs.org/learn/basics/create-nextjs-app

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
reference: https://nextjs.org/learn

afin de porter l'application sur Nextjs : 
```shell
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

Dans nextjs-blog/pages ajouter un ficher : _app.jsx (celui-ci est un fichier ou on met les providers et qui s'qpplique sur tout le site) client-side
Dans nextjs-blog/pages ajouter un ficher : _document.jsx (celui-ci gere en general les head et la logique server necessaire pour chaque page)
Dans nextjs le dossier page represente chaque route
Pour faire une url comme ceci : /posts/:id  il faut faire un fichier : /pages/posts/[id].jsx

### Portage sur Nextjs
- Porter l'application precedente sur NextJs
- Ajouter un systeme de page / avec recuperation server-side d'un post en fonction de l'id : /posts/1 (par exemple) (- Ajouter un systeme ([id]/slug)
- Ajouter un systeme de recuperation du user de la page client-side