"""
1. 아이디어
L과 R 중 어떤것이 많은지 탐색
L 수만큼 + 1
R 수만큼 - 1

2. 시간복잡도
아이디어 1 : O(2N)

3. 변수
? : 문자열


"""

T = int(input())

for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    str = input()
    
    def solution(str, strTemp):
        strTemp = strTemp.replace("?", str)
        count = 0
        max = 0

        for word in strTemp:
            if(word == "L"):
                count += 1
            else:
                count -= 1
            if(abs(count) > max):
                max = abs(count)

        return max

    LCount = solution("L", str)
    RCount = solution("R", str)

    answer = LCount if LCount > RCount else RCount
    print(answer)
    

