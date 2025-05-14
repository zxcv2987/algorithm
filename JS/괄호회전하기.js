function solution(s) {
    var answer = 0;
    const count = s.length;

    let current = s.split('')
    for(i=0; i<count; i++){
        console.log(current)
        let okCount = 0
        let stack = [...current]
        let node = stack.pop()
        
        for(j=0; j<count; j++){
            console.log(node, current[j])
            console.log(isAlright(node, current[j]))
            if(isAlright(node, current[j])) okCount ++
        }
        current.push(current[0])
        current.shift() 

        if(okCount == count) answer ++
    }

    function isAlright(node, current){
        if(node == '[' && current == ']' || current == '[' && node == ']' ||
            node == '{' && current == '}' ||  current == '{' && node == '}' ||
             node == '(' && current == ')' || current == '(' && node == ')'
            ) return true
    } 
    console.log(answer)
    if (s.length % 2 == 1) answer = 0
    return answer;
}

solution("[]()[]")