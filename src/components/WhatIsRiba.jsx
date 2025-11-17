export default function WhatIsRiba() {
  return (
    <section id="apa-itu-riba" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Apa Itu Riba?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Riba adalah tambahan yang disyaratkan dalam transaksi pinjam-meminjam atau jual beli yang tidak sesuai dengan ketentuan syariah. Intinya, riba adalah keuntungan yang diperoleh tanpa adanya risiko dan usaha yang seimbang.
            </p>
            <div className="mt-6 p-4 border rounded-lg bg-green-50 text-green-900">
              <p className="font-semibold">Dalil:</p>
              <p className="mt-2 text-sm">
                “Allah menghalalkan jual beli dan mengharamkan riba.” (QS. Al-Baqarah [2]: 275)
              </p>
              <p className="mt-2 text-sm">
                “Rasulullah SAW melaknat pemakan riba, pemberinya, penulisnya, dan saksinya.” (HR. Muslim)
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Perbandingan Transaksi</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border bg-white">
                <div className="text-sm font-semibold text-red-700 bg-red-50 inline-block px-3 py-1 rounded-full">Riba</div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-4">
                  <li>Bunga tetap tanpa risiko</li>
                  <li>Eksploitasi pihak lemah</li>
                  <li>Memicu ketidakadilan</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border bg-white">
                <div className="text-sm font-semibold text-green-700 bg-green-50 inline-block px-3 py-1 rounded-full">Transaksi Halal</div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-4">
                  <li>Berbagi risiko & keuntungan</li>
                  <li>Jelas objek dan akadnya</li>
                  <li>Transparan & adil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
