function createBonusAdder(bonus: number): (grade: number) => number {
    return function(grade: number): number {
        return grade + bonus; // เพิ่มโบนัสให้กับเกรด
    };
}

function bonusAdder(student: Student, bonus: number): number[] {
    const addBonus = createBonusAdder(bonus); // สร้างฟังก์ชันเพิ่มโบนัส
    return student.grades.map(addBonus); // ใช้ฟังก์ชันเพื่อเพิ่มโบนัสให้กับเกรดทั้งหมด
}

