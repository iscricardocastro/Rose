import React from 'react'

export default function Policies() {
    return (
        <section id="policies">
            <div className="glass p-8">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Políticas</h2>
                <ul className="mt-4 space-y-2 text-sm">
                    <li>• Sin anticipo.</li>
                    <li>• Tolerancia de <strong>20 minutos</strong>. Después, se reagenda para otro día.</li>
                    <li>• Después de <strong>2 cancelaciones</strong> no hay reprogramación.</li>
                    <li>• Para volver a agendar tras una cancelación, anticipo de <strong>$70</strong>.</li>
                    <li>• Domingo: sujeto a disponibilidad con <strong>costo extra $100</strong>.</li>
                    <li>• Lista de espera disponible cuando el horario esté lleno.</li>
                </ul>
            </div>
        </section>
    )
}