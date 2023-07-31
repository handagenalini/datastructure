class queue{
    constructor(){
        this.queue=[]
        this.queue1=[]
    }
    enqueue(val){
     
      while(this.queue.length>0){
        this.queue1.push(this.queue.shift())
      }
      this.queue.push(val)
      while(this.queue1.length>0){
        this.queue.push(this.queue1.shift())
      }


    }
    dequeue(){
        if(!this.isempty()){
            return this.queue.shift()
        }

    }
 
    top(){
        return this.queue[0]

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
console.log(c.top())
console.log(c.dequeue())

  


