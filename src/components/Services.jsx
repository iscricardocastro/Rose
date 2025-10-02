import React from "react";
import { FaSpa, FaHandSparkles, FaPaintBrush, FaStar, FaLeaf } from "react-icons/fa";

const items = [
    {
        title: "Manicure",
        desc: "Cuidado profundo de uñas y cutículas, con acabado profesional y relajante.",
        icon: <FaHandSparkles className="text-rosebrand-500 text-2xl" />,
    },
    {
        title: "Pedicure Spa",
        desc: "Relajación, exfoliación y tratamiento hidratante para pies suaves y renovados.",
        icon: <FaSpa className="text-rosebrand-500 text-2xl" />,
    },
    {
        title: "Gel Semipermanente",
        desc: "Color intenso y duradero con brillo espejo por semanas.",
        icon: <FaPaintBrush className="text-rosebrand-500 text-2xl" />,
    },
    {
        title: "Acrílicas",
        desc: "Diseños personalizados, estructura resistente y estilo impecable (hasta 3.5 hrs).",
        icon: <FaStar className="text-rosebrand-500 text-2xl" />,
    },
    {
        title: "Soft Gel",
        desc: "Extensiones ligeras, naturales y con acabado perfecto.",
        icon: <FaLeaf className="text-rosebrand-500 text-2xl" />,
    },
];

export default function Services() {
    return (
        <section id="services">
            <div className="glass p-8 md:p-12 rounded-3xl">
                <div className="text-center">
                    <h2 className="title">Servicios</h2>
                    <p className="mt-3 text-sm md:text-base text-rosebrand-700">
                        Precios variables · <strong>Duración estándar</strong>. Puedes combinar hasta <strong>2 servicios</strong> (manos y pies).
                    </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((it) => (
                        <article
                            key={it.title}
                            className="group relative p-6 rounded-2xl border border-rosebrand-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                        >
                            {/* Decorativo */}
                            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-rosebrand-200 via-rosebrand-400 to-rosebrand-200 opacity-0 group-hover:opacity-100 transition" />

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">{it.icon}</div>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-rosebrand-800">
                                        {it.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-rosebrand-700 leading-relaxed">
                                        {it.desc}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}