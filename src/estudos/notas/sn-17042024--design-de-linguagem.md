---
title: Como as linguagens de programação são projetadas
date: 2024-04-17T08:46:21-03:00
---

(\*) - (\* 5 9)
(/) - (/ 9 3)
(-) - (- 5 9)
(+) - (+ 5 9)
(^) - (^ 5 9)
(!) - (! 5)
(~) - (~ 16 4)
(¬) - (¬ true)
(&) - (& true false)
(|) - (| true false)
(=) - (5 = 5)
(==) - (5 == '5')
(>) - (> 6 5)
(<) - (< 6 5)
(>=) - (>= 6 5)
(<=) - (<= 6 5)
(%) - (% 6 5)
(') - ('symbol)
('') - ('string')
("") - (% 6 5 "comment")
(@) - /classe, heranca, construtores
atributos, mensagens
-- (var0 : - 3 + 5 \* 4 + 1 2 )
-- (var0 : 1 2 + 4 \* 5 + 3 - )
-- (@fn3 \a b : + a b)
-- (@fn1 \..args : + ..args)
($) -
(:) - :@fn1 5 9 :@fn2 'A' '4'
(.) - .@fn1 5 9 .@fn2 'A' '4'
(,) - @fn1 5 9, @fn2 'A' '4',
(;) - @fn1 5 9; @fn2 'A' '4';
(\) - :;
(1 2 3 4 5 6 7 8 9 0) - numeros
{} [] ()

"some todos numeros do tipo inteiro de uma lista."
(@sum-all \list : + ..list )
(@cond1 \number : >= number 5
(- number 5)
(+ number 5))

```lisp
;; expressoes
(@var0 (* 9 (- 10 3)))

;; variaveis
(@var1 47)
(@var2 'string')
(@var3 2.6)

;; funcoes
(@fn1 arg1 arg2 (+ arg1 arg2))
(@fn1 ..args (+ ..args))
(@fn1 number (+:
    ,fn1 (- number 1)
    ,fn1 (- number 2)
))
(@$,;.:?\)

(@fn1 arg1 arg2 arg3 :+ arg3 :* arg2 arg1)
(:fn1 3 5 9)

.,;:
```

tipos

- escalares - inteiros, racionais, booleanos, caracteres.
- compostos - tuplas, listas, matrizes,

como sao listas em diversas linguagens

- {1 5 9 6 3 8}
- [1 5 9 6 3 8]
- (1 5 9 6 3 8)
- /1 5 9 6 3 8/
- '1 5 9 6 3 8
