class student{
    static count=0
    constructor(name,rollno){
        this.name=name,
        this.rollno=rollno
        student.count++
    }
    display(){
        console.log('my name is '+this.name+' this is my roll no '+this.rollno)
    }
    static countobj(){
        console.log(student.count)

    }
}
let c=new student('jhon',12)
let a=new student('jhon',12)

c.display()
student.countobj()