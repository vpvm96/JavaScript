class Article {
    static publisher = "leo"
    constructor(articleNumber) {
        this.articleNumber = articleNumber
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article()
const article2 = new Article(2)
console.log(article2.articleNumber) // 2
console.log(Article.publisher) // leo
Article.printPbulisher() // leo
