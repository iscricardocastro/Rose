export function generateSlots(dateStr) {
    if (!dateStr) return [];
    const d = new Date(dateStr + 'T00:00:00');
    const day = d.getDay(); // 0 Sun .. 6 Sat
    let start = '09:00', end = '20:00';
    if (day === 6) { start = '07:00'; end = '17:00'; }
    if (day === 0) return [];
    const [sh] = start.split(':').map(Number);
    const [eh] = end.split(':').map(Number);
    const out = [];
    for (let h = sh; h <= eh; h += 4) { out.push(String(h).padStart(2, '0') + ':00'); }
    return out;
}
export const sundaySlots = ['09:00', '13:00', '17:00'];