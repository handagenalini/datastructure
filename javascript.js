
// pyash,yash@gmail.com,password123,MONTHLYPACKAGE
class person{
    constructor(name,email,password,packagetype){
        this.name=name,
        this.email=email,
        this.password=password,
        this.packagetype=packagetype
        this.date=new Date('2023-08-01')
    }
    print(){
        if(this.packagetype==='monthlypackage'){
            const newdate=new Date(this.date)
        
        newdate.setMonth(this.date.getMonth()+1)
        return 'membership active date '+newdate.toDateString()
        }else{
        const newdate=new Date(this.date)
        newdate.setFullYear(this.date.getFullYear()+1)
        return 'membership active date '+newdate.toDateString()


        }
    }

}
let person1=new person('pyash','yash@gmail.com','yash','monthlypackage')
console.log(person1.print())
let person2=new person('pvaibhav','vaibhav@gmail.com','vaibhav','yearlypackage')

console.log(person2.print())
