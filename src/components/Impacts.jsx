export default function Impacts() {
  return (
    <section id="dampak" className="relative py-20 bg-gradient-to-b from-white to-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Dampak Riba</h2>
          <p className="mt-4 text-gray-700">Riba menimbulkan berbagai dampak negatif pada tatanan ekonomi dan sosial.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold text-gray-900">Dampak Ekonomi</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>Utang berbunga yang mencekik</li>
              <li>Ketidakseimbangan sirkulasi uang</li>
              <li>Potensi krisis finansial sistemik</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold text-gray-900">Dampak Sosial</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>Melebarkan kesenjangan</li>
              <li>Eksploitasi pihak lemah</li>
              <li>Menumbuhkan budaya konsumtif</li>
            </ul>
          </div>
        </div>

        <blockquote className="mt-10 p-6 bg-green-100 border border-green-200 rounded-xl text-green-900">
          <p className="italic">“Wahai orang-orang yang beriman! Bertakwalah kepada Allah dan tinggalkan sisa riba (yang belum dipungut) jika kamu orang-orang yang beriman.”</p>
          <p className="mt-2 text-sm">— QS. Al-Baqarah [2]: 278</p>
        </blockquote>
      </div>
    </section>
  )
}
