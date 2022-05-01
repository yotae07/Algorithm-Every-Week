//[공통원소 구하기]
const solution = (arr1, arr2) => {
  let answer = [];
for(let i=0; i < arr1.length; i++) {
	for(let k=0; k < arr2.length; k++) {
  	if(arr1[i] === arr2[k]) {
      answer.push(arr2[k])
    }
	}	  
}
return answer.sort((a,b) => a-b);
}

soluti on([1,3,9,5,2], [3,2,5,7,8]);
