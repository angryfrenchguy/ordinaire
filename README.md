# Site web d'une compagnie d'autocars ordinaire

Si tu ne sait pas pas de quoi il s'agit, probablement que ça ne te concerne pas.

## Servir

Pour servir en mode développement tu peux faire le classique :

```
bundle exec jekyll serve
```

*En mode développement, le login firebase esr désactivé!! Pour l'activer it faut faire :*

```
$ JEKYLL_ENV=production bundle exec jekyll serve
```

### Si tu joue avec le code des formulaires


Ajoute la commande `watchify` pour que le code des signattures sur les formulaires (dans le cas qui nous concerne) aussi sois mis à jour à mesure.

```
watchify assets/js/signature.js -o assets/js/signature_bundle.js -v | [JEKYLL_ENV=production] bundle exec jekyll serve
```

Sinon in faut faire :

```
browserify assets/js/signature.js | uglifyjs -mc > assets/js/signature_bundle.js
```  

à chaque fois.
