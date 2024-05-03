import Texto from "../../../components/Texto"

export default function Introducao() {
  return (
    <section className="py-32 px-24 text-white">
      <h2 className="text-5xl pb-8 max-sm:text-3xl">Conheça um pouco sobre mim</h2>
      <Texto texto='Sou estudante de Engenharia de Software, na FIAP, que tem paixão pelo mundo da tecnologia.' />
      <Texto texto='Possuo conhecimentos linguagens de programação, frameworks e bibliotecas tal como Python, Pandas, Flask, JavaScript, React, HTML e CSS, Sass' />
      <Texto texto='Sempre atento ao mercado tecnológico, atrás de oportunidades de aprimorar os conhecimentos e hard e soft skills.' />
    </section>
  )
}
