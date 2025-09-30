import React from 'react'

export default function Hours() {
    return (
        <section id="hours">
            <div className="glass p-8">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Horarios</h2>
                <div className="mt-4 grid sm:grid-cols-2 gap-6 text-sm">
                    <div className="p-5 rounded-xl border bg-white">
                        <h3 className="font-semibold">Días y horas de atención</h3>
                        <ul className="mt-2 list-disc list-inside space-y-1">
                            <li>Lunes a Viernes: 9:00 a.m. – 8:00 p.m.</li>
                            <li>Sábado: 7:00 a.m. – 5:00 p.m.</li>
                            <li>Domingo: <em>Off</em> (posible con costo extra $100 según disponibilidad)</li>
                            <li>Citas en bloques de <strong>4 horas</strong>.</li>
                        </ul>
                    </div>
                    <div className="p-5 rounded-xl border bg-white">
                        <h3 className="font-semibold">Ubicación & Domicilio</h3>
                        <ul className="mt-2 list-disc list-inside space-y-1">
                            <li>Atención en local.</li>
                            <li>A domicilio con costo adicional en: <strong>San Nicolás</strong> y <strong>Apodaca</strong>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}