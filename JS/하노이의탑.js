function solution(n) {
    
    let answer = []
    const hanoi = (num, from, to, other) => {
        if (num === 0) return 

        hanoi(num - 1, from, other, to)
        answer.push([from, to])
        hanoi(num - 1, other, to, from )
        return answer
    }
    return hanoi(n, 1, 3, 2)
}
solution(2);