let account= [[1,2,3],[3,2,1]]
let max=0
for(let i=0;i<account.length;i++){
let sum=account[i].reduce((acc,num)=>{
    return acc+num
},0)
// console.log(sum)
max=Math.max(max,sum)
}
console.log(max)
