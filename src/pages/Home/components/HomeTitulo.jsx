import { FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function HomeTitulo() {
  return (
    <div className="flex flex-col justify-center align-text-top h-96 py-80 px-56 text-white max-xl:h-56 max-xl:py-32 max-md:px-28 max-sm:px-12">
      <p className="text-slate-400 text-xl uppercase font-bold max-xl:text-base">Olá, eu sou o João</p>
      <div className="flex items-center max-xl:items-start">
        <h1 className="text-9xl font-bold font-mono uppercase max-xl:text-7xl max-lg:text-6xl max-sm:text-4xl">Engenheiro de Software</h1>
      </div>
    </div>
  )
}
