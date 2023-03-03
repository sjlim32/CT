function solution(participant, completion) {
    var answer = '';
    
    // 참가자에 중복값 검색, 있으면 중복값 출력
    // 중복값 없으면, 참가자, 완주자 비교 후 없는값 출력

    const loser = participant.filter(name => !(completion.includes(name)))

    if (loser.length > 0 ) {
        answer = loser[0]
    } else {
        participant.filter((name, idx) => {
            if (participant.indexOf(name) !== idx ) {
                return answer = name
            }
        });
    }
    
    return answer;
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));