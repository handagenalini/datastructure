class minstack{
    constructor(){
        this.stack=[],
        this.minstack=[]
    }
    push(val){
        this.stack.push(val)
        if(this.minstack.length>0){
            let minval=Math.min(val,this.minstack[this.minstack.length-1])
            this.minstack.push(minval)

        }else{
            this.minstack.push(val)
        }

    }
    pop(){
        if(!this.isempty()){
            this.minstack.pop()
            return this.stack.pop()
        }

    }
    isempty(){
        return this.stack.length===0 && this.minstack.length===0

    }
    getmin(){
        return this.minstack[this.minstack.length-1]

    }
    top(){
        return this.stack[this.stack.length-1]
    }
}
let c=new minstack()
c.push(1)
c.push(2)
c.push(3)
c.push(4)
console.log(c.pop())
console.log(c.top())
console.log(c.getmin())
console.log(c.pop())

