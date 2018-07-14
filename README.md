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

## Copyright

### Images

[I_Love_New_York](https://commons.wikimedia.org/wiki/File:I_Love_New_York.svg) : This file is ineligible for copyright and therefore in the public domain because it consists entirely of information that is common property and contains no original authorship.
[Flag_of_the_District_of_Columbia](https://openclipart.org/detail/45979/usa-district-of-columbia) (via WikiCommons): CC no copyright.
[radio](http://simpleicon.com/radio.html) : Use and edit these icons for any personal or commercial work with credit and link back for us!
[iconmonstr-radio-10](https://iconmonstr.com/radio-2-svg/) : Licensee may use the Work in non-commercial and commercial projects, services or products without attribution.
[iconmonstr-airport-16](https://iconmonstr.com/iconmonstr-airport-16/) : Licensee may use the Work in non-commercial and commercial projects, services or products without attribution.
[cn-tower](https://www.flaticon.com/authors/freepik) : In order to use an icon you must attribute it to its author, so we will be able to continue creating new graphic resources every day.
[bridge](https://www.flaticon.com/authors/freepik) : In order to use an icon you must attribute it to its author, so we will be able to continue creating new graphic resources every day.
[traffic-cone](https://www.flaticon.com/authors/daniel-bruce) : In order to use an icon you must attribute it to its author, so we will be able to continue creating new graphic resources every day.


### TODO

- Parking Washington DC
- Parking Philadelphie
- Parking Tadoussac
- Mettre mes communications relative aux réunions dans "Nouvelles"
- Essayer de refaire le lien direct au parkings
