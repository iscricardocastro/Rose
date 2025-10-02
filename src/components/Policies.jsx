import React from "react";
import { FaInfoCircle, FaClock, FaCalendarTimes, FaMoneyBillWave, FaList } from "react-icons/fa";

export default function Policies() {
    const policies = [
        { icon: <FaMoneyBillWave className="text-rosebrand-500" />, text: "Sin anticipo inicial (excepto en reprogramaciones)." },
        { icon: <FaClock className="text-rosebrand-500" />, text: "Tolerancia de 20 minutos. Después, se reagenda para otro día." },
        { icon: <FaCalendarTimes className="text-rosebrand-500" />, text: "Después de 2 cancelaciones no hay reprogramación." },
        { icon: <FaMoneyBillWave className="text-rosebrand-500" />, text: "Para volver a agendar tras una cancelación, se requiere un anticipo de $70." },
        { icon: <FaClock className="text-rosebrand-500" />, text: "Domingo sujeto a disponibilidad con costo extra $100." },
        { icon: <FaList className="text-rosebrand-500" />, text: "Lista de espera disponible cuando el horario esté lleno." },
    ];

    return (
        <section id="policies" >
            <div className="glass p-8 md:p-12 rounded-3xl">
                <div className="text-center">
                    <h2 className="title">Políticas del servicio</h2>
                    <p className="mt-2 text-sm text-rosebrand-700">
                        Te pedimos leer con atención para asegurar una experiencia ideal 🌸
                    </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                    {policies.map((p, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 p-4 rounded-xl border border-rosebrand-100 bg-white/80 backdrop-blur-sm hover:shadow-md transition"
                        >
                            <div className="text-lg">{p.icon}</div>
                            <p className="text-sm text-rosebrand-800 leading-relaxed">{p.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center text-xs text-rosebrand-600">
                    <FaInfoCircle className="inline text-rosebrand-400 mr-1" />
                    <em>Gracias por tu comprensión y compromiso. Queremos brindarte el mejor servicio.</em>
                </div>
            </div>
        </section>
    );
}