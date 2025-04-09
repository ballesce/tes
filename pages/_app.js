import Navbar from "../components/Navbar";
import "../styles/globals.css"; // jika ada CSS global

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
