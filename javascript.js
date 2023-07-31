class listnode{
    constructor(val,next){
        this.val=val,
        this.next=next
    }
}
function rotetatelist(head,k){
    if(head==null){
        return
    }
    let size=1
    let cur=head
    while(cur.next){
        cur=cur.next
        size+=1
    }
    cur.next=head
    for(let i=0;i<(size-(k%size)-1);i++){
        head=head.next

    }
    let res=head.next
    head.next=null
    return res
}
let k=2
// console.log(rotetatelist(head,k))
let node5=new listnode(6)
let node4=new listnode(5,node5)
let node3=new listnode(4,node4)
let node2=new listnode(3,node3)


let node1=new listnode(2,node2)
let head=new listnode(1,node1)
console.log(rotetatelist(head,k))
console.log(head)

  


