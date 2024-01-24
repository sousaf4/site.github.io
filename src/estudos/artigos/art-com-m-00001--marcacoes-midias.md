---
title: Marcações HTML para utilizar nos Artigos do Site
summary: Existem diversas marcações que otimizam e acrescentam boas práticas para se usar nas postagens do site. Vamos ver algumas que estão disponíves
date: 2024-01-12T17:02:05 -03:00
keys: ["conteúdo", "html", "markup"]
scriptstyles: ["syntax-coding"]
tags: ["codigo"]
---

Usando o iframe odysee:

```html
<div class="iframe u-video">
  <iframe
    id="odysee-iframe"
    width="560"
    height="315"
    src="https://odysee.com/$/embed/@alvarohenrique:7/walter-burle-marx-walterburlemarx:4?r=G5jHQ6pyV3rLtNWLatmWng2f3HGoXzWV"
    allowfullscreen
  ></iframe>
</div>
```

Usando o [playerx](https://github.com/luwes/playerx) para qualquer tipo de video

```html
<player-x src="https://www.youtube.com/watch?v=dzKJ_1i78Y8" controls></player-x>
```

Usando [lite-youtube](https://github.com/luwes/lite-vimeo-embed?tab=readme-ov-file) para videos do Youtube:

```html
<lite-youtube class="u-video" videoid="rkZzg7Vowao"></lite-youtube>
```

Outra opção para os videos do Youtube explicado pelo [Labnol](https://www.labnol.org/internet/light-youtube-embeds/27941/):

```html
<div class="youtube-player" data-id="Kqi_6v2RGB0"></div>
```

Usando [lite-vimeo](https://github.com/luwes/lite-vimeo-embed) para videos do Vimeo

```html
<lite-vimeo videoid="357274789"></lite-vimeo>
```
