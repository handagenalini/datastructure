let arr = [0,1,2,3,4,5,6,7,8]
function sortbybits(arr){
    arr.sort((a,b)=>{
        let counta=count(a)
        let countb=count(b)
        if(counta==countb){
            return a-b
        }else{
            return counta-countb
        }
    })
    function count(n){
        let count=0
        while(n>0){
            count+=n&1
            n>>=1
        }
        return count
    }
    return arr
}
console.log(sortbybits(arr))