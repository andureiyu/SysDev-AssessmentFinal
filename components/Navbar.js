export default function Navbar() {
    return (
      <nav className="bg-[#1db954] p-4 shadow-md">
        <ul className="flex space-x-8 justify-center text-white font-sans">
          <li className="font-urbanist hover:text-yellow-300 transition-all duration-200 ">
            <a href="/">Home</a>
          </li>
          <li className="font-urbanist hover:text-yellow-300 transition-all duration-200">
            <a href="/projects">Projects</a>
          </li>
          <li className=" font-urbanist hover:text-yellow-300 transition-all duration-200">
            <a href="/collaborations">Collaborations</a>
          </li>
        </ul>
      </nav>
    );
  }
  