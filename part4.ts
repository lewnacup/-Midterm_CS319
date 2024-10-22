class Database<T> {
    private entries: T[] = []; // อาร์เรย์สำหรับเก็บข้อมูล

    addEntry(entry: T): void {
        this.entries.push(entry); // เพิ่มข้อมูลเข้าสู่อาร์เรย์
    }

    getAllEntries(): T[] {
        return this.entries; // คืนค่าข้อมูลทั้งหมด
    }
}