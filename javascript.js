// store n prime numbers in an array
let n=5
let i=2
let arr=[]
while(arr.length<n){
    if(isprime(i)){
        arr.push(i)
      
 }
 i++
}
function isprime(num){
    if(num<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false
        }
    }
    return true

}
console.log(arr)