import React, { useMemo, useState } from 'react'

const SERVICES = [
    'Manicure',
    'Pedicure Spa',
    'Gelish',
    'Acrílicas',
    'Soft Gel',
]

const PHONE = '528128706467' // MX +52 sin símbolos para wa.me

function toYYYYMMDD(date) {
    return date.toISOString().slice(0, 10)
}

function encode(s) {
    return encodeURIComponent(s)
}

// Genera slots cada 4 horas según día de la semana
function generateSlots(dateStr) {
    if (!dateStr) return []
    const d = new Date(dateStr + 'T00:00:00')
    const day = d.getDay() // 0:Sun, 1:Mon..6:Sat

    // Rango por día
    let start = '09:00', end = '20:00' // default Lu-Vi
    if (day === 6) { // Sábado
        start = '07:00'
        end = '17:00'
    }
    if (day === 0) { // Domingo off (permitimos seleccionar con costo extra y confirmación)
        // No slots por defecto (se generan bajo toggle DomingoEspecial)
        return []
    }

    const [sh, sm] = start.split(':').map(Number)
    console.log("🚀 ~ generateSlots ~ sm:", sm)
    const [eh, em] = end.split(':').map(Number)
    console.log("🚀 ~ generateSlots ~ em:", em)

    const slots = []
    for (let h = sh; h <= eh; h += 4) {
        const hh = String(h).padStart(2, '0')
        const mm = '00'
        const t = `${hh}:${mm}`
        // evita slot que exceda el end (igual lo mostramos fijo al inicio del bloque)
        if (h <= eh) slots.push(t)
    }
    return slots
}

function generateSundaySlots() {
    // Domingos: sólo si el usuario marca “domingo con costo extra”
    // Para no inventar horarios, proponemos 09:00, 13:00, 17:00 como referencias.
    return ['09:00', '13:00', '17:00']
}

function buildICS(summary, description, startISO, endISO, location = 'ROSE BEAUTY STUDIO') {
    // Formato ICS simple
    const dtStart = startISO.replace(/[-:]/g, '').split('.')[0] + 'Z'
    const dtEnd = endISO.replace(/[-:]/g, '').split('.')[0] + 'Z'
    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//ROSE BEAUTY STUDIO//ES',
        'CALSCALE:GREGORIAN',
        'BEGIN:VEVENT',
        `DTSTART:${dtStart}`,
        `DTEND:${dtEnd}`,
        `SUMMARY:${summary}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${location}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n')
}

export default function Booking() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState(toYYYYMMDD(new Date()))
    const [selectedServices, setSelectedServices] = useState([])
    const [time, setTime] = useState('')
    const [isNew, setIsNew] = useState('nuevo') // 'nuevo' | 'recurrente'
    const [domicilio, setDomicilio] = useState(false)
    const [sundayExtra, setSundayExtra] = useState(false)
    const [waitlist, setWaitlist] = useState(false)

    const weekdaySlots = useMemo(() => generateSlots(date), [date])
    const sundaySlots = useMemo(() => generateSundaySlots(), [])
    const selectedDay = useMemo(() => new Date(date).getDay(), [date])

    function toggleService(svc) {
        const has = selectedServices.includes(svc)
        if (has) {
            setSelectedServices(selectedServices.filter(s => s !== svc))
        } else {
            if (selectedServices.length >= 2) return // máximo 2
            setSelectedServices([...selectedServices, svc])
        }
    }

    const canSubmit = name && phone && date && (time || (selectedDay === 0 && sundayExtra && time)) && selectedServices.length > 0

    function onSubmit(e) {
        e.preventDefault()
        if (!canSubmit) return

        const servicesStr = selectedServices.join(' + ')
        const extra = []
        if (selectedDay === 0) extra.push('Domingo (costo extra $100, confirmar disponibilidad)')
        if (domicilio) extra.push('A domicilio (San Nicolás/Apodaca) *costo adicional*')
        if (waitlist) extra.push('Lista de espera si no hay lugar')

        const msg =
            `Hola, soy ${name}.
Tel: ${phone}
Quiero agendar en ROSE BEAUTY STUDIO.

Servicios: ${servicesStr}
Cliente: ${isNew === 'nuevo' ? 'Nuevo' : 'Ya ha venido'}
Fecha: ${date}
Hora: ${time}
${extra.length ? `Notas: ${extra.join(' | ')}` : ''}

Recordatorio: por favor llegar a tiempo. Tolerancia 20 min; después se reagenda otro día.

¿Me confirmas la cita? Gracias 🌹`

        const wa = `https://wa.me/${PHONE}?text=${encode(msg)}`
        window.open(wa, '_blank', 'noopener,noreferrer')
    }

    function handleICS() {
        if (!date || !time) return
        const start = new Date(`${date}T${time}:00`)
        // duración estándar de bloque: 4 horas
        const end = new Date(start.getTime() + 4 * 60 * 60 * 1000)

        const summary = `Cita: ROSE BEAUTY STUDIO (${selectedServices.join(' + ')})`
        const description = `Recordar tolerancia de 20 min. Cliente: ${name} (${isNew === 'nuevo' ? 'Nuevo' : 'Recurrente'})`
        const ics = buildICS(summary, description, start.toISOString(), end.toISOString())

        const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `cita-rose-${date}-${time.replace(':', '')}.ics`
        link.click()
        URL.revokeObjectURL(url)
    }

    const showSundayInfo = selectedDay === 0

    return (
        <section id="booking">
            <div className="glass p-8">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Agendar</h2>
                <p className="mt-2 text-sm text-rosebrand-700">
                    Este formulario arma un mensaje y lo envía a nuestro WhatsApp para confirmar tu cita.
                    No se cobra anticipo. La confirmación es manual.
                </p>

                <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Nombre</label>
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Tu nombre"
                                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-rosebrand-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Teléfono / WhatsApp</label>
                            <input
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="812 870 6467"
                                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-rosebrand-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">¿Has venido antes?</label>
                            <div className="mt-2 flex gap-3">
                                <label className={`px-4 py-2 rounded-xl border cursor-pointer ${isNew === 'nuevo' ? 'bg-rosebrand-100 border-rosebrand-300' : 'bg-white'}`}>
                                    <input type="radio" name="tipo" className="hidden" checked={isNew === 'nuevo'} onChange={() => setIsNew('nuevo')} />
                                    Nuevo
                                </label>
                                <label className={`px-4 py-2 rounded-xl border cursor-pointer ${isNew === 'recurrente' ? 'bg-rosebrand-100 border-rosebrand-300' : 'bg-white'}`}>
                                    <input type="radio" name="tipo" className="hidden" checked={isNew === 'recurrente'} onChange={() => setIsNew('recurrente')} />
                                    Ya he venido
                                </label>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border bg-white">
                            <label className="block text-sm font-medium">Servicios (máx. 2)</label>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {SERVICES.map(s => {
                                    const active = selectedServices.includes(s)
                                    return (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => toggleService(s)}
                                            className={`px-3 py-2 rounded-lg border text-sm text-left ${active ? 'bg-rosebrand-100 border-rosebrand-300' : 'bg-white hover:bg-rosebrand-50'}`}
                                        >
                                            {s}
                                        </button>
                                    )
                                })}
                            </div>
                            <p className="mt-2 text-xs text-rosebrand-700">
                                Seleccionados: {selectedServices.length ? selectedServices.join(' + ') : 'Ninguno'}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Fecha</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={e => { setDate(e.target.value); setTime('') }}
                                    className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-rosebrand-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Hora (bloques de 4h)</label>
                                <select
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                    className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-rosebrand-400"
                                    required
                                    disabled={selectedDay === 0 && !sundayExtra}
                                >
                                    <option value="">Selecciona...</option>
                                    {(selectedDay === 0 ? sundaySlots : weekdaySlots).map(t => (
                                        <option key={t} value={t}>{t} hrs</option>
                                    ))}
                                </select>
                                {selectedDay !== 0 && weekdaySlots.length === 0 && (
                                    <p className="text-xs text-rosebrand-700 mt-1">Este día no tiene horarios disponibles.</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="rounded" checked={domicilio} onChange={e => setDomicilio(e.target.checked)} />
                                <span className="text-sm">A domicilio (San Nicolás/Apodaca) — costo adicional</span>
                            </label>

                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="rounded" checked={waitlist} onChange={e => setWaitlist(e.target.checked)} />
                                <span className="text-sm">Lista de espera si el horario ya está lleno</span>
                            </label>

                            {showSundayInfo && (
                                <div className="p-3 rounded-lg border border-rosebrand-200 bg-rosebrand-50">
                                    <label className="inline-flex items-center gap-2">
                                        <input type="checkbox" className="rounded" checked={sundayExtra} onChange={e => setSundayExtra(e.target.checked)} />
                                        <span className="text-sm">
                                            Domingo con costo extra $100 (sujeto a disponibilidad). Actívalo para ver horarios.
                                        </span>
                                    </label>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={!canSubmit}
                                className={`rounded-xl px-5 py-3 text-white font-medium transition ${canSubmit ? 'bg-rosebrand-600 hover:bg-rosebrand-700' : 'bg-rosebrand-300 cursor-not-allowed'}`}
                            >
                                Enviar por WhatsApp
                            </button>
                            <button
                                type="button"
                                onClick={handleICS}
                                disabled={!date || !time}
                                className={`rounded-xl px-5 py-3 font-medium transition border ${(!date || !time) ? 'bg-white text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white hover:bg-rosebrand-50 border-rosebrand-200 text-rosebrand-800'}`}
                            >
                                Descargar recordatorio (.ics)
                            </button>
                            <a
                                href={`https://wa.me/${PHONE}`}
                                className="rounded-xl px-5 py-3 font-medium transition border bg-white hover:bg-rosebrand-50 border-rosebrand-200 text-rosebrand-800"
                                target="_blank" rel="noreferrer"
                            >
                                Chat directo
                            </a>
                        </div>

                        <p className="text-xs text-rosebrand-700">
                            *Nota: La confirmación es manual por WhatsApp. Tolerancia 20 min; después se reagenda.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}