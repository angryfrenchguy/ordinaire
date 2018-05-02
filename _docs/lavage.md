---
layout: page
title: Lavage
subtitle:
author:
Categories: lavage
tags:
---

<ul>

{% for p in site.docs %}
  {% if p.categories contains 'lavage' %}
  <li class='liste_categorie'>
  <!-- <div> -->
  <h3><a href="{{ p.url }}#lavage">{{ p.title }}</a></h3>
  <!-- <br>
  <p>{{p.description}}</p> -->
  <!-- </div> -->
  </li>
  {% endif %}
{% endfor %}

</ul>
