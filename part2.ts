class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    public subject: string;
    public students: Student[];

    constructor(name: string, age: number, subject: string) {
        super(name, age); // เรียกใช้ constructor ของ Person
        this.subject = subject;
        this.students = [];
    }

    assignGrades(student: Student, grade: number): void {
        student.addGrade(grade); // เรียกใช้เมธอด addGrade ของ Student
    }

}
