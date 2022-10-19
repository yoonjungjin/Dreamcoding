// let arr = [1,2]
// // 배열자체를 바로 들고옴 -> [1,2]
// console.log(arr)

// //arr1안에 들어있는 값을 순차적으로 꺼내옴 -> 1 줄바꿈 2
// let m = arr.map(x => console.log(x))
// let n = arr.map(x => console.log(x*2))

// let arr2 = [[1,2],[3,4]]

// // 풀어서 설명하면 x의 index 값을 [1,2] [3,4] 를 가져와서 그걸 map을 또 시키면 각 원소의 값을 가져올 수 있음
// // 여기서 i는 index를 의미 , arr3안에 들어있는 값을 순차적으로 꺼내몽 -> 1 줄바꿈 2 줄바꿈 3 줄바꿈 4
// // let w = arr2.map(x => console.log(x))
// // let t = arr2.map((x) => x.map(x => console.log(x)))


// // // arr2 배열 각 원소에 2를 곱하고 그 배열 자체를 들고옴 -> [ [ 2, 4 ], [ 6, 8 ] ]
// let s = arr2.map((x,i) => x.map(x => x*2))
// console.log(s)

// // 문제
// let arr3 = [[1,2],[3,4]]
// let arr4 = [[5,6],[7,8]]
// function solution1(A,B) {
// return A.map((a,i) => a.map((b, j) => b + B[i][j]));
// }
// console.log(solution1(arr3, arr4))


// // // arr1의 배열값을 받아서 ( [1,2], [2,3] ) 그걸 다시 map으로 하여 1,2,3,4 를 만들어주고
// // // b가 1일때 자리가 0의 0번이니 i = 0 j = 0 이 들어가서 B[0][0]을 꺼내와서 더해준다 나머지도 같음
// [[6,8],[10,12]]
// function solution2(A,B) {
// return A.map((a,i) => a.map((b,j) => {
// console.log("Value1: " + b)
// console.log("Value2: " + B[i][j])
// return b + B[i][j]
// }));
// }
// let arr3 = [[1,2],[3,4]]
// let arr4 = [[5,6],[7,8]]
// console.log(solution2(arr3, arr4))



// // 문제
// let arr3 = [[1,2],[3,4]]
// let arr4 = [[5,6],[7,8]]
// let arr5 = [[9,10],[11,12]]

// // arr1의 배열값을 받아서 ( [1,2], [2,3] ) 그걸 다시 map으로 하여 1,2,3,4 를 만들어주고
// // b가 1일때 자리가 0의 0번이니 i = 0 j = 0 이 들어가서 B[0][0]을 꺼내와서 더해준다 나머지도 같음
// // [[6,8],[10,12]]
// function solution2(A,B,C) {
// return A.map((a,i) => a.map((b,j) => {
// console.log("Value1: " + b)
// console.log("Value2: " + B[i][j])
// console.log("Value3: " + C[i][j])
// return b + B[i][j] + C[i][j]
// }));
// }
// console.log(solution2(arr3, arr4, arr5))

// let arr3 = [[[1,2],[3,4]],[[5,6],[7,8]]]
// let arr4 = [[[9,10],[11,12]],[[13,14],[15,16]]]

// function solution2(A,B) {
// return A.map((a,i) => a.map((b,j) => b.map((c,k) =>{
// // console.log("Value1: " + b)
// // console.log("Value2: " + B[i][j][k])
// return c + B[i][j][k]
// })));
// }
// console.log(solution2(arr3, arr4))