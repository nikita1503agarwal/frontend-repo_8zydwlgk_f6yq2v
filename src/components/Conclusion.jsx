export default function Conclusion() {
  return (
    <section id="kesimpulan" className="relative py-20 bg-gradient-to-t from-white to-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Kesimpulan & Ajakan</h2>
            <p className="mt-4 text-gray-700">
              Riba membawa mudarat bagi individu dan masyarakat. Pilihlah transaksi yang adil, transparan, dan sesuai syariah agar harta menjadi berkah.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
              <li>Kenali bentuk-bentuk riba</li>
              <li>Hindari utang berbunga</li>
              <li>Gunakan produk keuangan syariah</li>
            </ul>
            <div className="mt-8">
              <a href="#beranda" className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">Mulai dari Beranda</a>
            </div>
          </div>

          <div>
            <div className="aspect-video rounded-xl overflow-hidden border shadow-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2OnOOMoV8yE"
                title="Edukasi Riba"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-3 text-xs text-gray-500">Video referensi singkat seputar riba (contoh). Bisa diganti sesuai kebutuhan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
