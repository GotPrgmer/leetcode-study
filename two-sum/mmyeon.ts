/**
 *
 * 접근 방법 :
 *  - 이미 방문한 숫자와 인덱스를 맵에 저장
 *  - nums 배열 순회하면서, 찾는 숫자 가 없으면 맵에 값, 인덱스 추가하기
 *  - 맵에 존재하면 현재 인덱스와, 해당 숫자의 인덱스 담아서 즉시 리턴하기
 *
 * 시간복잡도 : O(n)
 *  - nums 배열 길이만큼 1회 순회하니까 O(n)
 *  - 맵 조회 및 삽입은 O(1)
 *
 * 공간복잡도 : O(n)
 *  - 맵에 배열의 값 저장하니까 O(n)
 *
 * 엣지 케이스 :
 *  - 동일한 숫자가 있는 경우 : [3, 3], 6 => [0,1]
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const neededValue = target - nums[i];

    if (map.has(neededValue)) {
      return [map.get(neededValue)!, i];
    }

    map.set(nums[i], i);
  }
}