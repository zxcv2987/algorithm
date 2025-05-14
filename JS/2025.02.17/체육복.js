function solution(n, lost, reserve) {
    var answer = 0;

    let lostArray = lost.sort((a, b) => a - b)
    let reserveArray = reserve.sort((a,b) => a - b)

    for(i of lostArray){
        if(lostArray.includes(i) && reserveArray.includes(i)){
            lostArray = lostArray.filter((e) => e !== i)
            reserveArray = reserveArray.filter((e) => e !== i)
        }
    }
    for(i of lostArray){
        if(reserveArray.includes(i - 1) || reserveArray.includes(i + 1)){
            lostArray = lostArray.filter((e) => e !== i)
            reserveArray = reserveArray.includes(i - 1) ? reserveArray.filter((e) => e !== i - 1 ) : reserveArray.filter((e)=> e!==i+1)
        }
    }
    
    answer = n - lostArray.length
    return answer;
}
solution(5,	[2, 4],	[1, 3, 5])
solution(3,	[3]	,[1])