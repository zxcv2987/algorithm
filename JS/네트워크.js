function solution(n, computers) {
    var answer = 0;

    let visited = []
    function dfs(array, start){
        let stack = []
        stack.push(start)
        while(stack.length !== 0){
            const node = stack.shift()
            if(!visited.includes(node)) visited.push(node)
    
            array[node].forEach((e,i) => {
                if(e === 1 && node !== i && !visited.includes(i)){
                    stack.push(i)
                }
            });
        }
    }

    for(i = 0; i < n; i ++){
        if(!visited.includes(i)){
            answer ++
            dfs(computers, i)
        }
    }

    return answer;
}
solution(3,	[[1, 1, 0], [1, 1, 1], [0, 1, 1]])