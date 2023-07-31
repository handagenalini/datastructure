class listnode{
    constructor(val,next){
        this.val=val,
        this.next=next
    }
}
function cycle(head){
    if(head==null){
        return
    }
    let fast=head
    let slow=head 
    while(fast && fast.next){
        fast=fast.next.next
        slow=slow.next
        if(slow==fast){
            slow=head
            while(slow!=fast){
                slow=slow.next
                fast=fast.next
            }
            return slow
        }
    }
    return null


}
let k=2
// console.log(rotetatelist(head,k))
let node5=new listnode(6)
let node4=new listnode(5,node5)
let node3=new listnode(4,node4)
let node2=new listnode(3,node3)


let node1=new listnode(2,node2)
let head=new listnode(1,node1)
console.log(cycle(head))
console.log(head)

  


