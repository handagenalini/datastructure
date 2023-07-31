class queue{
    constructor(){
        this.queue=[]
        this.k=5
    }
    enqueue(val){
        if(!this.isfull()){
        this.queue.push(val)
        }

    }
    dequeue(){
        if(!this.isempty()){
            return this.queue.shift()
        }

    }
    front(){
        return this.queue[0]

    }
    rear(){
        return this.queue[this.queue.length-1]

    }
    isempty(){
        return this.queue.length===0

    }
    isfull(){
        return this.queue.length==this.k
    }

}
let c=new queue()
c.enqueue(1)
c.enqueue(2)
c.enqueue(3)
c.enqueue(4)
c.enqueue(5)
console.log(c.dequeue())
console.log(c.front())
console.log(c.rear())
console.log(c.dequeue())
c.enqueue(1)
console.log(c.dequeue())
console.log(c.dequeue())
console.log(c.front())


c.enqueue(2)
c.enqueue(3)
c.enqueue(4)
c.enqueue(5)

