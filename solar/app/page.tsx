// app/page.tsx
import Image from 'next/image'
import Navbar from './components/Navbar'
import Calculator from './components/Calculator'
import Weather from './components/Weather'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">
                  Giải pháp năng lượng mặt trời
                </span>
                <br />
                cho nhà trọ Việt Nam
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
                Tiết kiệm chi phí điện, tăng thu nhập và góp phần bảo vệ môi trường
                với hệ thống pin năng lượng mặt trời từ Ánh Trọ.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#calculator"
                  className="btn-primary px-8 py-4 text-lg font-semibold"
                >
                  Tính toán tiết kiệm
                </a>
                <a
                  href="#contact"
                  className="border-2 border-yellow-500 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
            <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto border-4 border-white dark:border-gray-800">
              <Image
                src="/images/hostel.jpg"
                alt="Solar panels on hostel roof"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-4xl font-bold text-yellow-500 mb-2">70%+</div>
                <p className="text-gray-700 dark:text-gray-300">Tiết kiệm chi phí điện</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-4xl font-bold text-yellow-500 mb-2">5 năm</div>
                <p className="text-gray-700 dark:text-gray-300">Bảo hành hệ thống</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
                <p className="text-gray-700 dark:text-gray-300">Nhà trọ đã lắp đặt</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Giải pháp <span className="text-yellow-500">năng lượng bền vững</span> cho nhà trọ
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Ánh Trọ mang đến hệ thống năng lượng mặt trời thông minh, giúp tối ưu hóa chi phí và tăng thu nhập cho chủ nhà trọ
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tiết kiệm điện tối đa</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Giảm đến 70% chi phí điện hàng tháng với hệ thống pin mặt trời công suất cao
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tăng thu nhập thụ động</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Bán điện dư lên lưới và nhận tiền từ EVN mỗi tháng
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Bảo hành dài hạn</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Hệ thống được bảo hành 5 năm, bảo trì định kỳ miễn phí
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                <Image
                  src="/images/hostel.jpg"
                  alt="Hostel with solar panels"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Nhà trọ An Phú - Quận 2</h3>
                  <p className="text-yellow-300">Tiết kiệm 2 triệu đồng/tháng</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                <span className="text-yellow-500">Tính toán</span> chi phí và lợi ích
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                So sánh chi phí điện khi sử dụng EVN và khi sử dụng hệ thống Ánh Trọ
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Calculator />
              <Weather />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Khách hàng <span className="text-yellow-500">nói gì</span> về chúng tôi
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-500">C</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Anh Duy</h4>
                    <p className="text-sm text-gray-500">Chủ nhà trọ Q.7</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Lắp đặt hệ thống Ánh Trọ đã giúp tôi tiết kiệm được 2-3 triệu đồng tiền điện mỗi tháng, đồng thời còn có thêm thu nhập từ bán điện dư.
                </p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-500">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Anh Tâm</h4>
                    <p className="text-sm text-gray-500">Chủ nhà trọ Q.Bình Thạnh</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Dịch vụ chuyên nghiệp từ khảo sát đến lắp đặt. Hệ thống hoạt động ổn định, giúp tôi giảm 70% hóa đơn điện so với trước đây.
                </p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-500">T</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Chị Thảo</h4>
                    <p className="text-sm text-gray-500">Chủ nhà trọ Q.10</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Khách thuê trọ rất hài lòng vì tiền điện giảm đáng kể. Tôi còn được nhận thêm 400-500 nghìn mỗi tháng từ bán điện dư.
                </p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                <span className="text-yellow-500">Liên hệ</span> với chúng tôi
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Để lại thông tin để được tư vấn miễn phí về giải pháp năng lượng mặt trời
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Thông tin liên hệ</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Điện thoại</h4>
                      <p className="text-gray-600 dark:text-gray-400">0908021631</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">info@anhtro.vn</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Địa chỉ</h4>
                      <p className="text-gray-600 dark:text-gray-400">153 Nguyễn Chí Thanh, Phường An Đông, TP.HCM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Giờ làm việc</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Thứ 2 - Thứ 6</span>
                      <span className="font-medium">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Thứ 7</span>
                      <span className="font-medium">8:00 - 12:00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Nhập họ tên của bạn"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Nhập email của bạn"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Nhập nội dung bạn quan tâm"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-lg font-semibold"
                  >
                    Gửi liên hệ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}