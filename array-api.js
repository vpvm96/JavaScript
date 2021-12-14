// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(','); // .join (' ') 안에 원하는 구분자를 넣어서 구별하기 쉽게 해줌 (스트링으로 바꿔 줌)
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🍌, 🍒, 🥝';
    const result = fruits.split(','); // .split(' ') 구분자 또는 리밋을 전달받아 배열을 만들어줌
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();  //.reverse() 배열안에 들어있는 아이템의 순서를 거꾸로 바꿔 줌 (배열자체를 바꿈)
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);  // .slice 원하는 부분만 리턴해서 받아오고 싶을때 사용 (배열자체를 바꾸진 않음) 
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array cotaining only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); // .some 하나의 배열이라도 조건에 충족되면 true 

    const result2 = students.every((student) => student.score < 50);
    console.log(result2); // .every 모든배열이 조건에 충족되지 않으면 false
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    // .reduce 우리가 원하는 시작점 부터 모든 배열을 순차적으로 누적된 값을 전달해줌
    console.log(result / students.length);
    
}


// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score) // 학생을 점수로 변환
        .filter((score) => score >= 50) // 그 점수들 중 50점과 같거나 미만인 사람들만 
        .join(); // 스트링으로 바꿔줌
    console.log(result)
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score) // 학생을 점수로 변환
        .sort((a, b) => a - b) // .sort 를 사용하여 점수를 작은 점수부터 순서대로 정렬 (큰 순서로 하고 싶으면 b - a로 사용)
        .join(); // 스트링으로 바꿔줌
    console.log(result);        
}