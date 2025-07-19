// src/app/components/Navbar.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 dark:bg-yellow-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Ánh Trọ Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold text-gray-900">Ánh Trọ</span>
        </Link>
        <div className="flex space-x-6">
          <Link href="#about" className="text-gray-900 hover:text-gray-700 font-medium">
            Giới thiệu
          </Link>
          <Link href="#calculator" className="text-gray-900 hover:text-gray-700 font-medium">
            Tính toán
          </Link>
          <Link href="#benefits" className="text-gray-900 hover:text-gray-700 font-medium">
            Lợi ích
          </Link>
          <Link href="#contact" className="text-gray-900 hover:text-gray-700 font-medium">
            Liên hệ
          </Link>
        </div>
      </div>
    </nav>
  )
}