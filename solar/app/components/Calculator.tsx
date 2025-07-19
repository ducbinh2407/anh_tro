// src/app/components/Calculator.tsx
'use client'

import { useState } from 'react'

export default function Calculator() {
  const [kWh, setKWh] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)
  const [solarResult, setSolarResult] = useState<number | null>(null)
  const [error, setError] = useState<string>('')

  const calculateElectricityCost = (tong_kWh: number): number => {
    // Constants
    const SO_HO = 2
    const THUE_VAT = 0.08
    const GIA_BAC_1 = 1984
    const GIA_BAC_2 = 2050
    const GIA_BAC_3 = 2380
    const GIA_BAC_4 = 2998
    const GIA_BAC_5 = 3350
    const GIA_BAC_6 = 3460
    const DINH_MUC_BAC_1 = 50
    const DINH_MUC_BAC_2 = 50
    const DINH_MUC_BAC_3 = 100
    const DINH_MUC_BAC_4 = 100
    const DINH_MUC_BAC_5 = 100

    // Calculate thresholds
    const dm_bac_1 = DINH_MUC_BAC_1 * SO_HO
    const dm_bac_2 = DINH_MUC_BAC_2 * SO_HO
    const dm_bac_3 = DINH_MUC_BAC_3 * SO_HO
    const dm_bac_4 = DINH_MUC_BAC_4 * SO_HO
    const dm_bac_5 = DINH_MUC_BAC_5 * SO_HO

    const moc_1 = dm_bac_1
    const moc_2 = moc_1 + dm_bac_2
    const moc_3 = moc_2 + dm_bac_3
    const moc_4 = moc_3 + dm_bac_4
    const moc_5 = moc_4 + dm_bac_5

    // Calculate progressive cost
    let tien_truoc_thue = 0

    if (tong_kWh <= moc_1) {
      tien_truoc_thue = tong_kWh * GIA_BAC_1
    } else if (tong_kWh <= moc_2) {
      tien_truoc_thue = moc_1 * GIA_BAC_1 + (tong_kWh - moc_1) * GIA_BAC_2
    } else if (tong_kWh <= moc_3) {
      tien_truoc_thue =
        moc_1 * GIA_BAC_1 +
        dm_bac_2 * GIA_BAC_2 +
        (tong_kWh - moc_2) * GIA_BAC_3
    } else if (tong_kWh <= moc_4) {
      tien_truoc_thue =
        moc_1 * GIA_BAC_1 +
        dm_bac_2 * GIA_BAC_2 +
        dm_bac_3 * GIA_BAC_3 +
        (tong_kWh - moc_3) * GIA_BAC_4
    } else if (tong_kWh <= moc_5) {
      tien_truoc_thue =
        moc_1 * GIA_BAC_1 +
        dm_bac_2 * GIA_BAC_2 +
        dm_bac_3 * GIA_BAC_3 +
        dm_bac_4 * GIA_BAC_4 +
        (tong_kWh - moc_4) * GIA_BAC_5
    } else {
      tien_truoc_thue =
        moc_1 * GIA_BAC_1 +
        dm_bac_2 * GIA_BAC_2 +
        dm_bac_3 * GIA_BAC_3 +
        dm_bac_4 * GIA_BAC_4 +
        dm_bac_5 * GIA_BAC_5 +
        (tong_kWh - moc_5) * GIA_BAC_6
    }

    // Calculate total with VAT
    return tien_truoc_thue * (1 + THUE_VAT)
  }

  const handleCalculate = () => {
    setError('')
    setResult(null)
    setSolarResult(null)

    if (!kWh) {
      setError('Vui lòng nhập số kWh')
      return
    }

    const kWhNumber = parseFloat(kWh)
    if (isNaN(kWhNumber)) {
      setError('Vui lòng nhập số hợp lệ')
      return
    }

    if (kWhNumber < 0) {
      setError('Số kWh không thể âm')
      return
    }

    // Calculate EVN cost
    const evnCost = calculateElectricityCost(kWhNumber)
    setResult(evnCost)

    // Calculate solar cost (fixed 3500 VND per kWh)
    const solarCost = kWhNumber * 3500
    setSolarResult(solarCost)
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">
        Tính toán chi phí điện
      </h2>

      <div className="mb-4">
        <label htmlFor="kWh" className="block mb-2 font-medium">
          Nhập tổng số điện sử dụng (kWh):
        </label>
        <input
          type="number"
          id="kWh"
          value={kWh}
          onChange={(e) => setKWh(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
          placeholder="Ví dụ: 150"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="btn-primary w-full mb-4"
      >
        Tính toán
      </button>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {result !== null && solarResult !== null && (
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold mb-2">Khi sử dụng EVN:</h3>
            <p>
              Tổng tiền điện phải trả:{' '}
              <span className="font-bold">
                {result.toLocaleString('vi-VN')} VND
              </span>
            </p>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold mb-2">Khi sử dụng Ánh Trọ:</h3>
            <p>
              Tổng tiền điện phải trả:{' '}
              <span className="font-bold">
                {solarResult.toLocaleString('vi-VN')} VND
              </span>
            </p>
            <p className="mt-2">
              Tiết kiệm được:{' '}
              <span className="font-bold text-green-600">
                {(- result + solarResult).toLocaleString('vi-VN')} VND
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}