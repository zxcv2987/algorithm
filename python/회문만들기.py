"""
1. 아이디어


회문의 조건 
    원본과 .reverse가 같다

회문일 경우 return 0

x를 제외한 문자열이 회문이어야 한다?


2. 시간복잡도

3. 변수
"""


T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    
    s = input()
    answer = 0

    #이미 회문이면 리턴
    if(s == s[::-1]):
        answer = 0
        print(answer)
        continue

    #x를 제외한 문자열이 회문이 아니면 -1 리턴
    sWithoutX  = s.replace("x","")
    if(sWithoutX != sWithoutX[::-1]):
        answer = -1
        print(answer)
        continue
    
    # 0 1 2 3
      
    left =  0
    right = len(s) - 1

    while left < right:
        if s[left] == s[right]:
            left += 1
            right -= 1
        elif s[left] == 'x':
            left += 1
            answer += 1
        elif s[right] == 'x':
            right -= 1
            answer += 1
        else:
            answer = -1
        
    print(answer)
        



