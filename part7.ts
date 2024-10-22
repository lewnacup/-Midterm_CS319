// ฟังก์ชันสำหรับการกรองนักเรียนที่มีค่าเฉลี่ยเกรดมากกว่า 75
function filterStudentsByAverage(students: Student[]): Student[] {
    return students.filter(student => student.getAverageGrade() > 75);
}

// ฟังก์ชันสำหรับการสร้างอาร์เรย์ชื่อของนักเรียน
function getStudentNames(students: Student[]): string[] {
    return students.map(student => student.name);
}

// ฟังก์ชันสำหรับการคำนวณจำนวนเกรดรวมของนักเรียนทั้งหมด
function calculateTotalGrades(students: Student[]): number {
    return students.reduce((total, student) => total + student.grades.length, 0);
}