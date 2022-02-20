function solution(sizes) {
    const [width, height] = sizes.map((size) => size.sort((a,b) => b-a)).reduce((a,b) => {
        for(let i=0; i<2; i++) {
            if (a[i] < b[i]) {
                a[i] = b[i];
            }
        }

        return a;
    }, [0,0]);

    return width * height;
}

// 다른 사람 풀이

function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}