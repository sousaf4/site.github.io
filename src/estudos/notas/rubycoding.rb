# class
class Human
  def initialize name, nasc # constructor
    @name = name
    @nasc = nasc
  end
end

class Woman < Human
    attr_reader :genre # getters
    attr_writer :name # setters
    attr_accessor :nasc # getters setters

    def initialize name, nasc
        super(name, nasc)
        @genre = 'woman'
    end
end


class Man < Human
    attr_reader :genre # getters
    attr_accessor :name, :nasc # getters setters

    def initialize name, nasc # constructor
        super(name, nasc)
        @genre = 'man'
    end

    def speak
        puts "Bla bla bla"
    end
end


# w = Woman.new "Maria", Date.new(1900,1,1)
# m = Man.new "Jose", Date.new(1900,1,1)