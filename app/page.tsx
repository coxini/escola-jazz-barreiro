import Image from 'next/image';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Music2,
  Phone,
} from 'lucide-react';

const courses = [
  {
    number: '01',
    ages: '6 — 12 anos',
    title: 'Iniciação',
    description:
      'Primeiro contacto estruturado com a música através do instrumento, da linguagem e da prática em grupo.',
    subjects: 'Instrumento · Linguagem musical · Prática de conjunto',
  },
  {
    number: '02',
    ages: '13 — 15 anos',
    title: 'Intermédio',
    description:
      'Dois anos de formação teórica e prática, com estudo de canções, blues e música moderna sem depender da leitura de partitura.',
    subjects: 'Instrumento · Linguagem · Combo',
  },
  {
    number: '03',
    ages: 'A partir dos 16',
    title: 'Geral de Jazz',
    description:
      'Formação sólida em jazz e improvisação para quem quer aprofundar competências ou prosseguir estudos superiores.',
    subjects: 'Instrumento · Harmonia · Combo · História · Composição',
  },
  {
    number: '04',
    ages: 'A partir dos 16',
    title: 'Geral de Pop & Rock',
    description:
      'Percurso orientado para a linguagem do pop e do rock, com prática de banda, tecnologia e projeto final.',
    subjects: 'Instrumento · Harmonia · Combo · Tecnologia · Estúdio',
  },
  {
    number: '05',
    ages: 'Todas as idades',
    title: 'Curso Livre',
    description:
      'Aulas individuais ou partilhadas, adaptadas aos objetivos e ao ritmo de cada aluno, sem percurso curricular obrigatório.',
    subjects: 'Instrumento · Songwriting · Improvisação',
  },
];

const instruments = [
  'Bateria',
  'Canto',
  'Contrabaixo',
  'Baixo elétrico',
  'Guitarra',
  'Piano',
  'Saxofone',
  'Trompete',
  'Violino',
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Escola de Jazz do Barreiro — início">
          <Image
            src="/escola-jazz-barreiro-logo.png"
            alt="Escola de Jazz do Barreiro — José Cardoso Ferreira"
            width={178}
            height={103}
            priority
          />
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#escola">A escola</a>
          <a href="#cursos">Cursos</a>
          <a href="#metodo">Método</a>
          <a href="#contactos">Contactos</a>
        </nav>
        <a className="header-cta" href="#inscricoes">
          Inscrições <ArrowDownRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="inicio">
        <Image
          className="hero-image"
          src="/hero-jazz-school.png"
          alt="Ensemble de alunos a ensaiar jazz numa sala intimista"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Escola de música · Barreiro · desde 1999</p>
          <h1>O teu som<br />começa aqui.</h1>
          <p className="hero-intro">
            Formação em jazz, pop &amp; rock para todas as idades — da primeira nota ao palco.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#cursos">
              Descobrir cursos <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#contactos">Falar connosco</a>
          </div>
        </div>
        <div className="hero-meta" aria-label="Informação rápida">
          <span><MapPin aria-hidden="true" /> Rua Dr. Eusébio Leão, 11</span>
          <span><CalendarDays aria-hidden="true" /> Aulas pós-laborais</span>
        </div>
      </section>

      <section className="intro-strip" id="escola">
        <p className="section-index">01 — A escola</p>
        <div>
          <h2>Aprender música<br />a tocar com outros.</h2>
          <p>
            Uma escola histórica do Barreiro dedicada à prática, à improvisação e à formação
            de músicos. Aqui, a teoria encontra o instrumento e cada aluno encontra o seu lugar
            num combo.
          </p>
        </div>
        <p className="fact"><strong>25+</strong><span>anos a formar músicos</span></p>
      </section>

      <section className="courses-section" id="cursos">
        <div className="section-heading">
          <p className="section-index">02 — Cursos</p>
          <h2>Um percurso<br />para cada fase.</h2>
          <p>Da descoberta à especialização, com prática semanal, acompanhamento próximo e palco.</p>
        </div>
        <div className="course-list">
          {courses.map((course) => (
            <article className="course-row" key={course.number}>
              <span className="course-number">{course.number}</span>
              <span className="course-age">{course.ages}</span>
              <div className="course-main">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <span>{course.subjects}</span>
              </div>
              <ArrowDownRight className="course-arrow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="instruments-section" aria-labelledby="instrumentos-titulo">
        <div className="instruments-title">
          <Music2 aria-hidden="true" />
          <h2 id="instrumentos-titulo">Escolhe o teu instrumento.</h2>
        </div>
        <div className="instrument-cloud">
          {instruments.map((instrument) => <span key={instrument}>{instrument}</span>)}
        </div>
      </section>

      <section className="method-section" id="metodo">
        <div className="method-copy">
          <p className="section-index">03 — Método</p>
          <h2>Menos teoria<br />isolada. Mais música<br />em contexto.</h2>
          <p>
            O repertório liga tudo: o que se aprende na linguagem musical é aplicado no
            instrumento e consolidado em conjunto. Jam sessions e apresentações públicas fazem
            parte do processo.
          </p>
        </div>
        <ol className="method-steps">
          <li><span>1</span><div><strong>Compreender</strong><p>Aprender a linguagem através de temas reais.</p></div></li>
          <li><span>2</span><div><strong>Praticar</strong><p>Desenvolver técnica e expressão no instrumento.</p></div></li>
          <li><span>3</span><div><strong>Tocar em conjunto</strong><p>Ouvir, improvisar e construir música em combo.</p></div></li>
          <li><span>4</span><div><strong>Subir ao palco</strong><p>Ganhar experiência em audições e jam sessions.</p></div></li>
        </ol>
      </section>

      <section className="program-note">
        <p>O Curso Geral de Jazz trabalha swing, bebop, hard bop, latin fusion, free jazz e jazz contemporâneo.</p>
        <a
          href="https://www.escolajazzbarreiro.pt/_files/ugd/7eb20e_e961cc6d82e64cb1a47530a9023092eb.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Consultar programa de ensino <ArrowRight aria-hidden="true" />
        </a>
      </section>

      <section className="enrol-section" id="inscricoes">
        <p className="section-index">04 — Inscrições</p>
        <div className="enrol-copy">
          <h2>Há um lugar<br />para ti no combo.</h2>
          <p>
            Indica a tua idade, instrumento e disponibilidade. A direção pedagógica ajuda-te a
            escolher o curso e o horário certo.
          </p>
          <a className="button button-light" href="mailto:ejbdirecaopedagogica@gmail.com?subject=Informação%20sobre%20inscrição">
            Pedir informações <Mail aria-hidden="true" />
          </a>
        </div>
        <div className="enrol-details">
          <div><span>Direção pedagógica</span><a href="mailto:ejbdirecaopedagogica@gmail.com">ejbdirecaopedagogica@gmail.com</a></div>
          <div><span>Secretaria</span><a href="mailto:escolajazzdobarreiro@gmail.com">escolajazzdobarreiro@gmail.com</a></div>
          <div><span>Documentos</span><a href="https://www.escolajazzbarreiro.pt/_files/ugd/7eb20e_184e0fadc8ec42a28660340d029b5424.pdf" target="_blank" rel="noreferrer">Ficha de inscrição 2025/26 <ArrowDown aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="contact-section" id="contactos">
        <div>
          <p className="section-index">05 — Contactos</p>
          <h2>Vem conhecer<br />a escola.</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-item"><MapPin aria-hidden="true" /><div><span>Morada</span><p>Rua Dr. Eusébio Leão, 11<br />2830-301 Barreiro</p></div></div>
          <div className="contact-item"><Phone aria-hidden="true" /><div><span>Telefone</span><p><a href="tel:+351212073116">212 073 116</a></p></div></div>
          <div className="contact-item"><Mail aria-hidden="true" /><div><span>Email</span><p><a href="mailto:escolajazzdobarreiro@gmail.com">escolajazzdobarreiro@gmail.com</a></p></div></div>
          <div className="contact-item"><Clock3 aria-hidden="true" /><div><span>Horário letivo</span><p>2.ª a 5.ª · 17h—23h<br />Sábado · 9h—13h</p></div></div>
        </div>
        <a className="map-link" href="https://maps.google.com/?q=Rua+Doutor+Eusébio+Leão+11+Barreiro" target="_blank" rel="noreferrer">
          Abrir no mapa <ArrowDownRight aria-hidden="true" />
        </a>
      </section>

      <footer>
        <Image
          src="/escola-jazz-barreiro-logo.png"
          alt="Escola de Jazz do Barreiro — José Cardoso Ferreira"
          width={220}
          height={127}
        />
        <p>Jazz · Pop · Rock · Formação musical</p>
        <a href="#inicio">Voltar ao início <ArrowDown aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
