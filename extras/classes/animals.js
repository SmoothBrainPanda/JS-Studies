class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }

	static parentTest() {
		console.log('Parent static method');
	}
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }

	static childTest() {
		console.log('Child static method');
	}
}

const myDog = new Dog("Poundcake", "Long");
myDog.makeSound();
myDog.bark();
Dog.parentTest()
Dog.childTest()
