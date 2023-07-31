let arr=[1,2,3,4]
let res=[arr[0]]
let sum=arr[0]
for(let i=1;i<arr.length;i++){
    sum+=arr[i]
    res.push(sum)
}
console.log(res)
