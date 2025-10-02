import React from "react";
import { FaClock, FaMapMarkerAlt, FaHome } from "react-icons/fa";

export default function Hours() {
    return (
        <section id="hours" >
            <div className="glass p-8 md:p-12 rounded-3xl">
                <div className="text-center">
                    <h2 className="title">Horarios & Ubicación</h2>
                    <p className="mt-2 text-sm text-rosebrand-700">
                        Con cita previa. Agenda con anticipación para asegurar tu lugar ✨
                    </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                    {/* Horarios */}
                    <div className="p-6 rounded-2xl border border-rosebrand-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3">
                            <FaClock className="text-rosebrand-500 text-2xl" />
                            <h3 className="font-display text-lg font-semibold text-rosebrand-800">
                                Días y horas de atención
                            </h3>
                        </div>

                        <ul className="mt-3 text-sm text-rosebrand-700 space-y-1 leading-relaxed">
                            <li>
                                <strong>Lunes a Viernes:</strong> 9:00 a.m. – 8:00 p.m.
                            </li>
                            <li>
                                <strong>Sábado:</strong> 7:00 a.m. – 5:00 p.m.
                            </li>
                            <li>
                                <strong>Domingo:</strong>{" "}
                                <em>Descanso</em>{" "}
                                <span className="text-rosebrand-500">
                                    (citas especiales con costo extra $100)
                                </span>
                            </li>
                            <li>Citas en bloques de <strong>4 horas</strong>.</li>
                        </ul>
                    </div>

                    {/* Ubicación */}
                    <div className="p-6 rounded-2xl border border-rosebrand-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-rosebrand-500 text-2xl" />
                            <h3 className="font-display text-lg font-semibold text-rosebrand-800">
                                Ubicación y servicio a domicilio
                            </h3>
                        </div>

                        <ul className="mt-3 text-sm text-rosebrand-700 space-y-1 leading-relaxed">
                            <li>📍 Atención en local principal.</li>
                            <li className="flex items-start gap-2">
                                <FaHome className="mt-0.5 text-rosebrand-400" />
                                <span>
                                    Servicio <strong>a domicilio</strong> con costo adicional en:{" "}
                                    <strong>San Nicolás</strong> y <strong>Apodaca</strong>.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Nota */}
                <div className="mt-6 text-center text-xs text-rosebrand-600">
                    <em>
                        *Recomendamos agendar con anticipación para asegurar tu cita.
                    </em>
                </div>
            </div>
        </section>
    );
}