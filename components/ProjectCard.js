import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
            <ul className="flex space-x-8 justify-center text-white">
                <li className="hover:text-yellow-300 transition-all duration-200">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-yellow-300 transition-all duration-200">
                    <Link href="/projects">Projects</Link>
                </li>
                <li className="hover:text-yellow-300 transition-all duration-200">
                 <Link href="/collaborations">Collaborations</Link>
              </li>
            </ul>
        </nav>
    );
}