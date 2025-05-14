function solution(word) {
    var answer = 0;
    const words = ['A', 'E', 'I', "O", 'U']
    let dictionary = []

    words.map((word, idx) => {
        dictionary.push(word)


        //1단계
        for(j=0; j<word.length; j++){
            
            for(i=0; i<4; i++){
                let z = 0
                let w = word
                while(z<i + 1){
                    w = w+word
                    z++
                }
                dictionary.push(w)
            }
        }

        console.log(dictionary)
    })
    
    return answer;
}
solution('h')