import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex justify-between px-16 items-center py-6 bg-slate-800 text-white max-sm:px-4 max-sm:gap-4">
      <p className="max-sm:text-sm">Desenvolvido por João Víctor Flaitt</p>
      <p className="max-sm:text-sm">Copyright © 2024</p>
      <ul className="flex gap-12 max-sm:gap-4">
        <li>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADctor-flaitt/" target="_blank">
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <a href="https://github.com/JoaoFlaitt" target="_blank">
            <FiGithub size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/jvs.flaitt?igsh=YzU4YjF4YTFsYTA3" target="_blank">
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>
    </footer>
  )
}