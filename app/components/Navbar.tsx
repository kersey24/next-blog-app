import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="md:px-6 prose prose-2xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-slate-300 no-underline hover:text-white"
          >
            Ben Kersey
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl sm:text-5xl">
          <Link
            className="text-slate-300 hover:text-white"
            href="https://www.linkedin.com/in/ben-kersey-2a1a96186/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-slate-300 hover:text-white"
            href="https://github.com/kersey24"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
