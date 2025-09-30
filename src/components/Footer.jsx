import React from 'react'

export default function Footer() {
    return (
        <footer className="mt-16 border-t bg-white/70 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-rosebrand-700">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} ROSE BEAUTY STUDIO</p>
                    <div className="space-x-4">
                        <a className="hover:text-rosebrand-900" href="tel:+528128706467">Tel: 81 2870 6467</a>
                        <a className="hover:text-rosebrand-900" href="https://wa.me/528128706467" target="_blank" rel="noreferrer">WhatsApp</a>
                        {/* Coloca aquí tus redes cuando las tengas */}
                    </div>
                </div>
            </div>
        </footer>
    )
}