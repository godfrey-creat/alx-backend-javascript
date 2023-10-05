interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional attributes without specifying the name
}

class TeacherImpl implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    additionalAttributes?: Record<string, any>
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;

    // Set additional attributes if provided
    if (additionalAttributes) {
      for (const [key, value] of Object.entries(additionalAttributes)) {
        this[key] = value;
      }
    }
  }
}

// Example usage
const teacher = new TeacherImpl('John', 'Doe', true, 'New York', { yearsOfExperience: 5, contract: true });
console.log(teacher);
interface Directors extends Teacher {
  numberOfReports: number;
}

class DirectorImpl implements Directors {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  numberOfReports: number;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    numberOfReports: number,
    additionalAttributes?: Record<string, any>
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.numberOfReports = numberOfReports;

    // Set additional attributes if provided
    if (additionalAttributes) {
      for (const [key, value] of Object.entries(additionalAttributes)) {
        this[key] = value;
      }
    }
  }
}

// Example usage
const director = new DirectorImpl('Alice', 'Smith', true, 'Los Angeles', 10, { yearsOfExperience: 15, contract: true });
console.log(director);
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastNameFull = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstInitial}. ${lastNameFull}`;
};

// Example usage
const result = printTeacher("John", "Doe"); // Example call
console.log(result); // Output: J. Doe

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Smith");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Alice

