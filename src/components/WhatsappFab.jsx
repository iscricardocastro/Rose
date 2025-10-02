import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFab() {
    return (
        <a
            href="https://wa.me/528128706467"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full shadow-lg bg-rosebrand-600 hover:bg-rosebrand-700 text-white px-5 py-3 transition transform hover:scale-105 animate-fade-in"
            aria-label="Chatear por WhatsApp"
        >
            <FaWhatsapp className="text-2xl" />
            <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
        </a>
    );
}