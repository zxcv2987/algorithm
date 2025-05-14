function solution(msg) {
    var answer = [];
    const dictionary = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65));

    while(msg.length > 0){
        let input = msg.split('')
        let prevInput = input.join('')
        while(input.length > 0){
            //현재 글자 + 다음 글자가 사전에 있는지 확인
            const wordIndex = findWord(input.join(''))
            if(wordIndex > -1){
                answer.push(wordIndex + 1)
                msg = msg.slice(input.length, msg.length)
                if(findWord(prevInput) < 0){
                    dictionary.push(prevInput)
                }
                for(i=0; i<input.length -1; i++){
                    input.pop()
                }
                
                break
            }
            prevInput = [...input].join('')
            input.pop()
        }
    }
    function findWord(word){
        for(i=dictionary.length; i>-1; i--){
            if(word == dictionary[i]) return i
        }
        return -1
    }
    return answer;
}

solution('KAKAO')