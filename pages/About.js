"use client";

import Image from "next/image";

const About = () => {
  return (
    <section
      id="tentang"
      className="py-16 bg-[var(--background-color)] text-[var(--text-color)]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Foto profil bulat responsive */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-52 h-52 md:w-[300px] md:h-[300px] rounded-full border-4 border-[var(--primary-color)] overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-110">
              <Image
                src="/images/foto.jpg"
                alt="Foto Profil"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Konten */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">
              Tentang Saya
            </h2>
            <p className="text-lg leading-relaxed">
              Halo! Saya <strong>Reval Rafifasya Jr</strong>, seorang pembelajar mandiri yang fokus pada
              pengembangan teknologi ramah keluarga dan edukatif. Saya percaya bahwa teknologi
              seharusnya memperkuat nilai, bukan menghilangkannya.
            </p>
            <p className="mt-4 text-lg">
              Saya membangun berbagai proyek mulai dari website edukatif, otomasi rumah
              berbasis IoT, hingga sistem manajemen belajar berbasis komunitas. Fokus saya
              adalah menyederhanakan teknologi untuk digunakan oleh siapa saja, khususnya
              keluarga dan komunitas belajar mandiri.
            </p>

            <div className="mt-6">
              <a
                href="/About2"
                className="inline-block px-6 py-3 rounded-lg shadow-md transition font-medium
                           bg-[var(--primary-color)] text-white
                           hover:opacity-90
                           dark:bg-white dark:text-black"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
