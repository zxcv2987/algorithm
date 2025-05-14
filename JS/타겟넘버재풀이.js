function solution(numbers, target) {
    var answer = 0;
    function dfs(array, sum, idx){
        if(idx >= array.length){
            if(sum === target) answer ++ 
            console.log('sum', sum)
            return;
        }

        dfs(array, sum + array[idx], idx + 1)
        dfs(array, sum - array[idx], idx + 1)
    }
    
    dfs(numbers, 0, 0)
    return answer;
}
solution([1, 1, 1, 1, 1],	3)