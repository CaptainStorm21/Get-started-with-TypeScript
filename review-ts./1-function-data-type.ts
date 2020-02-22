function greeting (person: string){
  return "Good morning " + person;
}

var user = "Marty";
//cannot assign value 123 to var user ---error due to type restraint
console.log(greeting(user))
