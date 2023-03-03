function solution(participant, completion) {
    var answer = '';
    
    // 마라톤 참가자 1명 이상 100,000명 이하
    // completion 길이는 participant 보다 1 작음
    
    var arr1 = participant.sort()
    var arr2 = completion.sort()

    for ( let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i]
        }
    }
    
    return participant;
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));