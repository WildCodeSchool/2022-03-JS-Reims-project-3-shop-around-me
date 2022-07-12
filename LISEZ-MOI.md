# Wild Code School (Reims) - Projet 3 - Shop Around Me

## Dates

Du 23 mai au 27 juillet 2022

## Concept :

L'application web Shop Around Me en une phrase : "Trouvez les produits que vous cherchez dans un magasin près de chez vous".

Les trois fonctionnalités principales :
- Un moteur de recherche
- Une carte des magasins comme résultat de la recherche
- Une cagnotte mise à jour utilisables dans ces magasins

## Equipe :

Equipe de développeurs :
- [Alexandra De Brito](https://github.com/Alexandra-Rdrgs "Alexandra De Brito")
- [Théo Depelsemacker](https://github.com/theoDep "Théo Depelsemacker")
- [Simon Duc](https://github.com/Simon-Duc "Simon Duc")
- [Valentin Morette](https://github.com/Valentin-Morette "Valentin Morette")

Partenaire :
- Anne-Laure Petit-Gats Gervais, PDG de Shop Around Me.

Formateurs :
- Romain Guillemot
- Robin Jonval

## Objectifs :

- Un modèle de base de données créé et mis à jour tout le long du projet
- Un design d'application cohérent, qui respecte les indications du partenaire et la charte graphique de son entreprise
- L'API respecte l'architecture REST
- L'application est créée grâce à un framework front-end
- L'application est fonctionnelle et ne contient pas d'erreur majeure
- Le code est DRY et bien structuré
- Le code est disponible sur GitHub
- L'application répond aux attentes du partenaire
- L'équipe a respecté les principes des méthodes agiles

## Installation & Utilisation

### Template

Ce template est conçu pour servir de base à tous les projets (P2/P3) suivants la stack React-Node-MySQL telle qu'enseignée à la Wild Code School. Il est préconfiguré avec un ensemble d'outils qui aideront les élèves à produire un code correspondant mieux aux standards du monde du travail et plus facile à maintenir, tout en restant simple à utiliser.

### Pour commencer un projet

- Sur VSCode, installer les plugins **Prettier - Code formatter** et **ESLint** et les configurer
- Cloner ce dépôt, se rendre à l'intérieur
- Lancer la commande `npm run setup`
- _NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans `backend/.env.sample`_

### Liste des commandes et signification

- `setup` : Initialisation du frontend et du backend ainsi que des outils
- `dev` : Démarrage des deux serveurs (frontend + backend) dans un même terminal
- `dev-front` : Démarrage d'un serveur React pour le frontend
- `dev-back` : Démarrage d'un serveur Express pour le backend
- `lint` : Exécute des outils de validation de code (sera exécutée automatiquement à chaque _commit_)
- `fix` : Fixe les erreurs de formatage (à lancer si `lint` ne passe pas)

### Listing des outils utilisés

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

### Reste à faire

Prettier:

- corriger la config front/back pour qu'elle suive le même standard qu'ESLint

Testing:

- ajouter des tests unitaires sur le front et le back, avec les commandes associées

Vérifications:

- s'assurer que les principaux outils utilisés lors de la formation sont compatibles avec ce template
- deploiements ? Compatible avec Netlify/Vercel/Heroku ?
- fonctionnement avec yarn/pnpm
