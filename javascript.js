
let n=7
function alternatingbits(n){
let str=n.toString(2)
let flag=false
for(let i=0;i<str.length-1;i++){
    if(parseInt(str[i])+parseInt(str[i+1])==1){
        flag=true
    }else{
        flag= false
        return flag
    }
}
return flag
}
console.log(alternatingbits(n))