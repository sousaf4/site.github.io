---
date: 2024-01-31T15:25:53-03:00
title: Notas - Espirituais
description: Últimas anotações e aprendizados
---

<header class="h-feed hfeed">
<p class="p-summary site-description">{{ description }}</p>
</header>
<ul class='list'>
{%- for item in collections.notase | reverse -%}
  <li class="h-entry hentry list-item">
    <a href="{{ item.url }}" class="u-url" rel="bookmark" >
      <span  class="p-name entry-title" >{{ item.data.title }}</span>
    </a>
  </li>
{%- endfor -%}
</ul>
