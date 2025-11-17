import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-sm font-semibold text-green-800 bg-green-100 rounded-full px-3 py-1 mb-4">
            Edukasi Keuangan Syariah
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Kenali dan Hindari Riba
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Memahami apa itu riba, dampaknya bagi ekonomi dan sosial, serta solusi alternatif yang sesuai syariah.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apa-itu-riba" className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
              Mulai Belajar
            </a>
            <a href="#dampak" className="px-6 py-3 rounded-lg bg-white/90 backdrop-blur border border-green-200 text-green-700 font-semibold hover:bg-white transition-colors">
              Lihat Dampak
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
    </section>
  )
}
