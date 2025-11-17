import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsRiba from './components/WhatIsRiba'
import Impacts from './components/Impacts'
import Solutions from './components/Solutions'
import Conclusion from './components/Conclusion'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WhatIsRiba />
        <Impacts />
        <Solutions />
        <Conclusion />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Edukasi Riba — dibuat untuk presentasi publik. Warna hijau-putih untuk nuansa syariah dan profesional.
          </p>
          <a href="#beranda" className="text-green-700 hover:text-green-800">Kembali ke atas</a>
        </div>
      </footer>
    </div>
  )
}

export default App
