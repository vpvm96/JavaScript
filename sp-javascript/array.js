{
  // 1번째 방법
  const arr1 = new Array(1, 2, 3, 4, 5)

  // 2번째 방법
  const arr2 = [1, 2, 3, 4, 5]

  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ]

  console.log(rainbowColors[0]) // o번 인덱스를 통해서 데이터에 접근. red
  console.log(rainbowColors[1]) // 1번 인덱스를 통해서 데이터에 접근. orage
  console.log(rainbowColors[2]) // 2번 인덱스를 통해서 데이터에 접근. yellow
  console.log(rainbowColors[3]) // 3번 인덱스를 통해서 데이터에 접근. green
  console.log(rainbowColors[4]) // 4번 인덱스를 통해서 데이터에 접근. blue
  console.log(rainbowColors[5]) // 5번 인덱스를 통해서 데이터에 접근. indigo
  console.log(rainbowColors[6]) // 6번 인덱스를 통해서 데이터에 접근. violet
}
{
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ]

  console.log(rainbowColors.length) // 7을 출력

  console.log(rainbowColors[rainbowColors.length - 1]) // length 를 응용하여 배열의 마지막 요소도 쉽게 찾아서 출력 가능!
}

{
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ]

  rainbowColors.push("ultraviolet") // 배열의 마지막에 ultarviolet 추가
  console.log(rainbowColors) // ultraviolet이 추가된 rainbowColors 출력

  rainbowColors.pop() // 배열의 마지막 요소 ultraviolet을 제거
  console.log(rainbowColors) // ultraviolet이 제거된 rainbowColors 출력
}

{
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ]

  for (let i = 0; i < rainbowColors.length; i++) {
    console.log(rainbowColors[i])
  }
}

{
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ]

  for (const color of rainbowColors) {
    console.log(color)
  }
}

{
  const priceList = [
    1000, 2000, 5000, 7000, 10000, 9000, 3000, 15000, 20000, 17000,
  ]
  let sum = 0

  for (const price of priceList) {
    sum += price
  }

  const avg = sum / priceList.length
  console.log(`합계: ${sum}, 평균: ${avg}`)
}
