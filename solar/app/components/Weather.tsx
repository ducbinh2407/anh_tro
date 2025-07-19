// src/app/components/Weather.tsx
'use client'

import { useState, useEffect } from 'react'

interface WeatherData {
  location: string
  temperature: number
  humidity: number
  condition: string
  forecast: {
    day: string
    temp: number
    condition: string
  }[]
}

const WeatherIcons = {
  sunny: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-yellow-400">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  ),
  'partly-cloudy': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-400">
      <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
      <path d="M15 3.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75zm3.75 3a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V6.75zm-.97 4.03a.75.75 0 011.06 0l1.5 1.5a.75.75 0 010 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l1.5-1.5-1.5-1.5a.75.75 0 010-1.06zM6.53 12.53a.75.75 0 011.06 0l1.5 1.5a.75.75 0 010 1.06l-1.5 1.5a.75.75 0 01-1.06-1.06l1.5-1.5-1.5-1.5a.75.75 0 010-1.06z" />
    </svg>
  ),
  cloudy: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-500">
      <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
    </svg>
  ),
  rainy: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-400">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
    </svg>
  )
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setWeather({
        location: "TP.Hồ Chí Minh",
        temperature: 32,
        humidity: 65,
        condition: "Nắng nhẹ",
        forecast: [
          { day: "Hôm nay", temp: 32, condition: "sunny" },
          { day: "Ngày mai", temp: 31, condition: "partly-cloudy" },
          { day: "Ngày kia", temp: 33, condition: "sunny" }
        ]
      })
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const getWeatherIcon = (condition: string) => {
    switch(condition) {
      case 'sunny': return WeatherIcons.sunny
      case 'partly-cloudy': return WeatherIcons['partly-cloudy']
      case 'cloudy': return WeatherIcons.cloudy
      case 'rainy': return WeatherIcons.rainy
      default: return WeatherIcons.sunny
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Thời tiết
        </h2>
        <div className="text-yellow-500 bg-yellow-100 dark:bg-yellow-900/50 px-3 py-1 rounded-full text-sm font-medium">
          Cập nhật mới nhất
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          <div className="animate-pulse h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      ) : weather ? (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {weather.location}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 capitalize">
                {weather.condition}
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mr-4">
                {weather.temperature}°C
              </div>
              {getWeatherIcon(weather.forecast[0].condition)}
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Độ ẩm</div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {weather.humidity}%
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">NLMT</div>
                <div className="font-semibold text-green-600 dark:text-green-400">
                  Tốt
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">UV</div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  8.2
                </div>
              </div>
            </div>
          </div>

          <h4 className="font-medium text-gray-900 dark:text-white mb-3">
            Dự báo 3 ngày
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {weather.forecast.map((day, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center"
              >
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {day.day}
                </div>
                <div className="flex justify-center mb-2">
                  {getWeatherIcon(day.condition)}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {day.temp}°C
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-red-500">Không thể tải dữ liệu thời tiết</p>
      )}
    </div>
  )
}