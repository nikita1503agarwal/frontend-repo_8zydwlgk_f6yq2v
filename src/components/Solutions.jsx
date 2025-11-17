export default function Solutions() {
  return (
    <section id="solusi" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Solusi dan Alternatif</h2>
          <p className="mt-4 text-gray-700">Sistem keuangan syariah menawarkan mekanisme yang adil dan berkah.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-lg font-semibold text-green-800">Akad Murabahah</h3>
            <p className="mt-2 text-sm text-gray-700">Jual beli dengan margin keuntungan yang disepakati, bukan bunga.</p>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-lg font-semibold text-green-800">Akad Ijarah</h3>
            <p className="mt-2 text-sm text-gray-700">Sewa-menyewa manfaat suatu barang/jasa dengan jelas dan adil.</p>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-lg font-semibold text-green-800">Bagi Hasil (Mudharabah/Musyarakah)</h3>
            <p className="mt-2 text-sm text-gray-700">Berbagi keuntungan dan risiko sesuai porsi.</p>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-green-50 border border-green-200 text-green-900">
          <p className="font-semibold">Hadis:</p>
          <p className="mt-2 text-sm">“Tinggalkanlah apa yang meragukanmu kepada yang tidak meragukanmu.” (HR. Tirmidzi)</p>
        </div>
      </div>
    </section>
  )
}
