import Image from 'next/image'
import Link from 'next/link'
import phones from '../../public/phones.json'

export default function PhonesPage() {
  return (
    <main className="min-h-screen p-10 lg:p-32">
      <h1 className="antialiased text-4xl font-bold mb-8 text-center">
        Phone Catalog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {phones.map((phone) => (
          <div
            key={phone.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={`/phones/${phone.imageFileName}`}
              width={400}
              height={300}
              alt={phone.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{phone.name}</h2>
              <p className="text-gray-600 mb-2">{phone.manufacturer}</p>
              <p className="text-lg font-semibold">${phone.price}</p>
              <Link
                href={`/phones/${phone.id}`}
                className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-purple-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
