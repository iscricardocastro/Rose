import React from 'react'
import Header from './components/Header.jsx'
import Services from './components/Services.jsx'
import Hours from './components/Hours.jsx'
import Booking from './components/Booking.jsx'
import Policies from './components/Policies.jsx'
import Footer from './components/Footer.jsx'
import WhatsappFab from './components/WhatsappFab.jsx'
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen hero-gradient text-rosebrand-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-14 pb-24">
        <section id="intro" className="pt-10 hero-gradient">
          <div className="section">
            <div className="glass p-8 md:p-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display">
                ROSE BEAUTY STUDIO
              </h1>
              <p className="mt-3 text-rosebrand-700 md:text-lg">
                Manicure · Pedicure Spa · Gelish · Acrílicas · Soft Gel
              </p>
              <p className="mt-4 text-sm md:text-base">
                Atención en local. A domicilio (San Nicolás y Apodaca) con costo adicional.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#booking" className="btn-primary">Agendar por WhatsApp</a>
                <a href="#services" className="btn-outline">Ver servicios</a>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Hours />
        <Booking />
        <Policies />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  )
}