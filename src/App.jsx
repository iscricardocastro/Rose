import React from 'react'
import Header from './components/Header.jsx'
import Services from './components/Services.jsx'
import Hours from './components/Hours.jsx'
import Booking from './components/Booking.jsx'
import Policies from './components/Policies.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen hero-gradient text-rosebrand-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-14 pb-24">
        <section id="intro" className="pt-10">
          <div className="glass p-8 md:p-10">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              ROSE BEAUTY STUDIO
            </h1>
            <p className="mt-3 text-rosebrand-700 md:text-lg">
              Manicure · Pedicure Spa · Gelish · Acrílicas · Soft Gel
            </p>
            <p className="mt-4 text-sm md:text-base">
              Atención en local. A domicilio con costo adicional en San Nicolás y Apodaca.
            </p>
            <a
              href="#booking"
              className="inline-block mt-6 rounded-xl bg-rosebrand-600 px-6 py-3 text-white font-medium hover:bg-rosebrand-700 transition"
            >
              Agendar por WhatsApp
            </a>
          </div>
        </section>

        <Services />
        <Hours />
        <Booking />
        <Policies />
      </main>
      <Footer />
    </div>
  )
}