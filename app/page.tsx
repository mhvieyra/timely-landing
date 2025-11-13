import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="border-b border-black/10 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/timely-logo.png" alt="Timely" width={100} height={32} className="h-7 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-12">
            
            
            <Link
              href="https://app.timely.lat"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Comenzar gratis
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              href="https://app.timely.lat"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 py-24 sm:py-32 border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-6xl sm:text-7xl leading-tight mb-8 text-black lg:text-6xl font-sans font-bold">
            Productividad inteligente. Sin complicaciones.
          </h1>

          <p className="text-lg sm:text-xl text-black/70 mb-12 leading-relaxed max-w-2xl mx-auto font-sans font-normal">
             Pomodoro + Tareas. Timely te ayuda a trabajar mejor, entender cómo trabajas, y construir consistencia.
          </p>

          <Link
            href="https://app.timely.lat"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors"
          >
            Comenzar gratis
          </Link>

          {/* Hero Image */}
          <div className="mt-16 rounded-xl overflow-hidden border border-black/10 shadow-sm">
            <img src="/images/image-202.png" alt="Timely app interface" className="w-full h-auto bg-black/5 opacity-100" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/timely-logo.png"
                  alt="Timely"
                  width={100}
                  height={32}
                  className="h-6 w-auto invert"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">
                Productividad inteligente para personas que quieren trabajar mejor.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-6 uppercase tracking-wide">Producto</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://app.timely.lat"
                    target="_blank"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Aplicación
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.timely.lat"
                    target="_blank"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-6 uppercase tracking-wide">Comunidad</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://x.com/timelylat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/timely.lat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-6 uppercase tracking-wide">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-white/70 hover:text-white transition-colors text-sm">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/50 text-sm">© 2025 Timely. Productividad para todos.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://x.com/timelylat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.665L2.306 21.75H-1.207l7.753-8.835L-1.669 2.25h6.676l4.872 6.444 5.612-6.444zM17.15 19.381h2.303L6.532 4.65H4.093l13.057 14.731z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/timely.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
