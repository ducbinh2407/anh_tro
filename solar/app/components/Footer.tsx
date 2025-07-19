// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-yellow-500 dark:bg-yellow-600 text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Ánh Trọ</h3>
            <p className="mt-2">Giải pháp năng lượng bền vững cho nhà trọ</p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold mb-2">Liên hệ</h4>
            <p>Email: info@anhtro.vn</p>
            <p>Điện thoại: 0908021631</p>
            <p>Địa chỉ: 153 Nguyễn Chí Thanh, Phường An Đông, TP.HCM</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Ánh Trọ. Tất cả quyền được bảo lưu.</p>
          <p className="mt-2 text-sm">
            Hướng tới các mục tiêu phát triển bền vững (SDG) của Liên Hợp Quốc
          </p>
        </div>
      </div>
    </footer>
  )
}