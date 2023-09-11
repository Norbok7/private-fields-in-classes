class Person {
  #id; 
  // Write code here
constructor(id) {

this.#id = id;
}
getNum() {
  return Math.random * this.#id;
}

}
const person = new Person()
console.log(person.getNum(Math.random()));

module.exports = Person;
