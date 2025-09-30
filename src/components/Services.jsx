import React from 'react'

const items = [
    { title: 'Manicure', desc: 'Cuidado y limpieza de uñas y cutícula.' },
    { title: 'Pedicure Spa', desc: 'Relajación, exfoliación y acabado perfecto.' },
    { title: 'Gelish', desc: 'Color de larga duración y brillo intenso.' },
    { title: 'Acrílicas', desc: 'Estructura y diseño para mayor duración. (Hasta 3.5 hrs)' },
    { title: 'Soft Gel', desc: 'Extensiones ligeras y naturales.' },
]

export default function Services() {
    return (
        <section id="services">
            <div className="glass p-8">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Servicios</h2>
                <p className="mt-2 text-sm text-rosebrand-700">
                    Cada servicio puede tener precio distinto, pero la <strong>duración es la misma</strong>.
                    Puedes combinar hasta <strong>2 servicios</strong> (pies y manos en una sola cita).
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                    {items.map((s) => (
                        <article key={s.title} className="p-5 rounded-xl border bg-white hover:shadow-md transition">
                            <h3 className="font-semibold">{s.title}</h3>
                            <p className="mt-1 text-sm text-rosebrand-700">{s.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}