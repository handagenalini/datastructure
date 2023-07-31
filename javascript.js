//maximum sum subarray 
let arr=[5,2,-4,-5, 3,-1,2,3,1]
let currsum=arr[0]
let max=arr[0]
for(let i=1;i<arr.length;i++){
    currsum=Math.max(arr[i],currsum+arr[i])
    max=Math.max(currsum,max)

}
console.log(max)
