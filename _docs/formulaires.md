---
layout: page
title: Documents et formulaires
categories:
  - formulaires
description: "Toutes sortes de documents dont vous pourriez avoir de besoin."
---

<ul>

<h3>Documents en français</h3>

{% for p in site.docs %}
  {% if p.categories contains 'formulaire' and p.langue contains 'fr'%}
  <li class='liste_categorie'>
  <!-- <div> -->
  <b><a href="{{ p.url }}?={{ p.langue }}">{{ p.description }}</a></b>
  <!-- <br>
  <p>{{p.description}}</p> -->
  <!-- </div> -->
  </li>
  {% endif %}
{% endfor %}

</ul>

<ul>

<h3>Documents en anglais</h3>

{% for p in site.docs %}
  {% if p.categories contains 'formulaire' and p.langue contains 'en'%}
  <li class='liste_categorie'>
  <!-- <div> -->
  <b><a href="{{ p.url }}?={{ p.langue }}">{{ p.description }}</a></b>
  <!-- <br>
  <p>{{p.description}}</p> -->
  <!-- </div> -->
  </li>
  {% endif %}
{% endfor %}

</ul>
