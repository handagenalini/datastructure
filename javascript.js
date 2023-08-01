function Person(firstName, lastName, age, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
  
    this.printFullName = function () {
      console.log(this.firstName + " " + this.lastName);
    };
  }
  
  const person1 = new Person("yash", "prasad", 10, "M");
  const person2 = new Person("vaibhav", "prasad", 20, "M");
  
  function isEligibleForDisco(person) {
    if(person.age >= 18){
        return person.firstName +' is eligible'
    };
    return person.firstName +' is not eligible'
  }
  
  // Test if persons are eligible for the disco
  console.log(person1.firstName + " is eligible for disco: " + isEligibleForDisco(person1));
  console.log(person2.firstName + " is eligible for disco: " + isEligibleForDisco(person2));
  
  // Output:
  // yash is eligible for disco: false
  // vaibhav is eligible for disco: true
  
