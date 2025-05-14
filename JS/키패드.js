function solution(numbers, hand) {

    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    var answer = '';

    let currentLeft = keypad["*"]
    let currentRight = keypad['#']

    numbers.forEach(element => {
        if([1,4,7].includes(element)){
            currentLeft = keypad[element]
            answer += "L"
        }
        if([3,6,9].includes(element)){
            currentRight = keypad[element]
            answer += "R"
        }
        if([2,5,8,0].includes(element)){
            const leftToTarget = Math.abs(currentLeft[0] - keypad[element][0]) + Math.abs(currentLeft[1] - keypad[element][1])
            const rightToTarget = Math.abs(currentRight[0] - keypad[element][0]) + Math.abs(currentRight[1] - keypad[element][1])

            
            if(leftToTarget > rightToTarget){
                currentRight = keypad[element]
                answer += "R"
            }
            if(leftToTarget < rightToTarget){
                currentLeft = keypad[element]
                answer += "L"
            }
            if(leftToTarget === rightToTarget){
                if(hand == 'right'){
                    currentRight = keypad[element]
                    answer += "R"
                }
                else{
                    currentLeft = keypad[element]
                    answer += 'L'
                }
            }
        }

    });
    return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],	"right")