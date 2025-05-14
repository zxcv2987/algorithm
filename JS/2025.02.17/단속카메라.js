function solution(routes) {
    var answer = 0;
    let routesArray = routes;

    function isOverlap(a, b){
        if(b[0] === a[0] || b[0] === a[1]) return b[0]
        if(b[1] === a[0] || b[1] === a[1]) return b[1]
        if(b[0] >= a[0] && b[0] <= a[1]) return b[0]
        if(b[1] >= a[0] && b[1] <= a[1]) return b[1]
        if(a[0] >= b[0] && a[0] <= b[1]) return a[0]
        if(a[1] >= b[0] && a[1] <= b[1]) return a[1]

        return null
    }

    while(routesArray.length !== 0){
        const node = routesArray.shift()

        routesArray.forEach((route)=>{
            const constNode = isOverlap(node, route)
            if(constNode){
                routesArray = routesArray.filter((e) => route !== e)
            }
        })
        answer ++ 
   
    }
    

    return answer;
}

solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]])