class Student {
    private static studentCount: number = 0; // สำหรับนับจำนวนของนักเรียน
    public name: string;
    public age: number;
    private grades: number[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.grades = [];
        Student.studentCount++; // เพิ่มจำนวนเมื่อนักเรียนถูกสร้าง
    }

    addGrade(grade: number): void {
        this.grades.push(grade);
    }

    getAverageGrade(): number {
        if (this.grades.length === 0) return 0; // ตรวจสอบหากไม่มีเกรด
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length; // คำนวณค่าเฉลี่ย
    }

    static totalStudents(): number {
        return Student.studentCount; // ส่งคืนจำนวนของนักเรียน
    }
}

