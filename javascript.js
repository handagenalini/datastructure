class queue{
    constructor(){
        this.queue=[]
    }
    enqueue(val){
        this.queue.push(val)

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

