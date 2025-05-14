function solution(skill, skill_trees) {
    var answer = 0

    skill_trees.map((skillTree) => {
        let limitedSkills = []
        for(i of skillTree){
            if(skill.includes(i)){
                limitedSkills.push(i)
            }
        }         
        
        if(skill.slice(0, limitedSkills.length) === limitedSkills.join('')) answer ++ 
        console.log(skill.slice(0, limitedSkills.length), limitedSkills.join(''))
    })
    if(answer === 0 ) answer = -1

    return answer;
}
solution("CBDF", ["BACDE", "CBADF", "AECB", "BDAF"])