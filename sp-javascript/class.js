class Notebook {
  constructor(name, price, company) {
    this.name = name
    this.price = price
    this.company = company
  }
}

const notebook1 = new Notebook("Macbook Air", 2000000, "Apple")

console.log(notebook1)
console.log(notebook1.name)
console.log(notebook1.price)
console.log(notebook1.company)

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  printInfo() {
    console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
  }
}

const notebook = new Product("Apple Macbook Air M2", 2000000)

notebook.printInfo()

const computer = {
  name: "Apple Macbook Air M2",
  price: 2000000,
  printInfo: function () {
    console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
  },
}

computer.printInfo()

{
  class Cloth {
    constructor(color, size, price) {
      this.color = color
      this.size = size
      this.price = price
    }

    printInfo() {
      console.log(
        `컬러: ${this.color}, 사이즈: ${this.size}, 가격: ${this.price}원`
      )
    }
  }

  const coat = new Cloth("navy", "L", 200000)
  const pants = new Cloth("black", "M", 100000)

  coat.printInfo()
  pants.printInfo()
}
