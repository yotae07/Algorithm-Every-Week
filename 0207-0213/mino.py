x, y, w, s = map(int, input().split(' '))
if x == y:
    print(min(x*s, x*2*w))
else:
    if y > x:
        temp = x
        x = y
        y = temp
    gap = x-y
    print(
        min(s*y, 2*w*y) + (w + (gap-1) * min(w, s)) if gap % 2 == 1
        else min(s * y, 2*w*y) + (gap * min(w, s))
    )
