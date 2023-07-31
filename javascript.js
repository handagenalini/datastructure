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
    let dummy=new listnode(0)
    dummy.next=head
    let left=dummy
    let right=head
    while(k>0 && right){
        right=right.next
        k--
    }
    while(right){
        right=right.next
        left=left.next
    }
    left.next=left.next.next
    return dummy.next

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

  


