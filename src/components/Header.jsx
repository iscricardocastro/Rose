import React from 'react'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/60">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <a href="#" className="font-semibold text-rosebrand-800 tracking-tight">
                    ROSE BEAUTY STUDIO
                </a>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#services" className="hover:text-rosebrand-700">Servicios</a>
                    <a href="#hours" className="hover:text-rosebrand-700">Horarios</a>
                    <a href="#booking" className="hover:text-rosebrand-700">Agendar</a>
                    <a href="#policies" className="hover:text-rosebrand-700">Políticas</a>
                    <a href="https://wa.me/528128706467" className="rounded-lg bg-rosebrand-600 text-white px-4 py-2 hover:bg-rosebrand-700">
                        WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    )
}