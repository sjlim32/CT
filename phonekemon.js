function solution(nums) {
    var answer = 0;
    
    // 중복값 제거
    const arr = nums.filter((ele, idx) => {
        return nums.indexOf(ele) === idx;
    })
    
    // 중복값을 제거한 폰켓몬 배열(arr)이 n/2 보다 크면 ? answer = n/2 : answer = arr.length
    if (arr.length >= nums.length/2) {
        answer = nums.length/2
    } else { answer = arr.length}
    
    return answer
}