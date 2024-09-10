import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main
      className={
        'flex flex-col lg:flex-row items-center justify-center min-h-screen p-10 lg:p-32'
      }
    >
      <div className="text-center lg:text-left max-w-md lg:pr-10 flex flex-col items-center lg:items-baseline">
        <h1 className={'antialiased text-4xl font-bold mb-4'}>
          El CFO digital de las agencias
        </h1>
        <p className="text-gray-700 text-xl mb-12">
          Ayudamos a CEOs y Founders de agencias a tomar el control de sus
          finanzas
        </p>
        <Link
          className="flex items-center justify-center bg-black text-white py-3 px-8
      font-bold rounded-full w-52 hover:bg-purple-700"
          href="/phones"
        >
          Ver Teléfonos
        </Link>
      </div>

      <div className="mt-8 lg:mt-0 lg:ml-8">
        <Image
          src="/logo_sherpa.png"
          width={450}
          height={0}
          alt="Sherpa logo"
        />
      </div>
    </main>
  )
}
