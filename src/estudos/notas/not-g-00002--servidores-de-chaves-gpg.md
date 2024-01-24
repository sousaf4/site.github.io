---
title: Servidores de Chaves Públicas GPG
date: 2024-01-19T19:13:07-03:00
summary: Uma lista com alguns servidores de chaves públicas GPG para compartilhar sua própria chave
keys: ["gpg", "servidor", "chave"]
scriptstyles: ["syntax-coding"]
tags: ["codigo"]
---

Segue abaixo alguns endereços que você pode usar:

- [https://keybase.io](https://keybase.io)
- [https://keys.openpgp.org](https://keys.openpgp.org)
- [https://keyserver.ubuntu.com](https://keyserver.ubuntu.com)
- [http://keys.gnupg.net](http://keys.gnupg.net)
- [https://pgp.mit.edu](https://pgp.mit.edu)
- [https://keyoxide.org)](https://keyoxide.org)

Para solicitar ou enviar/receber uma chave ao servidor use os comandos a seguir:

```bash
gpg --keyserver [url-server] --recv-key [email|id]

gpg --keyserver [url-server] --send-key [email|id]
```
