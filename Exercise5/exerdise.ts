class Student {
    // Define the properties here
    studentName: string;
    studentAge: number;
    studentGrade:number;

    // Define the constructor here
constructor(studetName: string, studentAge: number, studentGrade: number) {
    this.studentName = studetName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
}
    // Define the displayInfo method here
    displayInfo() {
        console.log(`Name: ${this.studentName}, Age: ${this.studentAge}, Grade Level: ${this.studentGrade}`);
    }
    // Define the isPassing method here
    isPassing(gradeThreshold: number): boolean {
        if(this.studentGrade >= gradeThreshold) {
            return true;
        }else return false;
    }
}

// Instantiate a new student object and call the methods to test your class

const someGuy = new Student("Robert", 43, 78);
console.log(someGuy.displayInfo(), "\n", someGuy.isPassing(70));
