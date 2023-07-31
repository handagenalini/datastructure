let arr = [1,4,2,5,3]
let l=0
let r=arr.length-1
let sum=0
for(let i=0;i<arr.length;i++){
    r=arr.length-1
    while(l<r){
        if((r-l)%2!=0){
            for(let j=0;j<=(r-l);j++){
                sum+=arr[j]
            }
        

        }
        r--
    }
    l++

}
console.log(sum)