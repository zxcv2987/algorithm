T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    
    a, b, n = map(int, input().split())
    print(a, b, n)
    
    i = 0
    while(True):
        i += 1
        if(a > b):
            b += a
        else:    
            a += b  
        if(a > n or b > n):
            break
    print(i)
