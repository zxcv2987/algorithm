function solution(maps) {
    var answer = 0;

    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]

    let isSuccess = false

    function canMove(x, y){
        let canMove = Array(4).fill([])
        for(i=0; i<4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(nx < 0 || ny < 0 || nx >= maps[0].length || ny >= maps.length) continue

            if(maps[ny][nx] === 0) continue
            if(maps[ny][nx] === 1) canMove[i] = [nx, ny]
            
            }
            return canMove
    }    

    function isVisited(visited, node){
        let i = visited.length - 1
        while(i > -1){
            if(visited[i][0] === node[0] && visited[i][1] === node[1]) return true
            i --
        }
        return false
    }

    function bfs(){
        let que = [[0,0]]
        let visited = new Set()
        visited.add('0,0')
        let ctr = 1
        let queLen = 1

        while(que.length !== 0){
            queLen --
            let node = que.shift()
            console.log('현재 위치 : ',node)
            const [x, y] = node
            if(x == maps[0].length - 1 && y == maps.length - 1){
                isSuccess = true
                break
            }
            
            if(!visited.has(`${x},${y}`)) visited.add(`${x},${y}`)
        

            for(i=0; i<4; i++){
                const nx = x + dx[i]
                const ny = y + dy[i]
                if(nx < 0 || ny < 0 || nx >= maps[0].length || ny >= maps.length) continue
    
                if(maps[ny][nx] === 0) continue
                if(maps[ny][nx] === 1){
                    if(!visited.has(`${nx},${ny}`)) que.push([nx, ny])
                }
                
                }

            if(queLen === 0){
                ctr ++
                console.log('ctr --------------', ctr)
                queLen = que.length 
                answer = ctr
            }
            
        }
        
    }
    bfs()

    if(!isSuccess) return -1
    return answer;
}

solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1],[0,0,0,0,1]])