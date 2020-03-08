class Person{
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  fullName(){
    return this.name.charAt(0).toUpperCase() + this.name.substring(1).toLowerCase() + " " + this.surname.toUpperCase();
  }

  initials(){
    return this.name.charAt(0).toUpperCase() + '.' + this.surname.charAt(0).toUpperCase() + '.'
  }
}


let person1 = new Person("Jan", "Nowak");
console.log(person1.fullName());
console.log(person1.initials());


let person2 = new Person("Kateryna", "Herasymenko");
console.log(person2.fullName());
console.log(person2.initials());

