import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-rosebrand-100 bg-white/70 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-rosebrand-700">
                {/* Contenedor principal */}
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">

                    {/* Logo + Nombre */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt="Logo Rose Beauty Studio"
                            className="w-10 h-10 rounded-full object-cover border border-rosebrand-200 shadow-sm"
                        />
                        <span className="font-display text-base font-semibold text-rosebrand-800">
                            ROSE BEAUTY STUDIO
                        </span>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="tel:+528128706467"
                            className="flex items-center gap-2 hover:text-rosebrand-900 transition"
                        >
                            <FaPhoneAlt className="text-rosebrand-500" />
                            <span>81 2870 6467</span>
                        </a>
                        <span className="hidden sm:block text-rosebrand-300">|</span>
                        <a
                            href="https://wa.me/528128706467"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-rosebrand-900 transition"
                        >
                            <FaWhatsapp className="text-rosebrand-500" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="mt-8 border-t border-rosebrand-100 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-rosebrand-600 gap-2">
                    <p>© {year} ROSE BEAUTY STUDIO · Todos los derechos reservados</p>
                    <p className="flex items-center gap-1">
                        Hecho con <FaHeart className="text-rosebrand-400" /> en México
                    </p>
                </div>
            </div>
        </footer>
    );
}