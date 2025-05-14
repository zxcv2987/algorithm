function solution(numbers, target) {
    var answer = 0;
    const length  = numbers.length;

    function dfs(idx, current, sum){
        if(idx > length) return null;
        if(idx == length && sum == target) {
            answer = answer + 1;
        }

        if(idx < length) sum = sum + current;
        
        dfs(idx+1, numbers[idx+1], sum)
        dfs(idx + 1, -numbers[idx + 1], sum)
    }
    dfs(0, numbers[0], 0)
    dfs(0, -numbers[0],0)

    return answer/2;
}

solution([1,1,1,1,1],3);