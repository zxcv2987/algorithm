function solution(s) {
    var answer = [];
    const sList = s.split('},')
    let dictionary = []
    let answerList = []

    sList.map((word, idx) => {
        dictionary.push(word.replace(/[{}]/g, ''))
    })
    dictionary.map((word, idx) => {
        dictionary[idx] = word.split(',')
        dictionary[idx] = dictionary[idx].map( e => Number(e))
    })
    
    dictionary.sort((a, b) => a.length - b.length)

    dictionary.map((word, idx) => {
        word.map((e, idx) => {
            if(!answer.includes(e)) answer.push(e)
        })
    })
    return answer;
}

solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")