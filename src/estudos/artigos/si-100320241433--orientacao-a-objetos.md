---
title: Programação Orientada a Objetos
summary: Essa é uma introdução aos principais conceitos da programação orientada a objetos e como você pode usá-los para implementar programas de computador.
date: 2024-03-10T14:34:35 -03:00
tags: ["codigo"]
scriptstyles: ["syntax-coding"]
---

1. Classes - é um conjunto de atributos e métodos que são usados para projetar um tipo de dado abstrato. Eles reunem os dados e operações sobre os dados num único objeto.

```js
class Humano
  def initialize nome, nasc
    @nome = nome
    @nasc = nasc
  end
end
```

Uma classe é um modelo para a criação de objetos (uma estrutura de dados específica), fornecendo valores iniciais para o estado (variáveis ​​ou atributos de membro) e implementações de comportamento (funções ou métodos de membro).

2. Objetos - é uma instância de uma classe. Ele tem identidade, estado e comportamento.

```js
joao = Humano.new("João", Date.new(1900, 1, 1));
=> #<Humano:0x00005644152a2f60
    @nasc=#<Date: 1900-01-01
    ((2415021j,0s,0n),+0s,2299161j)>,
    @nome="João Pedro">

joao.__id__;
=> 260
```

Nesse exemplo vimos a criação do objeto joao com os atributos nome e nascimento que são o seu estado atual.

3. Encapsulamento - agrupar atributos e métodos essenciais em um único objeto e protegê-los. Também pode referir-se à limitação do acesso direto a alguns desses dados, como os componentes de um objeto.

```js
class Humano
  def initialize nome, nasc
    @nome = nome
    @nasc = nasc
  end

  def quem
    puts "Eu sou #{@nome} e nasci em #{@nasc}"
  end
end
```

O encapsulamento envolve agrupar dentro de uma única entidade toda a informação e operações necessárias para

4. Abstração - Fornecer ao 'mundo' exterior apenas as funcionalidades do objeto sem precisar revelar a implementação.

```js
class Quadrado
  def initialize lado
    @lado = lado
  end

  def area
    lado * lado
  end
end

forma = Quadrado.new(5)

forma.area
=> 25
```

5. Herança - a capacidade de uma classe derivar os atributos e métodos de outra classe.

```js
class Human
  def initialize name
    @name = name
  end
end

class Man < Human
  def initialize name, burn
    super(name)
    @burn = burn
  end
end

john = Man.new("John Doe", Date.new(1900,1,1))
```

6. Polimorfirmos - várias classes podem ter mesmo nome de método com comportamentos diferentes. Uma mensagem pode ser exibida em mais de uma forma.

Por meio de herança e interface. Também substituição de método

```js
class Forma
  def area
    raise NotImplementedError, "Método Não Implementado"
  end
end

class Retangulo < Forma
    def initialize(length, width)
        @length = length
        @width = width
    end
    def area
      @length * @width
    end
end

class Circulo  < Forma
    def initialize(radius)
        @radius = radius
    end
    def area
        Math::PI * @radius**2
    end
end

```

Nesse caso a classe Retangulo e Circulo tem o mesmo método `area` mas são implementados de forma diferentes.

Sobrecarga de método

```js
def sum(*args)
  total = 0
  args.each do |arg|
    total = total + arg
  end
  return total
end

sum(1,2,3)
// => 6

sum(10,20)
// => 30
```

7. Mensagem - É quando um objeto faz a solicitação de execução de um método de outro objeto.

```js
class Calc
  def sum(*args)
    total = 0

    args.each do |arg|
      total = total + arg
    end
    return total
  end
  def mul(*args)
    total = 1

    args.each do |arg|
      total = total * arg
    end
    return total
  end
end

class Results
  def initialize operator
    @op = operator
    @res = []
  end

  def call(op, *values)
    total = @op.send(op,*values)
    @res.push(total)
  end
end

```

A classe `Results` recebe o objeto da classe `Calc` e envia mensagens para ele usando o método `call`

8. Vinculação

9. Acoplamento - é o grau de dependência entre duas classes e o quanto ela pode ser usada isoladamente. As alterações de uma classe pode gerar alterações também em outras.

```js
class ShoppingCart
  attr_accessor :items
  def initialize
    @items = []
  end
end
class Order
  def process_order(cart)
    cart.items.map(&:price).inject(:+)
  end
end
```

Nessa implementação as classes `Order` e `Shopping` estão muito acoplados e sabem muito uma sobre a outra

```js
class ShoppingCart
  attr_accessor :items
  def initialize
    @items = []
  end
  def calculate_total
    items.map(&:price).inject(:+)
  end
end

class Order
  def process_order(cart)
    cart.calculate_total
  end
end
```

Neste segundo exemplo o acoplamento está baixo o que é o ideal. A classe Order só sabe que deve enviar uma mensagem para `cart` obtendo o preço total dos itens.

10. Coesão - é a proximidade que os atributos e métodos dentro de uma classe. Objetivo ideal: alta coesão.

```js
class Library
  def loan
    puts "code here loan"
  end

  def book
    puts "code here book"
  end

  def make_coffee
    puts "should not be here"
  end
end
```

O método `make_coffee` não está coeso ou alinhado como o objetivo da classe `Library`. Ou seja a coesão está baixa.

11. Associação - é a conexão entre duas classes que pode se dar um-para-um, um-para-muitos, muitos-para-um, muitos-para-muitos. Exemplo: um médico e seus pacientes que podem existir independentes um do outro mas tem uma associação entre eles.

12. Agregação - um objeto faz parte de um todo mas pode existir separado. É uma forma especial de associação. Se o objeto pai deixa de existir o objeto filho não deixa. Exemplo: departamento e funcionário. O departamento pode possuir o funcionário mas o contrário não é verdade.

13. Composição - um objeto faz parte de um todo e não pode existir separado. É uma forma especial da agregação. Se o objeto pai deixa de existir os objetos filhos também vão.

14. Módulo - divisão de um sistema em muitos componentes funcionais.

15. Construtores - sub-rotina chamada para criar um objeto.
