# Project 1.0

## les pré-requis
 - Node >= 8
 - Git

## Méthode d'installation
Pour installer le projet, il sufit d'abord de faire installer les pré-requis, et suivre la liste des commandes suivante
```sh
$ git clone user@gitlab…
$ git branch pre-dev
$ git checkout predev
$ cd project/
$ npm install
```

## Préparation de la MEP
Exécuter la commande suivante, ça va générer un dossier `web` qui contiendra toute l'ensemble des assets, manifest, et le code html du projet.

```sh
$ npm run-script build
```

### Gérer la MEP
Pour la mise en prod, il faut toujours faire commiter que le dossier web qui contient les sources finale du projet, minifiés et bien optimisés, et c'est gérer par une branche `prod`.

```sh
$ git add ./web
$ git commit -m "Build 1.1"
$ git push origin prod
```