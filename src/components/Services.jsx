const items = [
    { title: 'Manicure', desc: 'Cuidado y limpieza de uñas y cutícula.' },
    { title: 'Pedicure Spa', desc: 'Relajación, exfoliación y acabado perfecto.' },
    { title: 'Gelish', desc: 'Color de larga duración y brillo intenso.' },
    { title: 'Acrílicas', desc: 'Estructura y diseño (hasta 3.5 hrs).' },
    { title: 'Soft Gel', desc: 'Extensiones ligeras y naturales.' },
];
export default function Services() {
    return (
        <section id="services" className="section">
            <div className="glass p-8">
                <h2 className="title">Servicios</h2>
                <p className="mt-2 text-sm text-rosebrand-700">
                    Precios variables; <strong>duración estándar</strong>. Combina hasta <strong>2 servicios</strong> (pies y manos en una sola cita).
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                    {items.map(it => (
                        <article key={it.title} className="p-5 rounded-xl border bg-white hover:shadow-soft hover:-translate-y-0.5 transition">
                            <h3 className="font-semibold">{it.title}</h3>
                            <p className="mt-1 text-sm text-rosebrand-700">{it.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}