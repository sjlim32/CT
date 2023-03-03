function solution(participant, completion) {
    var answer = '';
    
    // 마라톤 참가자 1명 이상 100,000명 이하
    // completion 길이는 participant 보다 1 작음
    
    arr = [... new Set(participant)]
    
    arr.length === completion.length
    ? answer = participant.filter((name, idx)=> participant.indexOf(name) !== idx)
    : answer = participant.filter(name => !completion.includes(name))

    return answer[0];
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));