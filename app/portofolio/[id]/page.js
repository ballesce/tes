import Image from "next/image";
import Link from "next/link";

const services = {
  coding: {
    image: "/images/leica.jpg",
    title: "Belajar Coding",
    description: "Pembelajaran coding berbasis project untuk anak-anak dan dewasa.",
  },
  pertanian: {
    image: "/images/leica.jpg",
    title: "Pertanian Organik",
    description: "Mengembangkan pertanian berbasis permaculture untuk lingkungan berkelanjutan.",
  },
  homeschooling: {
    image: "/images/leica.jpg",
    title: "Homeschooling",
    description: "Pendampingan keluarga dalam homeschooling berbasis nilai dan keterampilan hidup.",
  },
};

export default function PortfolioDetail({ params }) {
  const service = services[params.id];

  if (!service) {
    return <div className="p-8">Layanan tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-[var(--primary-color)]">
        {service.title}
      </h1>
      <div className="mb-6">
        <Image
          src={service.image}
          alt={service.title}
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg text-gray-700 mb-8">{service.description}</p>

      {/* Tombol Kembali */}
      <Link
        href="/Services"
        className="inline-block bg-[var(--primary-color)] text-white px-6 py-2 rounded-full shadow hover:bg-opacity-90 transition"
      >
        ← Kembali
      </Link>
    </div>
  );
}
