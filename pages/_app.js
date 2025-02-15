
// pages/_app.js
import "@/styles/globals.css";  // Ensure Tailwind and global styles are included
import Navbar from "../components/Navbar"; // Import Navbar component

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />  {/* Navbar appears on all pages */}
      <main>
        <Component {...pageProps} />  {/* This renders the active page */}
      </main>
    </div>
  );
}

