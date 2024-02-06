Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration files
Add the files below to your project directory

package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
and…
Don’t forget to run $ npm install when you have the package.json

Tasks
0. You used to attend a place like this at some point
mandatory
Score: 50.0% (Checks completed: 100.0%)
Implement a class named ClassRoom:

Prototype: export default class ClassRoom
It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize
bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 0-classroom.js
    
1. Let's make some classrooms
mandatory
Score: 50.0% (Checks completed: 100.0%)
Import the ClassRoom class from 0-classroom.js.

Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).

bob@dylan:~$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 1-make_classrooms.js
    
2. A Course, Getters, and Setters
mandatory
Score: 50.0% (Checks completed: 100.0%)
Implement a class named HolbertonCourse:

Constructor attributes:
name (String)
length (Number)
students (array of Strings)
Make sure to verify the type of attributes during object creation
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
bob@dylan:~$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 2-hbtn_course.js
    
3. Methods, static methods, computed methods names..... MONEY
mandatory
Score: 50.0% (Checks completed: 100.0%)
Implement a class named Currency:

- Constructor attributes:
code (String)
name (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullCurrency that will return the attributes in the following format name (code).
bob@dylan:~$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 3-currency.js
    
4. Pricing
mandatory
Score: 50.0% (Checks completed: 100.0%)
Import the class Currency from 3-currency.js

Implement a class named Pricing:

Constructor attributes:
amount (Number)
currency (Currency)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 4-pricing.js
    
5. A Building
mandatory
Score: 50.0% (Checks completed: 100.0%)
Implement a class named Building:

Constructor attributes:
sqft (Number)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter for each attribute.
Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage
bob@dylan:~$ cat 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 5-building.js
    
6. Inheritance
mandatory
Score: 50.0% (Checks completed: 100.0%)
Import Building from 5-building.js.

Implement a class named SkyHighBuilding that extends from Building:

Constructor attributes:
sqft (Number) (must be assigned to the parent class Building)
floors (Number)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter for each attribute.
Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.
bob@dylan:~$ cat 6-main.js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 6-sky_high.js
    
7. Airport
mandatory
Score: 50.0% (Checks completed: 100.0%)
Implement a class named Airport:

Constructor attributes:
name (String)
code (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
The default string description of the class should return the airport code (example below).
bob@dylan:~$ cat 7-main.js
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 7-airport.js
    
8. Primitive - Holberton Class
mandatory
Score: 50.0% (Checks completed: 100.0%)
Implement a class named HolbertonClass:

Constructor attributes:
size (Number)
location (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
When the class is cast into a Number, it should return the size.
When the class is cast into a String, it should return the location.
bob@dylan:~$ cat 8-main.js
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
12
Mezzanine
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 8-hbtn_class.js
    
9. Hoisting
mandatory
Score: 50.0% (Checks completed: 100.0%)
Fix this code and make it work.

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
Result:

bob@dylan:~$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 9-hoisting.js
    
10. Vroom
mandatory
Score: 50.0% (Checks completed: 100.0%)
Implement a class named Car:

Constructor attributes:
brand (String)
motor (String)
color (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Add a method named cloneCar. This method should return a new object of the class.
Hint: Symbols in ES6

bob@dylan:~$ cat 10-main.js
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 10-car.js
    
11. EVCar
#advanced
Score: 50.0% (Checks completed: 100.0%)
Import Car from 10-car.js.

Implement a class named EVCar that extends the Car class:

Constructor attributes:
brand (String)
motor (String)
color (String)
range (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.
bob@dylan:~$ cat 100-main.js
import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x02-ES6_classes
File: 100-evcar.js

Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration files
Add the following files to your project directory

package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
and…
Don’t forget to run $ npm install when you have the package.json

Tasks
0. Basic list of objects
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 0-get_list_students.js
    
1. More mapping
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function getListStudentIds that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the map function on the array.

bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 1-get_list_student_ids.js
    
2. Filter
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.

It should accept a list of students (from getListStudents) and a city (string) as parameters.

You must use the filter function on the array.

bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 2-get_students_by_loc.js
    
3. Reduce
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function getStudentIdsSum that returns the sum of all the student ids.

It should accept a list of students (from getListStudents) as a parameter.

You must use the reduce function on the array.

bob@dylan:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
8
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 3-get_ids_sum.js
    
4. Combine
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:

  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined.

bob@dylan:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 4-update_grade_by_city.js
    
5. Typed Arrays
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

It should accept three arguments: length (Number), position (Number), and value (Number).

If adding the value is not possible the error Position outside range should be thrown.

bob@dylan:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 5-typed_arrays.js
    
6. Set data structure
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function named setFromArray that returns a Set from an array.

It accepts an argument (Array, of any kind of element).

bob@dylan:~$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
Set { 12, 32, 15, 78, 98 }
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 6-set.js
    
7. More set data structure
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a set (Set) and an array (Array).

bob@dylan:~$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
true
false
false
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 7-has_array_values.js
    
8. Clean set
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).

It accepts two arguments: a set (Set) and a startString (String).

When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -.

bob@dylan:~$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
jovi-aparte-appetit

bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 8-clean_set.js
    
9. Map data structure
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function named groceriesList that returns a map of groceries with the following items (name, quantity):

Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
Result:

bob@dylan:~$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 9-groceries_list.js
    
10. More map data structure
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error Cannot process should be thrown.

bob@dylan:~$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 10-update_uniq_items.js
    
11. Weak link data structure
#advanced
Score: 100.0% (Checks completed: 100.0%)
Export a const instance of WeakMap and name it weakMap.

Export a new function named queryAPI. It should accept an endpoint argument like so:

  {
    protocol: 'http',
    name: 'getUsers',
  }
Track within the weakMap the number of times queryAPI is called for each endpoint.

When the number of queries is >= 5 throw an error with the message Endpoint load is high.

bob@dylan:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x03-ES6_data_manipulation
File: 100-weak.js

Configuration Files
Please use these files for the following tasks

package.json
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
tsconfig.json
Click to show/hide file contents
webpack.config.js
Click to show/hide file contents
Tasks
0. Creating an interface for a student
mandatory
Score: 100.0% (Checks completed: 100.0%)
Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js

Write your code in the main.ts file:

Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible.
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js
   
1. Let's build a Teacher interface
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
fullTimeEmployee(boolean) this attribute should always be defined
yearsOfExperience(number) this attribute is optional
location(string) this attribute should always be defined
Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
Example:

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_1/js/main.ts, task_1/webpack.config.js, task_1/tsconfig.json, task_1/package.json
  
2. Extending the Teacher class
mandatory
Score: 100.0% (Checks completed: 100.0%)
Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

Example:

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_1/js/main.ts
  
3. Printing teachers
mandatory
Score: 97.5% (Checks completed: 100.0%)
Write a function printTeacher:

It accepts two arguments firstName and lastName
It returns the first letter of the firstName and the full lastName
Example: printTeacher("John", "Doe") -> J. Doe
Write an interface for the function named printTeacherFunction.

Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_1/js/main.ts
  
4. Writing a class
mandatory
Score: 100.0% (Checks completed: 100.0%)
Write a Class named StudentClass:

The constructor accepts firstName(string) and lastName(string) arguments
The class has a method named workOnHomework that return the string Currently working
The class has a method named displayName. It returns the firstName of the student
The constructor of the class should be described through an Interface
The class should be described through an Interface
Requirements:

You can reuse the Webpack configuration from the previous exercise to compile the code.
When running npm run build, no TypeScript error should be displayed.
Every variable should use TypeScript when possible.
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_1/js/main.ts
  
5. Advanced types Part 1
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create the DirectorInterface interface with the 3 expected methods:

workFromHome() returning a string
getCoffeeBreak() returning a string
workDirectorTasks() returning a string
Create the TeacherInterface interface with the 3 expected methods:

workFromHome() returning a string
getCoffeeBreak() returning a string
workTeacherTasks() returning a string
Create a class Director that will implement DirectorInterface

workFromHome should return the string Working from home
getToWork should return the string Getting a coffee break
workDirectorTasks should return the string Getting to director tasks
Create a class Teacher that will implement TeacherInterface

workFromHome should return the string Cannot work from home
getCoffeeBreak should return the string Cannot have a break
workTeacherTasks should return the string Getting to work
Create a function createEmployee with the following requirements:

It can return either a Director or a Teacher instance
It accepts 1 arguments:
salary(either number or string)
if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
Expected result:

console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_2/js/main.ts, task_2/webpack.config.js, task_2/tsconfig.json, task_2/package.json
  
6. Creating functions specific to employees
mandatory
Score: 100.0% (Checks completed: 100.0%)
Write a function isDirector:

it accepts employee as an argument
it will be used as a type predicate and if the employee is a director
Write a function executeWork:

it accepts employee as an argument
if the employee is a Director, it will call workDirectorTasks
if the employee is a Teacher, it will call workTeacherTasks
Expected result:

executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_2/js/main.ts
  
7. String literal types
mandatory
Score: 73.33% (Checks completed: 66.67%)
Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:

it takes todayClass as an argument
it will return the string Teaching Math if todayClass is Math
it will return the string Teaching History if todayClass is History
Expected result:

teachClass('Math');
Teaching Math
teachClass('History');
Teaching History
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_2/js/main.ts
   
8. Ambient Namespaces
mandatory
Score: 98.89% (Checks completed: 100.0%)
Create a directory called task_3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.

The first part of will require that you build an interface and a type. Inside a file named interface.ts:

Create a type RowID and set it equal to number
Create an interface RowElement that contains these 3 fields:
firstName: string
lastName: string
age?: number
You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called crud.js. Copy this file into the task_3/js directory.

Here it is

export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
Write an ambient file within task_3/js, named crud.d.ts containing the type declarations for each crud function. At the top of the file import RowID and RowElement from interface.ts.

In main.ts

At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
Import the rowID type and rowElement from interface.ts
Import everything from crud.js as CRUD
Create an object called row with the type RowElement with the fields set to these values:

firstName: Guillaume
lastName: Salva
Create a const variable named newRowID with the type RowID and assign the value the insertRow command.

Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23

Finally, call the updateRow and deleteRow commands.

Expected result:

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
Requirements:

When running npm run build, no TypeScript error should be displayed.
Every variable should use TypeScript when possible.
The main file and the ambient file should both import the types defined in the interface file.
You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts
  
9. Namespace & Declaration merging
mandatory
Score: 98.89% (Checks completed: 100.0%)
Create a new directory task_4 and copy the above tsconfig.json and put this package.json in there

{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
In task_4/js/subjects:

Create a file Teacher.ts and write a Teacher interface in a namespace named Subjects.

the interface requires firstName and lastName as string
Create a file Subject.ts and write a Subject class in the same namespace named Subjects.

the class has one attribute teacher that implements the Teacher interface
the class has one setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)
Create a file Cpp.ts and make the following modifications in the same namespace.

Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
Create a class Cpp extending from Subject
Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
Create a file React.ts and write a React Class in the same namespace.

Add a new attribute experienceTeachingReact? (number) to the Teacher interface
In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
Create a file Java.ts and write a Java Class in the same namespace.

Add a new attribute experienceTeachingJava? (number) to the Teacher interface
In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_4/package.json, task_4/tsconfig.json, task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts
  
10. Update task_4/js/main.ts
mandatory
Score: 100.0% (Checks completed: 100.0%)
create and export a constant cpp for Cpp Subjects
create and export a constant java for Java Subjects
create and export a constant react for React Subjects
create and export one Teacher object cTeacher with experienceTeachingC = 10
for Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher and print the strings they return
for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
for React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_4/js/main.ts
  
11. Brand convention & Nominal typing
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a directory task_5 and copy these configuration files into the root of task_5: package.json, tsconfig.json, webpack.config.js

Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:

Each interface defines a number named credits
Add a brand property to each interface in order to uniquely identify each of them
Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:

Each function takes two arguments subject1 and subject2
sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
Each function sums the credits of the two subjects
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_5/js/main.ts, task_5/package.json, task_5/webpack.config.js, task_5/tsconfig.json

In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.

bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: 0-console.js
    
1. Using Process stdin
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a program named 1-stdin.js that will be executed through command line:

It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
The user should be able to input their name on a new line
The program should display Your name is: INPUT
When the user ends the program, it should display This important software is now closing (followed by a new line)
Requirements:

Your code will be tested through a child process, make sure you have everything you need for that
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: 1-stdin.js
    
2. Reading a file synchronously with Node JS
mandatory
Score: 100.0% (Checks completed: 100.0%)
Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js

Create a function named countStudents. It should accept a path in argument
The script should attempt to read the database file synchronously
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: 2-read_file.js
    
3. Reading a file asynchronously with Node JS
mandatory
Score: 100.0% (Checks completed: 100.0%)
Using the database database.csv (provided in project description), create a function countStudents in the file 3-read_file_async.js

Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
The script should attempt to read the database file asynchronously
The function should return a Promise
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$ 
Tips:

Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: 3-read_file_async.js
    
4. Create a small HTTP server using Node's HTTP module
mandatory
Score: 100.0% (Checks completed: 100.0%)
In a file named 4-http.js, create a small HTTP server using the http module:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
Displays Hello Holberton School! in the page body for any endpoint as plain text
In terminal 1:

bob@dylan:~$ node 4-http.js
...
In terminal 2:

bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: 4-http.js
    
5. Create a more complex HTTP server using Node's HTTP module
mandatory
Score: 100.0% (Checks completed: 100.0%)
In a file named 5-http.js, create a small HTTP server using the http module:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
It should return plain text
When the URL path is /, it should display Hello Holberton School! in the page body
When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
CSV file can contain empty lines (at the end) - and they are not a valid student!
Terminal 1:

bob@dylan:~$ node 5-http.js database.csv
...
In terminal 2:

bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: 5-http.js
    
6. Create a small HTTP server using Express
mandatory
Score: 100.0% (Checks completed: 100.0%)
Install Express and in a file named 6-http_express.js, create a small HTTP server using Express module:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
Displays Hello Holberton School! in the page body for the endpoint /
In terminal 1:

bob@dylan:~$ node 6-http_express.js
...
In terminal 2:

bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /lskdlskd</pre>
</body>
</html> 
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: 6-http_express.js
    
7. Create a more complex HTTP server using Express
mandatory
Score: 100.0% (Checks completed: 100.0%)
In a file named 7-http_express.js, recreate the small HTTP server using Express:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
It should return plain text
When the URL path is /, it should display Hello Holberton School! in the page body
When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
CSV file can contain empty lines (at the end) - and they are not a valid student!
Terminal 1:

bob@dylan:~$ node 7-http_express.js database.csv
...
In terminal 2:

bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: 7-http_express.js
    
8. Organize a complex HTTP server using Express
mandatory
Score: 100.0% (Checks completed: 100.0%)
Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named full_server.

Since you have used ES6 and Babel in the past projects, let’s use babel-node to allow to use ES6 functions like import or export.

8.1 Organize the structure of the server
Create 2 directories within:
controllers
routes
Create a file full_server/utils.js, in the file create a function named readDatabase that accepts a file path as argument:
It should read the database asynchronously
It should return a promise
When the file is not accessible, it should reject the promise with the error
When the file can be read, it should return an object of arrays of the firstname of students per fields
8.2 Write the App controller
Inside the file full_server/controllers/AppController.js:

Create a class named AppController. Add a static method named getHomepage
The method accepts request and response as argument. It returns a 200 status and the message Hello Holberton School!
8.3 Write the Students controller
Inside the file full_server/controllers/StudentsController.js, create a class named StudentsController. Add two static methods:

The first one is getAllStudents:

The method accepts request and response as argument
It should return a status 200
It calls the function readDatabase from the utils file, and display in the page:
First line: This is the list of our students
And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
If the database is not available, it should return a status 500 and the error message Cannot load the database
The second one is getAllStudentsByMajor:

The method accepts request and response as argument
It should return a status 200
It uses a parameter that the user can pass to the browser major. The major can only be CS or SWE. If the user is passing another parameter, the server should return a 500 and the error Major parameter must be CS or SWE
It calls the function readDatabase from the utils file, and display in the page the list of first names for the students (ordered by appearance in the database file) in the specified field List: LIST_OF_FIRSTNAMES_IN_THE_FIELD
If the database is not available, it should return a status 500 and the error message Cannot load the database
8.4 Write the routes
Inside the file full_server/routes/index.js:

Link the route / to the AppController
Link the route /students and /students/:majorto the StudentsController
8.5 Write the server reusing everything you created
Inside the file named full_server/server.js, create a small Express server:

It should use the routes defined in full_server/routes/index.js
It should use the port 1245
8.6 Update package.json (if you are running it from outside the folder full_server)
If you are starting node from outside of the folder full_server, you will have to update the command dev by: nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv

Warning:

Don’t forget to export your express app at the end of server.js (export default app;)
The database filename is passed as argument of the server.js BUT, for testing purpose, you should retrieve this filename at the execution (when getAllStudents or getAllStudentsByMajor are called for example)
In terminal 1:

bob@dylan:~$ npm run dev
...
In terminal 2:

bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE && echo ""
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/French -vvv && echo ""
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
> GET /students/SWES HTTP/1.1
> Host: localhost:1245
> User-Agent: curl/7.58.0
> Accept: */*
>
< HTTP/1.1 500 Internal Server Error
< X-Powered-By: Express
< Date: Mon, 06 Jul 2020 03:29:00 GMT
< Connection: keep-alive
< Content-Length: 33
<
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$ 
If you want to add test to validate your integration, you will need to add this file: .babelrc

Click to show/hide file contents
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
File: full_server/utils.js, full_server/controllers/AppController.js, full_server/controllers/StudentsController.js, full_server/routes/index.js, full_server/server.js



Install Mocha using npm:

Set up a scripts in your package.json to quickly run Mocha using npm test
You have to use assert
Create a new file named 0-calcul.js:

Create a function named calculateNumber. It should accepts two arguments (number) a and b
The function should round a and b and return the sum of it
Test cases

Create a file 0-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Tests should be around the “rounded” part
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
Requirements:

You have to use assert
You should be able to run the test suite using npm test 0-calcul.test.js
Every test should pass without any warning
Expected output

> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
> 
Run test

bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: package.json, 0-calcul.js, 0-calcul.test.js
    
1. Combining descriptions
mandatory
Score: 100.0% (Checks completed: 100.0%)
Create a new file named 1-calcul.js:

Upgrade the function you created in the previous task (0-calcul.js)
Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
When type is SUM, round the two numbers, and add a and b
When type is SUBTRACT, round the two numbers, and subtract b from a
When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error
Test cases

Create a file 1-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Usage of describe will help you to organize your test cases
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
Requirements:

You have to use assert
You should be able to run the test suite using npm test 1-calcul.test.js
Every test should pass without any warning
Expected output

> const calculateNumber = require("./1-calcul.js");
> calculateNumber('SUM', 1.4, 4.5)
6
> calculateNumber('SUBTRACT', 1.4, 4.5)
-4
> calculateNumber('DIVIDE', 1.4, 4.5)
0.2
> calculateNumber('DIVIDE', 1.4, 0)
'Error'
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 1-calcul.js, 1-calcul.test.js
    
2. Basic test using Chai assertion library
mandatory
Score: 100.0% (Checks completed: 100.0%)
While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

Let’s install Chai with npm:

Copy the file 1-calcul.js in a new file 2-calcul_chai.js (same content, same behavior)
Copy the file 1-calcul.test.js in a new file 2-calcul_chai.test.js
Rewrite the test suite, using expect from Chai
Tips:

Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you
The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code
Requirements:

You should be able to run the test suite using npm test 2-calcul_chai.test.js
Every test should pass without any warning
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 2-calcul_chai.js, 2-calcul_chai.test.js
    
3. Spies
mandatory
Score: 100.0% (Checks completed: 100.0%)
Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.

Let’s install Sinon with npm:

Create a new file named utils.js
Create a new module named Utils
Create a property named calculateNumber and paste your previous code in the function
Export the Utils module
Create a new file named 3-payment.js:

Create a new function named sendPaymentRequestToApi. The function takes two argument totalAmount, and totalShipping
The function calls the Utils.calculateNumber function with type SUM, totalAmount as a, totalShipping as b and display in the console the message The total is: <result of the sum>
Create a new file named 3-payment.test.js and add a new suite named sendPaymentRequestToApi:

By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber('SUM', 100, 20) (validate the usage of the Utils function)
Requirements:

You should be able to run the test suite using npm test 3-payment.test.js
Every test should pass without any warning
You should use a spy to complete this exercise
Tips:

Remember to always restore a spy after using it in a test, it will prevent you from having weird behaviors
Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions
Remember that integration test is different from unit test. Your unit test should test your code, not the code of a different function
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: utils.js, 3-payment.js, 3-payment.test.js
    
4. Stubs
mandatory
Score: 100.0% (Checks completed: 100.0%)
Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.

Create a new file 4-payment.js, and copy the code from 3-payment.js (same content, same behavior)

Create a new file 4-payment.test.js, and copy the code from 3-payment.test.js

Imagine that calling the function Utils.calculateNumber is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run
Stub the function Utils.calculateNumber to always return the same number 10
Verify that the stub is being called with type = SUM, a = 100, and b = 20
Add a spy to verify that console.log is logging the correct message The total is: 10
Requirements:

You should be able to run the test suite using npm test 4-payment.test.js
Every test should pass without any warning
You should use a stub to complete this exercise
Do not forget to restore the spy and the stub
Tips:

Using stubs allows you to greatly speed up your test. When executing thousands of tests, saving a few seconds is important
Using stubs allows you to control specific edge case (e.g a function throwing an error or returning a specific result like a number or a timestamp)
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 4-payment.js, 4-payment.test.js
    
5. Hooks
mandatory
Score: 100.0% (Checks completed: 100.0%)
Hooks are useful functions that can be called before execute one or all tests in a suite

Copy the code from 4-payment.js into a new file 5-payment.js: (same content/same behavior)

Create a new file 5-payment.test.js:

Inside the same describe, create 2 tests:
The first test will call sendPaymentRequestToAPI with 100, and 20:
Verify that the console is logging the string The total is: 120
Verify that the console is only called once
The second test will call sendPaymentRequestToAPI with 10, and 10:
Verify that the console is logging the string The total is: 20
Verify that the console is only called once
Requirements:

You should be able to run the test suite using npm test 5-payment.test.js
Every test should pass without any warning
You should use only one spy to complete this exercise
You should use a beforeEach and a afterEach hooks to complete this exercise
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 5-payment.js, 5-payment.test.js
    
6. Async tests with done
mandatory
Score: 100.0% (Checks completed: 100.0%)
Look into how to support async testing, for example when waiting for the answer of an API or from a Promise

Create a new file 6-payment_token.js:

Create a new function named getPaymentTokenFromAPI
The function will take an argument called success (boolean)
When success is true, it should return a resolved promise with the object {data: 'Successful response from the API' }
Otherwise, the function is doing nothing.
Create a new file 6-payment_token.test.js and write a test suite named getPaymentTokenFromAPI

How to test the result of getPaymentTokenFromAPI(true)?
Tips:

You should be extremely careful when working with async testing. Without calling done properly, your test could be always passing even if what you are actually testing is never executed
Requirements:

You should be able to run the test suite using npm test 6-payment_token.test.js
Every test should pass without any warning
You should use the done callback to execute this test
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 6-payment_token.js, 6-payment_token.test.js
    
7. Skip
mandatory
Score: 100.0% (Checks completed: 100.0%)
When you have a long list of tests, and you can’t figure out why a test is breaking, avoid commenting out a test, or removing it. Skip it instead, and file a ticket to come back to it as soon as possible

You will be using this file, conveniently named 7-skip.test.js

const { expect } = require('chai');

describe('Testing numbers', () => {
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  it('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
});
Using the file 7-skip.test.js:

Make the test suite pass without fixing or removing the failing test
it description must stay the same
Tips:

Skipping is also very helpful when you only want to execute the test in a particular case (specific environment, or when an API is not behaving correctly)
Requirements:

You should be able to run the test suite using npm test 7-skip.test.js
Every test should pass without any warning
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 7-skip.test.js
    
8. Basic Integration testing
mandatory
Score: 100.0% (Checks completed: 100.0%)
In a folder 8-api located at the root of the project directory, copy this package.json over.

{
  "name": "8-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/mocha/bin/mocha"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
Create a new file api.js:

By using express, create an instance of express called app
Listen to port 7865 and log API available on localhost port 7865 to the browser console when the express server is started
For the route GET /, return the message Welcome to the payment system
Create a new file api.test.js:

Create one suite for the index page:
Correct status code?
Correct result?
Other?
Server

Terminal 1

bob@dylan:~/8-api$  node api.js
API available on localhost port 7865
Terminal 2

bob@dylan:~/8-api$  curl http://localhost:7865 ; echo ""
Welcome to the payment system
bob@dylan:~/8-api$  
bob@dylan:~/8-api$ npm test api.test.js

> 8-api@1.0.0 test /root/8-api
> ./node_modules/mocha/bin/mocha "api.test.js"



  Index page
    ✓ ...
    ✓ ...
    ...

  23 passing (256ms)

bob@dylan:~/8-api$
Tips:

Since this is an integration test, you will need to have your node server running for the test to pass
You can use the module request
Requirements:

You should be able to run the test suite using npm test api.test.js
Every test should pass without any warnings
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 8-api/package.json, 8-api/api.js, 8-api/api.test.js
    
9. Regex integration testing
mandatory
Score: 100.0% (Checks completed: 100.0%)
In a folder 9-api, reusing the previous project in 8-api (package.json, api.js and api.test.js)

Modify the file api.js:

Add a new endpoint: GET /cart/:id
:id must be only a number (validation must be in the route definition)
When access, the endpoint should return Payment methods for cart :id
Modify the file api.test.js:

Add a new test suite for the cart page:
Correct status code when :id is a number?
Correct status code when :id is NOT a number (=> 404)?
etc.
Server

Terminal 1

bob@dylan:~$ node api.js
API available on localhost port 7865
Terminal 2

bob@dylan:~$ curl http://localhost:7865/cart/12 ; echo ""
Payment methods for cart 12
bob@dylan:~$ 
bob@dylan:~$ curl http://localhost:7865/cart/hello -v
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 7865 (#0)
> GET /cart/hello HTTP/1.1
> Host: localhost:7865
> User-Agent: curl/7.58.0
> Accept: */*
> 
< HTTP/1.1 404 Not Found
< X-Powered-By: Express
< Content-Security-Policy: default-src 'none'
< X-Content-Type-Options: nosniff
< Content-Type: text/html; charset=utf-8
< Content-Length: 149
< Date: Wed, 15 Jul 2020 08:33:44 GMT
< Connection: keep-alive
< 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /cart/hello</pre>
</body>
</html>
* Connection #0 to host localhost left intact
bob@dylan:~$ 
Tips:

You will need to add a small regex in your path to support the usecase
Requirements:

You should be able to run the test suite using npm test api.test.js
Every test should pass without any warning
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 9-api/api.js, 9-api/api.test.js, 9-api/package.json
    
10. Deep equality & Post integration testing
mandatory
Score: 100.0% (Checks completed: 100.0%)
In a folder 10-api, reusing the previous project in 9-api (package.json, api.js and api.test.js)

Modify the file api.js:

Add an endpoint GET /available_payments that returns an object with the following structure:
{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
Add an endpoint POST /login that returns the message Welcome :username where :username is the value of the body variable userName.
Modify the file api.test.js:

Add a test suite for the /login endpoint
Add a test suite for the /available_payments endpoint
Server

Terminal 1

bob@dylan:~$ node api.js
API available on localhost port 7865
Terminal 2

bob@dylan:~$ curl http://localhost:7865/available_payments ; echo ""
{"payment_methods":{"credit_cards":true,"paypal":false}}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST http://localhost:7865/login -d '{ "userName": "Betty" }' -H 'Content-Type: application/json' ; echo ""
Welcome Betty
bob@dylan:~$ 
Tips:

Look at deep equality to compare objects
Requirements:

You should be able to run the test suite using npm test api.test.js
Every test should pass without any warning
Your server should not display any error
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
File: 10-api/api.js, 10-api/api.test.js, 10-api/package.json
