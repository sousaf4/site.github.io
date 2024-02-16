---
title: Formas de Construir uma Prova Matemática
date: 2024-02-13T14:53:15-03:00
scriptstyles: ["syntax-coding"]
tags: ["matematica"]
---

Inicialmente siga esses 3 passos:

1. Descubra o que você está tentando provar. Isso começa determinando a estrutura lógica da declaração. A partir daí, você pode configurar a estrutura básica da sua prova. Parte disso também envolve determinar as suposições (ou hipóteses e antecedentes) e as conclusões (ou consequentes).

2. Preencha o material padrão. Para aqueles que não estão familiarizados com este termo, o material é considerado padrão se for padrão, independentemente do contexto. O material padrão consiste naquele material que fornece a estrutura básica para sua prova (por exemplo, “assumir P”, em uma prova direta de P⟹Q), bem como a inserção de definições (por exemplo, inserir “m = 2k, para alguns k∈Z,” após a afirmação m ser par.”). Também é recomendável que você preencha o material clichê que vai no final da prova, pois isso mostrará qual é o seu objetivo final.

3. Brinque. Depois de preencher o padrão e chegar à essência da prova, experimente as coisas. Ou seja, combine equações, veja alguns exemplos, tente entender os conceitos. É nesta fase, antes de você encontrar toda a prova, que a verdadeira compreensão e percepção podem ocorrer. Vimos isso na prova durante a aula, onde tentamos alguns exemplos antes de entendermos a ideia chave. Quando você achar que entende por que o resultado é verdadeiro, tente transformar isso em uma prova.

Agora, diferentes formas lógicas se prestam a diferentes métodos de prova, que analisamos abaixo.

1. P⟹Q. Tente primeiro uma prova direta. Se você tentar por um tempo e não chegar a lugar nenhum, considere tentar provar a contrapositiva. Como último recurso absoluto (raramente necessário), considere uma prova por contradição. Tal prova começaria com “assumir ¬(P⟹Q)”, que é equivalente a “assumir P∧(¬Q)”.

2. (P∨Q)⟹R. Use uma prova por casos, onde no primeiro caso você assume P e no segundo caso você assume Q.
3. P⟺Q. Comece com uma prova em duas partes (onde você prova P⟹Q e Q⟹P separadamente) e então veja se cada etapa é reversível. Se for, transforme a prova em uma prova concisa do tipo se e somente se.
4. (∀x)P(x). Geralmente a melhor maneira é provar isso começando com um elemento arbitrário. Demonstrações por contradição devem ser evitadas.
5. (∃x)P(x). Na maioria das vezes você vai querer brincar ou adivinhar até encontrar um objeto que satisfaça P(x). Depois, basta escrever uma prova que destaque aquele objeto e mostre que ele possui a propriedade especificada. No entanto, se isso não funcionar, você pode tentar mostrar que o objeto existe indiretamente (ou seja, sem construí-lo) por contradição. Este é um dos lugares onde uma prova por contradição pode realmente brilhar. Nesse caso, você começaria assumindo ¬(∃x)P(x), que é equivalente a (∀x)¬P(x) e então prosseguiria para derivar uma contradição.
