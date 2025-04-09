"use client";

import Image from "next/image";

const About = () => {
  return (
    <section
      id="tentang"
      className="pt-24 pb-16 scroll-mt-24 bg-[var(--background-color)] text-[var(--text-color)] font-poppins"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Foto Profil Responsive */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-[280px] md:h-[280px] rounded-full border-4 border-[var(--primary-color)] overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-110">
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
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-6">
              Tentang Saya
            </h2>

            {/* Deskripsi Rapi dan Justify */}
            <div className="max-w-prose mx-auto md:mx-0 text-justify space-y-4 text-base sm:text-lg leading-relaxed mb-6">
              <p>
                Halo! Saya <span className="font-semibold">Reval Rafifasya Jr</span>, pengembang mandiri dari <span className="font-semibold">Cimanggung</span>. Fokus saya adalah menciptakan teknologi yang mendukung keluarga dan pendidikan. Saya percaya bahwa teknologi harus memperkuat nilai, bukan sebaliknya.
              </p>
              <p>
                Saya telah mengembangkan proyek mulai dari website edukasi, sistem komunitas belajar, hingga otomasi rumah berbasis IoT. Semua itu saya kerjakan dengan semangat berbagi dan membangun solusi yang berguna untuk semua kalangan.
              </p>
            </div>

            {/* Info Box Grid */}
            <div className="grid gap-4">
              {[
                { label: "Fokus Teknologi", value: "Web Development, IoT, Edu Tech, AI Chatbot" },
                { label: "Lokasi", value: "Cimanggung, Jawa Barat, Indonesia" },
                { label: "Pendidikan", value: "Mahasiswa Teknik Informatika" },
                { label: "Minat Khusus", value: "Teknologi Edukasi, Automasi Rumah, Komunitas Digital" },
                { label: "Kontak Email", value: "reval.rafifasya@example.com" },
                { label: "WhatsApp", value: "+62 812-3456-7890", link: "https://wa.me/6281234567890" },
                { label: "LinkedIn", value: "linkedin.com/in/revaljr", link: "https://linkedin.com/in/revaljr" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-[var(--primary-color)] rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-sm text-gray-400">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-blue-500 hover:underline break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
