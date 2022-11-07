let isOnSale = true
let isDiscountItem = true

console.log(isOnSale && isDiscountItem) // true && true 이므로 true
console.log(isOnSale || isDiscountItem) // true || true 이므로 true

isOnSale = false
console.log(isOnSale && isDiscountItem) // false && true 이므로 false
console.log(isOnSale || isDiscountItem) // false || true 이므로 true

isDiscountItem = false
console.log(isOnSale && isDiscountItem) // false && false 이므로 false
console.log(isOnSale || isDiscountItem) // false || false 이므로 false

console.log(!isOnSale) // !false 이므로 true

console.log(1 === 1) // true
console.log(1 === 2) // false
console.log("Javascript" === "Javascript") // true
console.log("Javascript" === "javascript") // 대소문자나 띄워쓰기도 다 정확히 일치해야 해요. 따라서 false

console.log(1 === "1") // false를 출력
console.log(1 == "1") // true를 출력

const shoesPrice = 200000
const capPrice = 100000
const totalPrice = shoesPrice + capPrice

consoel.log(`총 ${totalPrice * 0.8}원에 물건을 구입합니다.`)
const shoesPrice2 = 200000
const capPrice2 = 100000
const totalPrice2 = shoesPrice + capPrice

consoel.log(`총 ${totalPrice * 0.8}원에 물건을 구입합니다.`)
