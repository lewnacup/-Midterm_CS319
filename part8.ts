function parseJSONData(jsonString: string): Student[] {
    try {
        // พยายามแปลงข้อมูล JSON เป็นอาร์เรย์ของนักเรียน
        const data = JSON.parse(jsonString);
        // ตรวจสอบว่าข้อมูลมีโครงสร้างที่ถูกต้องหรือไม่
        if (!Array.isArray(data)) {
            throw new Error("Parsed data is not an array.");
        }
        return data.map((item: any) => new Student(item.name, item.age)); // สร้างนักเรียนจากข้อมูลที่แปลง
    } catch (error) {
        // จัดการข้อผิดพลาดที่เกิดขึ้น
        console.error("Error parsing JSON data:", error);
        return []; // คืนค่าอาร์เรย์ว่างหากเกิดข้อผิดพลาด
    }
}