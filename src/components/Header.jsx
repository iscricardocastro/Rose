import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <a
                    href="#"
                    className="font-display text-xl tracking-tight text-rosebrand-800 font-semibold hover:text-rosebrand-600 transition"
                >
                    ROSE BEAUTY STUDIO
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a href="#services" className="nav-link">
                        Servicios
                    </a>
                    <a href="#hours" className="nav-link">
                        Horarios
                    </a>
                    <a href="#booking" className="nav-link">
                        Agendar
                    </a>
                    <a href="#policies" className="nav-link">
                        Políticas
                    </a>
                    <a
                        href="https://wa.me/528128706467"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-rosebrand-600 hover:bg-rosebrand-700 text-white px-4 py-2 rounded-full transition"
                    >
                        <FaWhatsapp /> WhatsApp
                    </a>
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-rosebrand-50 transition"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-rosebrand-100 shadow-lg">
                    <nav className="flex flex-col p-4 space-y-3 text-sm font-medium">
                        <a href="#services" onClick={() => setOpen(false)} className="nav-link">
                            Servicios
                        </a>
                        <a href="#hours" onClick={() => setOpen(false)} className="nav-link">
                            Horarios
                        </a>
                        <a href="#booking" onClick={() => setOpen(false)} className="nav-link">
                            Agendar
                        </a>
                        <a href="#policies" onClick={() => setOpen(false)} className="nav-link">
                            Políticas
                        </a>
                        <a
                            href="https://wa.me/528128706467"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-rosebrand-600 hover:bg-rosebrand-700 text-white px-4 py-2 rounded-full transition"
                        >
                            <FaWhatsapp /> WhatsApp
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}