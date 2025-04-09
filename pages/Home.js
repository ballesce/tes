const Home = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('images/jpg')" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten utama */}
      <div className="relative z-10 text-white px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide">
          Reval Rafifasya Jr
        </h1>
        <p className="text-xl md:text-2xl mb-8">
        Full-Stack Development | Web & Mobile Apps | API & Database Integration | Cloud Computing
        </p>
      </div>
    </section>
  );
};

export default Home;
