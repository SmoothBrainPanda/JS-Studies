class Person {
  firstName;
  lastName;
  dob;
  idNumber;
  age;

  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.dob = data.dob;
    this.idNumber = data.idNumber;

    this.calculateAge();
  }

  calculateAge() {
    const personYear = parseInt(this.dob);
    const thisYear = 2026;

    this.age = thisYear - personYear;
  }
}

const data = [
  {
    firstName: "Connor",
    lastName: "Gladwin",
    dob: "1995",
    idNumber: 1234,
  },
  {
    firstName: "Steph",
    lastName: "Gladwin",
    dob: "1997",
    idNumber: 1235,
  },
  {
    firstName: "Dylan",
    lastName: "Charlmers",
    dob: "1995",
    idNumber: 1236,
  },
  {
    firstName: "Courts",
    lastName: "Chalermerers?",
    dob: "1993",
    idNumber: 1237,
  },
];

const peoples = [];

data.map((x) => {
  peoples.push(new Person(x));
});

console.log(peoples);
