import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-rosebrand-100/70 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                {/* Logo + Nombre */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border border-rosebrand-100">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <span className="font-display text-lg sm:text-xl tracking-tight text-rosebrand-800 font-semibold group-hover:text-rosebrand-600 transition">
                        ROSE BEAUTY STUDIO
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-rosebrand-700">
                    <a href="#services" className="hover:text-rosebrand-500 transition">Servicios</a>
                    <a href="#hours" className="hover:text-rosebrand-500 transition">Horarios</a>
                    <a href="#booking" className="hover:text-rosebrand-500 transition">Agendar</a>
                    <a href="#policies" className="hover:text-rosebrand-500 transition">Políticas</a>

                    <a
                        href="https://wa.me/528128706467"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-rosebrand-600 hover:bg-rosebrand-700 text-white px-4 py-2 rounded-full transition shadow-md"
                    >
                        <FaWhatsapp className="text-lg" /> WhatsApp
                    </a>
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-rosebrand-50 transition"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-rosebrand-100 shadow-lg animate-slide-down">
                    <nav className="flex flex-col p-4 space-y-3 text-sm font-medium text-rosebrand-700">
                        <a href="#services" onClick={() => setOpen(false)} className="hover:text-rosebrand-500">Servicios</a>
                        <a href="#hours" onClick={() => setOpen(false)} className="hover:text-rosebrand-500">Horarios</a>
                        <a href="#booking" onClick={() => setOpen(false)} className="hover:text-rosebrand-500">Agendar</a>
                        <a href="#policies" onClick={() => setOpen(false)} className="hover:text-rosebrand-500">Políticas</a>
                        <a
                            href="https://wa.me/528128706467"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-rosebrand-600 hover:bg-rosebrand-700 text-white px-4 py-2 rounded-full transition"
                        >
                            <FaWhatsapp className="text-lg" /> WhatsApp
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}