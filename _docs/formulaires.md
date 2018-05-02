---
layout: page
title: Documents et formulaires
categories:
  - formulaires
description: "Toutes sortes de documents dont vous pourriez avoir de besoin."
---

<ul>

{% for p in site.docs %}
  {% if p.categories contains 'formulaire' %}
  <li class='liste_categorie'>
  <!-- <div> -->
  <h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
  <!-- <br>
  <p>{{p.description}}</p> -->
  <!-- </div> -->
  </li>
  {% endif %}
{% endfor %}

</ul>
