---
title: Introdução ao SSH
date: 2024-01-20T15:03:43-03:00
summary: O SSH é um sistema que conecta seu terminal ao de um computador remoto de forma segura.
keys: ["ssh", "criptografia", "terminal"]
scriptstyles: ["syntax-coding"]
tags: ["codigo"]
---

Acessando um servidor remoto com ssh

```bash
ssh [username]@[urlserver]
ssh james@142.93.58.60
ssh james@server.sitename.com

```

Locais onde se encontram as chaves ssh e como criar uma nova

```bash
ls .ssh

ssh-keygen
```

Copiando chave para um servidor

```bash
ssh-copy-id root@server.sitename.com
```

Enviando arquivos para o servidor após estabelecer conexão

```bash
rsync [files] [username]@[urlserver]:[path]
```
