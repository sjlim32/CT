function solution(participant, completion) {
    var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
    return participant.find(t=> {
        if(dic[t])
            dic[t] = dic[t]-1;
        else 
            return true;
    });
}

function solution(participant, completion) { 
    const completeObj = {} 
    
    // 완주자 명단 만들기 
    completion.forEach(name => { 
        // 명단에 없는 이름이면 { 이름: 1 } 
        if (!completeObj[name]) completeObj[name] = 1 
        // 이미 올라간 이름이면 등장횟수++ 
        else completeObj[name]++ }) 
        // 참가자와 완주자 명단 비교 
        return participant.find(
            name => { 
                // 현 참가자가 완주자 명단에 있고, 값이 0이 아니면 값-- 
                if (completeObj[name]) completeObj[name]-- 
                // 명단에 없거나 값이 0이면 리턴 
                else return name }) }

function solution(participant, completion) { 
    const completeObj = {} 
    // 완주자 명단 만들기 
    completion.forEach(name => (completeObj[name] = (completeObj[name] | 0) + 1)); 
    // 참가자와 완주자 명단 비교 (해서 명단에 없거나 값이 0이면 리턴) 
    return participant.find((name) => !completeObj[name]--) }

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
