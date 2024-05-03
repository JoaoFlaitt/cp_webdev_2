import CurriculoElem from './CurriculoElem'
import CurriculoDiv from './CurriculoDiv';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const items = [
  {
    component: FaPhoneAlt,
    texto: '(11) 94446-4650'
  },
  {
    component: MdOutlineMailOutline,
    texto: 'jvsflaitt@gmail.com'
  },
  {
    component: MdLocationOn,
    texto: 'Osasco, SP'
  },
  {
    component: FaLinkedin,
    texto: 'https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADctor-flaitt/'
  },
  {
    component: FiGithub,
    texto: 'https://github.com/JoaoFlaitt'
  },
  
]

export default function CurriculoSection() {
  return (
    <section className="px-24 shadow-md max-md:px-12 max-sm:px-2">
      <div className='my-12 mx-20 p-10 bg-white text-slate-700 font-serif max-lg:p-4 max-md:mx-0 max-md:p2'>
        <div>
          <h2 className='text-5xl text-center max-sm:text-3xl'>João Víctor Flaitt</h2>
          <h4 className='text-center text-2xl max-sm:text-lg'>Engenheiro de Software</h4>
        </div>
        <div className='mx-32 py-6 max-lg:mx-16 max-sm:mx-4'>
          <ul>
            {items.map(item => (
              <CurriculoElem key={item.texto} component={item.component}>{item.texto}</CurriculoElem>
            ))}
          </ul>
        </div>
        <CurriculoDiv titulo='Objetivo Profissional'>
          <p>Busco novas oportunidades no mercado de tecnologia.</p>
        </CurriculoDiv>
        <CurriculoDiv titulo='Perfil'>
          <p>Curso Engenharia de Software na FIAP e busco novas oportunidades no mercado de trabalho, continuamente aprendo novas tecnologias no intuito de me aperfeiçoar dentro da área. Sou ambicioso e apaixonado por tecnologia. Consigo socializar, adaptar e integrar positivamente muito bem dentro de diversos ambientes, sempre com muito entusiasmoe vontade de aprender</p>
        </CurriculoDiv>
        <CurriculoDiv titulo='Competências'>
          <ul>
            <li>HTML e CSS (intermediário)</li>
            <li>JavaScript (intermediário)</li>
            <li>React (intermediário)</li>
            <li>Python (intermediário)</li>
            <li>Inglês (intermediário)</li>
          </ul>
        </CurriculoDiv>
        <CurriculoDiv titulo='Formação Acadêmica'>
          <ul>
            <li>
              Graduação em Engenharia de Software (2023 - 2027) (Cursando)
              <p>FIAP</p>
            </li>
          </ul>
        </CurriculoDiv>
        <CurriculoDiv titulo='Cursos Extracurriculares'>
          <ul>
            <li>Formação HTML e CSS (Alura)</li>
            <li>Formação Desenvolva Aplicações Web com JavaScript (Alura)</li>
            <li>Formação Excel (Alura)</li>
            <li>Formação Power BI (Alura)</li>
            <li>Formação Pyhton (Alura)</li>
            <li>Design Thinking Process (FIAP)</li>
          </ul>
        </CurriculoDiv>
      </div>
    </section>
  )
}
