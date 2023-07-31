class stack{
    constructor(){
        this.stack=[]
        this.stack1=[]
    }
    enqueue(val){
     
      this.stack.push(val)
    


    }
    dequeue(){
        if(!this.stack.length>0){
            return this.stack1.pop()
            
        }else{
        while(this.stack.length>0){
            this.stack1.push(this.stack.pop())
        }
        return this.stack1.pop()
    }

    }
 
    front(){
        if(!this.stack1.length>0){
            return this.stack1[this.stack1.length-1]
            
        }else{
        while(this.stack.length>0){
            this.stack1.push(this.stack.pop())
        }
        return this.stack1[this.stack1.length-1]
    }
        
    }
    isempty(){
        if(this.stack1.length===0 && this.stack.length===0){
            return true
        }else{
            return false
        }

    }
  
}
let c=new stack()
c.enqueue(1)
c.enqueue(2)
c.enqueue(3)
c.enqueue(4)
c.enqueue(5)
console.log(c.dequeue())
console.log(c.front())
console.log(c.dequeue())

  


