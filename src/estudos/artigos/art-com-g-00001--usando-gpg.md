---
title: Comandos Básicos do GPG
summary:
date: 2024-01-18T09:06:59 -03:00
keys: ["basico", "gpg"]
scriptstyles: ["syntax-coding"]
---

```bash
# listar as chaves geradas
gpg --list-keys

# listar por padrão
gpg --list-keys <pattern>

# exportar a chave publica
gpg --export '<key|email>' > pubkey.gpg

# importar chave de um arquivo
gpg --import pubkey.gpg

# encriptar arquivo com chave publica
gpg --encrypted --recipient '<key>' <file_path>
gpg -e -r '<key>' <file_path>

# assinatura nao-anexada. vai gerar
# um arquivo .sig com o mesmo nome do original
gpg -b <file_path>

# verificar a assinatura. É preciso ter a chave
# publica da assinatura
gpg --verify <signature_file_path> <file_path>

# descriptografar para a saida padrao
gpg -d <file_path>
# descriptografar para um arquivo
gpg -d mensagem.txt.gpg > mensagem.txt

# encriptar usando uma senha
gpg -c <file_path>

# descriptografar usando uma senha
gpg -d <file_path>
gpg -d mensagem.txt.gpg > mensagem.txt

# enviar e receber chaves de um servidor
gpg --keyserver [url-server] --recv-key [email|id]

gpg --keyserver [url-server] --send-key [email|id]

```
