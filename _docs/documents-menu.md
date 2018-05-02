---
layout: page
title: Documents
subtitle:
author:
Categories: documents
tags:
---

<ul>

{% for p in site.docs %}
  {% if p.categories contains 'documents' %}
  <li class='liste_categorie'>
  <!-- <div> -->
  <h3><a href="{{ p.url }}#documents">{{ p.title }}</a></h3>
  <!-- <br>
  <p>{{p.description}}</p> -->
  <!-- </div> -->
  </li>
  {% endif %}
{% endfor %}

</ul>
