async function fetchStudentData(): Promise<Student[]> {
    try {
        // จำลองการดึงข้อมูลนักเรียน
        const response = await new Promise<Student[]>((resolve, reject) => {
            setTimeout(() => {
                const students: Student[] = [
                    new Student("Alice", 20),
                    new Student("Bob", 22)
                ];
                resolve(students); // ส่งคืนข้อมูลนักเรียน
            }, 2000); // จำลองการดีเลย์ 2 วินาที
        });

        console.log("Student data fetched successfully:", response);
        return response; // ส่งคืนข้อมูลนักเรียน
    } catch (error) {
        console.error("Error fetching student data:", error);
        throw error; // ยกเลิกข้อผิดพลาด
    }
}