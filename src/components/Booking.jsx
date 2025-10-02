import React, { useMemo, useState } from "react";
import { generateSlots, sundaySlots } from "../hooks/useSlots";
import { FaWhatsapp, FaCalendarAlt, FaRegClock } from "react-icons/fa";

const SERVICES = [
    "Manicure",
    "Pedicure Spa",
    "Gel Semipermanente",
    "Acrílicas",
    "Soft Gel",
];
const PHONE = "528128706467";
const enc = encodeURIComponent;

function toYYYYMMDD(d) {
    return d.toISOString().slice(0, 10);
}

function buildICS(
    summary,
    description,
    startISO,
    endISO,
    location = "ROSE BEAUTY STUDIO"
) {
    const dtStart = startISO.replace(/[-:]/g, "").split(".")[0] + "Z";
    const dtEnd = endISO.replace(/[-:]/g, "").split(".")[0] + "Z";
    return [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//ROSE BEAUTY STUDIO//ES",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",
        `DTSTART:${dtStart}`,
        `DTEND:${dtEnd}`,
        `SUMMARY:${summary}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${location}`,
        "END:VEVENT",
        "END:VCALENDAR",
    ].join("\r\n");
}

export default function Booking() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState(toYYYYMMDD(new Date()));
    const [time, setTime] = useState("");
    const [selected, setSelected] = useState([]);
    const [isNew, setIsNew] = useState("nuevo");
    const [domicilio, setDomicilio] = useState(false);
    const [sunday, setSunday] = useState(false);
    const [waitlist, setWaitlist] = useState(false);
    const [busy, setBusy] = useState(false);

    const day = useMemo(() => new Date(date).getDay(), [date]);
    const slots = useMemo(
        () => (day === 0 ? (sunday ? sundaySlots : []) : generateSlots(date)),
        [day, date, sunday]
    );

    const canSubmit = name && phone && date && time && selected.length > 0;

    function toggle(s) {
        setSelected((prev) => {
            if (prev.includes(s)) return prev.filter((x) => x !== s);
            if (prev.length >= 2) return prev;
            return [...prev, s];
        });
    }

    async function submit(e) {
        e.preventDefault();
        if (!canSubmit) return;
        setBusy(true);
        try {
            const notes = [];
            if (day === 0) notes.push("Domingo (costo extra $100, confirmar)");
            if (domicilio)
                notes.push("A domicilio (San Nicolás/Apodaca) *costo adicional*");
            if (waitlist) notes.push("Lista de espera");

            const msg = `Hola, soy ${name}.
Tel: ${phone}
Quiero agendar en ROSE BEAUTY STUDIO.

Servicios: ${selected.join(" + ")}
Cliente: ${isNew === "nuevo" ? "Nuevo" : "Ya ha venido"}
Fecha: ${date}
Hora: ${time}
${notes.length ? `Notas: ${notes.join(" | ")}` : ""}

Recordatorio: llegar a tiempo. Tolerancia 20 min; después se reagenda otro día.

¿Me confirmas la cita? Gracias 🌹`;

            window.open(
                `https://wa.me/${PHONE}?text=${enc(msg)}`,
                "_blank",
                "noopener,noreferrer"
            );
            setTimeout(
                () => alert("Se abrió WhatsApp con tu mensaje. ¡Confirma ahí!"),
                300
            );
        } finally {
            setBusy(false);
        }
    }

    function downloadICS() {
        if (!date || !time) return;
        const start = new Date(`${date}T${time}:00`);
        const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
        const ics = buildICS(
            `Cita ROSE: ${selected.join(" + ")}`,
            `Cliente: ${name} (${isNew === "nuevo" ? "Nuevo" : "Recurrente"
            }) · Tolerancia 20 min`,
            start.toISOString(),
            end.toISOString()
        );
        const url = URL.createObjectURL(
            new Blob([ics], { type: "text/calendar;charset=utf-8" })
        );
        const a = document.createElement("a");
        a.href = url;
        a.download = `cita-rose-${date}-${time.replace(":", "")}.ics`;
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <section id="booking">
            <div className="glass p-8 md:p-12 rounded-3xl">
                <div className="text-center">
                    <h2 className="title">Agendar cita</h2>
                    <p className="mt-2 text-sm text-rosebrand-700">
                        Completa tus datos y genera el mensaje. La confirmación es manual vía WhatsApp.
                    </p>
                </div>

                <form
                    onSubmit={submit}
                    className="mt-8 grid md:grid-cols-2 gap-8 text-sm text-rosebrand-700"
                >
                    {/* Columna izquierda */}
                    <div className="space-y-5">
                        <div>
                            <label className="block font-medium">Nombre</label>
                            <input
                                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-rosebrand-300"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium">Teléfono / WhatsApp</label>
                            <input
                                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-rosebrand-300"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="812 870 6467"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium">¿Has venido antes?</label>
                            <div className="mt-2 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsNew("nuevo")}
                                    className={`px-4 py-2 rounded-xl border transition ${isNew === "nuevo"
                                        ? "bg-rosebrand-100 border-rosebrand-300 text-rosebrand-700"
                                        : "bg-white hover:bg-rosebrand-50"
                                        }`}
                                >
                                    Nuevo
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsNew("recurrente")}
                                    className={`px-4 py-2 rounded-xl border transition ${isNew === "recurrente"
                                        ? "bg-rosebrand-100 border-rosebrand-300 text-rosebrand-700"
                                        : "bg-white hover:bg-rosebrand-50"
                                        }`}
                                >
                                    Ya he venido
                                </button>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border bg-white">
                            <label className="block font-medium">
                                Servicios (máx. 2)
                            </label>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {SERVICES.map((s) => {
                                    const active = selected.includes(s);
                                    return (
                                        <button
                                            type="button"
                                            key={s}
                                            onClick={() => toggle(s)}
                                            className={`px-3 py-2 rounded-lg border text-left transition ${active
                                                ? "bg-rosebrand-100 border-rosebrand-300"
                                                : "bg-white hover:bg-rosebrand-50"
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    );
                                })}
                            </div>
                            <p className="mt-2 text-xs">
                                Seleccionados:{" "}
                                <span className="font-medium">
                                    {selected.length ? selected.join(" + ") : "Ninguno"}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium">Fecha</label>
                                <input
                                    type="date"
                                    className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-rosebrand-300"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                        setTime("");
                                        setSunday(false);
                                    }}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Hora (4h)</label>
                                <select
                                    className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-rosebrand-300"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                    disabled={day === 0 && !sunday}
                                >
                                    <option value="">Selecciona...</option>
                                    {slots.map((t) => (
                                        <option key={t} value={t}>
                                            {t} hrs
                                        </option>
                                    ))}
                                </select>
                                {day !== 0 && slots.length === 0 && (
                                    <p className="text-xs mt-1">Sin horarios ese día.</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={domicilio}
                                    onChange={(e) => setDomicilio(e.target.checked)}
                                />
                                <span>A domicilio (San Nicolás/Apodaca) — costo adicional</span>
                            </label>

                            <label className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={waitlist}
                                    onChange={(e) => setWaitlist(e.target.checked)}
                                />
                                <span>Lista de espera si el horario ya está lleno</span>
                            </label>

                            {day === 0 && (
                                <div className="p-3 rounded-lg border border-rosebrand-200 bg-rosebrand-50">
                                    <label className="inline-flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={sunday}
                                            onChange={(e) => setSunday(e.target.checked)}
                                        />
                                        <span>
                                            Domingo con costo extra $100 (sujeto a disponibilidad)
                                        </span>
                                    </label>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={!canSubmit || busy}
                                className={`btn-primary flex items-center gap-2 ${!canSubmit || busy
                                    ? "opacity-60 cursor-not-allowed"
                                    : "hover:scale-[1.02]"
                                    }`}
                            >
                                <FaWhatsapp />{" "}
                                {busy ? "Abriendo WhatsApp…" : "Enviar por WhatsApp"}
                            </button>

                            <button
                                type="button"
                                onClick={downloadICS}
                                disabled={!date || !time}
                                className={`btn-outline flex items-center gap-2 ${!date || !time
                                    ? "opacity-60 cursor-not-allowed"
                                    : "hover:scale-[1.02]"
                                    }`}
                            >
                                <FaCalendarAlt /> Recordatorio (.ics)
                            </button>
                        </div>

                        <p className="text-xs text-rosebrand-600">
                            *Confirmación manual por WhatsApp. Tolerancia 20 min; después se reagenda.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}