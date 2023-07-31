// bubble sort
let arr=[2,4,1,5,3,6]
for(let i=0;i<arr.length;i++){
    let current=arr[i]
    let j=i-1
    while(j>=0 && current<arr[j]){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=current
}
console.log(arr)