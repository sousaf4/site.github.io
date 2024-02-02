---
date: 2024-01-31T15:25:53-03:00
title: Notas - Pessoais
description: Últimas anotações e aprendizados
---

<header class="h-feed hfeed">
<p class="p-summary site-description">{{ description }}</p>
</header>
<ul class='list'>
{%- for item in collections.notasp | reverse -%}
  <li class="h-entry hentry list-item">
    <a href="{{ item.url }}" class="u-url" rel="bookmark" >
      <span  class="p-name entry-title" >{{ item.data.title }}</span>
    </a>
    <small>
      <span>
      <!-- {% for key in item.data.keys %}<span rel="category tag" class="p-category">&nbsp;-&nbsp;{{ key }}</span> {% endfor %} -->
       - <time  class="dt-published published" datetime="{{ page.date }}">{{ item.date | formatdata }}</time></span>
      </small>
  </li>
{%- endfor -%}
</ul>
