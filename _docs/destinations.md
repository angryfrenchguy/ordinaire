---
layout: page
title: Destinations
subtitle:
author:
Categories: Destinations
tags:
---

<ul>

{% for p in site.docs %}
  {% if p.categories contains 'destinations' %}
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
