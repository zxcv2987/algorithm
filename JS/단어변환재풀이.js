function solution(begin, target, words) {
    var answer = 0;
    let visited = []
    function bfs(start, words){
        let que = []
        que.push(start)
        let ctr = 0
        let queLen = 1
        
        while(que.length !== 0){
            queLen --
            const node = que.shift()
            if(!visited.includes(node)){
                visited.push(node)
            }
            if(node === target && (ctr < answer || answer ===0 )){
                answer = ctr
            }
            const nodeList = node.split('')
            words.forEach((word, i)=>{
                const wordList = word.split('')
                if(matchList(nodeList, wordList) && !visited.includes(word)){
                    que.push(word)
                }
            })

            if(queLen === 0){
                ctr ++
                queLen = que.length
            }
        }
    }

    function dfs2(begin, words, idx){
                if(idx === words.length) return

        if(begin === target && (idx < answer || answer === 0 )) answer = idx

        if(!visited.includes(begin)){
            visited.push(begin)
        }

        const beginList = begin.split('')
        words.forEach((word)=>{
            const wordList = word.split('')
            if(matchList(beginList, wordList) && !visited.includes(word)){
                dfs2(word, words, idx + 1)
            }
        })
    }

    function matchList(arr1, arr2){
        let diff = 0 
        for(i=0; i<arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                diff ++
            }
        }
        if(diff === 1) return true
    }

    
    if(words.includes(target)){
        bfs(begin, words)
        //dfs2(begin, words, 0)
    }
    console.log(answer)

    return answer;
}
solution("hit",	"cog",	["hot", "dot", "dog", "lot", "log", "cog"])