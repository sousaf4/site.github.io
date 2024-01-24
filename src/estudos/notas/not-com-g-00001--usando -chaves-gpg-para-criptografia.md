---
title: GPG - Criptgografia de Arquivos e Emails
date: 2024-01-16T20:33:17-03:00
summary: O PGP é um software criptográfico para gerar chaves que podemos usar para proteger dados e transmitir com segurança.
keys: ["gpg", "criptografia"]
scriptstyles: ["syntax-coding"]
tags: ["codigo"]
---

Comandos básicos para criar e exportar um par de chaves criptográficas no PGP.

```js
gpg --full-generate-key

gpg --export -a [idkey] > [publicnamekey].key

gpg --export-secret-key -a [idkey] > [privatenamekey].key
```
