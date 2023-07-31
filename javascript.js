class student{
    constructor(name,rollno){
        this.name=name,
        this.rollno=rollno
    }
    display(){
        console.log('my name is '+this.name+' this is my roll no '+this.rollno)
    }
}
let c=new student('jhon',12)
c.display()