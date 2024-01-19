---
title: Introdução ao Common Lisp
summary: Primeiras construções usando o SBCL - Common Lisp. Idéias de composições e modelagem de funções em Lisp
date: 2024-01-16T16:26:17 -03:00
keys: ["introducao", "common-lisp"]
scriptstyles: ["syntax-coding"]
---

Subtrai 1 do número dado.

```lisp
(defun sub1 (n)
    (- n 1))
```

Subtrai 2 do número dado e utilizando a função `sub1`.

```lisp
(defun sub2 (n)
    (sub1 (sub1 n)))
```

Soma 1 ao número dado.

```lisp
(defun add1 (n)
    (+ n 1))
```

Soma 2 ao número dado. Faz uso da função `add1`.

```lisp
(defun add2 (n)
    (add1 (add1 n)))
```

Essa função é conhecida como predicado pois verifica se a entrada é igual a 2.

```lisp
(defun twop2 (n)
    (zerop (sub2 n)))
```

Essa função verifica se dois números são diferentes.

```lisp
(defun not-equal (n m)
    (not (equal n m)))
```

Essa função adiciona 1 ao segundo numero dado e compara se os dois são iguais.

```lisp
(defun onemorep (n m)
    (equal n (add1 m)))
```

Função retorna a metade do número.

```lisp
(defun half (n)
  (/ n 2.0))
```

Função divide o valor por 2.

```lisp
(defun div2 (n)
    (/ n 2.0))
```

Outra forma de retornar a metade do valor.

```lisp
(defun half2 (n)
    (div2 n))
```

Essa função verifica se o numero tem dois digitos ou mais.

```sbcl
(defun multi-digit-p (n)
  (or
    (> n 9)
    (< n -9)))
```

Função média.

```lisp
(defun average (&rest m)
    (/ (apply #'+ m) (length m)))
```

Verifica se o número é igual a 1.

```lisp
(defun onep (n)
  (equal n 1))
```

Verifica se o número é diferente de 1.

```lisp
(defun not-onep (n)
    (not (onep n)))
```

Verifica se o número é maior que 0.

```lisp
(defun plusp (n)
    (> n 0))
```

Verifica se o número é menor que 0.

```lisp
(defun not-plusp (n)
    (not (plusp n)))
```
