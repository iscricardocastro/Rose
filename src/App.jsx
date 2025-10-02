import React from "react";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import Hours from "./components/Hours.jsx";
import Booking from "./components/Booking.jsx";
import Policies from "./components/Policies.jsx";
import Footer from "./components/Footer.jsx";
import WhatsappFab from "./components/WhatsappFab.jsx";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rosebrand-50 via-white to-rosebrand-100 text-rosebrand-900 relative">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20 pb-24">

        {/* HERO */}
        <section id="intro" className="pt-28">
          <div className="glass p-8 md:p-14 rounded-3xl text-center relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-20 bg-[url('/bg-texture.jpg')] bg-cover bg-center"></div>
            <div className="relative z-10">
              {/* Logo centrado */}
              <div className="mx-auto mb-6 w-24 h-24 rounded-full overflow-hidden shadow-lg border border-rosebrand-100">
                <img
                  src="/logo.png"
                  alt="Logo Rose Beauty Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display text-rosebrand-800">
                ROSE BEAUTY STUDIO
              </h1>
              <p className="mt-4 text-rosebrand-700 text-lg md:text-xl font-light">
                Manicure · Pedicure Spa · Gelish · Acrílicas · Soft Gel
              </p>
              <p className="mt-3 text-sm md:text-base text-rosebrand-600">
                Atención en local · Servicio a domicilio (San Nicolás y Apodaca)
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a href="#booking" className="btn-primary shadow-md">
                  Agendar cita
                </a>
                <a href="#services" className="btn-outline">
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIONES */}
        <Services />
        <Hours />
        <Booking />
        <Policies />
      </main>

      <Footer />
      <WhatsappFab />
      <Analytics />
    </div>
  );
}