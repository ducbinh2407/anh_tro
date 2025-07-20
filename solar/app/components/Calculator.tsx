// src/app/components/Calculator.tsx
'use client'

import { useState } from 'react'

export default function Calculator() {
  const [kWh, setKWh] = useState<string>('')
  const [evnCostPerPerson, setEvnCostPerPerson] = useState<number | null>(null)
  const [anhTrogCostPerPerson, setAnhTrogCostPerPerson] = useState<number | null>(null)
  const [savings, setSavings] = useState<number | null>(null)
  const [error, setError] = useState<string>('')

  const handleCalculate = () => {
    setError('')
    setEvnCostPerPerson(null)
    setAnhTrogCostPerPerson(null)
    setSavings(null)

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

    // Calculate EVN cost per person: (input/8)*3500
    const evnCost = (kWhNumber / 8) * 3500
    setEvnCostPerPerson(evnCost)

    // Calculate Ánh Trọ cost per person: (input/8)*3000
    const anhTrogCost = (kWhNumber / 8) * 3000
    setAnhTrogCostPerPerson(anhTrogCost)

    // Calculate savings
    setSavings(evnCost - anhTrogCost)
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
          min="0"
          step="0.1"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors mb-4"
      >
        Tính toán
      </button>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {evnCostPerPerson !== null && anhTrogCostPerPerson !== null && savings !== null && (
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold mb-2">Khi sử dụng EVN:</h3>
            <p>
              Tiền điện mỗi người phải trả:{' '}
              <span className="font-bold">
                {evnCostPerPerson.toLocaleString('vi-VN')} VND
              </span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              (Tổng {kWh} kWh / 8 người × 3,500 VND)
            </p>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold mb-2">Khi sử dụng Ánh Trọ:</h3>
            <p>
              Tiền điện mỗi người phải trả:{' '}
              <span className="font-bold">
                {anhTrogCostPerPerson.toLocaleString('vi-VN')} VND
              </span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              (Tổng {kWh} kWh / 8 người × 3,000 VND)
            </p>
          </div>

          <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <h3 className="font-bold mb-2">Lợi ích:</h3>
            <p>
              Mỗi người tiết kiệm được:{' '}
              <span className="font-bold text-green-600">
                {savings.toLocaleString('vi-VN')} VND
              </span>
            </p>
            <p className="mt-2">
              Cả nhà trọ tiết kiệm:{' '}
              <span className="font-bold text-green-600">
                {(savings * 8).toLocaleString('vi-VN')} VND
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}