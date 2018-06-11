# Site web d'une compagnie d'autocars ordinaire

Si tu ne sait pas pas de quoi il s'agit, probablement que ça ne te concerne pas.

## Servir

Pour servir tu peux faire le classique :

```
bundle exec jekyll serve
```

Ou ajouter la commande watchify pour que le code des sigantures sur les formulaires (dans le cas qui nous concerne) aussi sois mis à jour à mesure.

```
watchify assets/js/signature.js -o assets/js/signature_bundle.js -v | bundle exec jekyll serve
```

Sinon in faut faire :

```
browserify assets/js/signature.js | uglifyjs -mc > assets/js/signature_bundle.js
```  

à chaque fois.
