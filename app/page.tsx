import Image from 'next/image';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Download,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const courses = [
  {
    title: 'Curso de Iniciação',
    age: '6 aos 12 anos',
    description: 'Para alunos na faixa etária dos 6 aos 12 anos.',
    image: '/media/curso-iniciacao.jpg',
    document: '/documentos/curso-iniciacao.pdf',
  },
  {
    title: 'Curso Intermédio',
    age: '13 aos 15 anos',
    description:
      'Para alunos dos 13 aos 15 anos que tenham finalizado o Curso de Iniciação ou que não possuam conhecimentos musicais.',
    image: '/media/curso-intermedio.jpg',
    document: '/documentos/curso-intermedio.pdf',
  },
  {
    title: 'Curso Geral de Jazz',
    age: 'A partir dos 16 anos',
    description:
      'Para alunos a partir dos 16 anos que tenham finalizado o Curso Intermédio ou que façam provas de avaliação que lhes permitam entrar directamente neste curso.',
    image: '/media/curso-geral-jazz.jpg',
    document: '/documentos/curso-geral-jazz.pdf',
  },
  {
    title: 'Curso Geral Pop & Rock',
    age: 'A partir dos 16 anos',
    description:
      'Para alunos a partir dos 16 anos, que tenham finalizado o Curso Intermédio ou que façam provas de avaliação que lhes permitam entrar directamente neste curso.',
    image: '/media/curso-pop-rock.jpeg',
    document: '/documentos/curso-pop-rock.pdf',
  },
  {
    title: 'Modalidade Livre',
    age: 'Formação à medida',
    description: 'Aulas práticas e/ou teóricas livres.',
    image: '/media/modalidade-livre.jpeg',
    document: '/documentos/modalidade-livre.pdf',
  },
];

const facilities = [
  '/media/instalacoes-1.png',
  '/media/instalacoes-2.png',
  '/media/instalacoes-3.png',
  '/media/instalacoes-4.png',
  '/media/instalacoes-5.png',
  '/media/instalacoes-6.png',
];

const teachers = [
  { name: 'José Soares', role: 'Guitarra, Combo, Teoria & Harmonia', image: '/media/prof-jose-soares.png' },
  { name: 'Yuri Daniel', role: 'Baixo, Contrabaixo e Combo', image: '/media/prof-yuri-daniel.webp' },
  { name: 'Davide Zaccaria', role: 'Guitarra, Violoncelo, Combo e Teoria', image: '/media/prof-davide-zaccaria.webp' },
  { name: 'Miguel Vaz', role: 'Violino', image: '/media/prof-miguel-vaz.webp' },
  { name: 'Ivo Soares', role: 'Piano e Canto', image: '/media/prof-ivo-soares.jpg' },
  { name: 'Luis Barrigas', role: 'Piano', image: '/media/prof-luis-barrigas.jpg' },
  { name: 'Alberta Soares', role: 'Piano', image: '/media/prof-alberta-soares.jpg' },
  { name: 'Íris Sarai', role: 'Piano e Combo', image: '/media/prof-iris-sarai.webp' },
  { name: 'Maria Anadon', role: 'Canto', image: '/media/prof-maria-anadon.webp' },
  { name: 'João Sousa', role: 'Bateria e Combo', image: '/media/prof-joao-sousa.webp' },
  { name: 'Alê Damasceno', role: 'Bateria, Combo e Teoria', image: '/media/prof-ale-damasceno.png' },
  { name: 'Bernardo Tinoco', role: 'Saxofone, Teoria e História do Jazz', image: '/media/prof-bernardo-tinoco.webp' },
  { name: 'Moisés Fernandes', role: 'Trompete', image: '/media/prof-moises-fernandes.webp' },
  { name: 'Sara Pestana', role: 'Piano e Voz', image: '/media/prof-sara-pestana.jpg' },
  { name: 'Hugo Lino', role: 'Técnicas de Estúdio', image: '/media/prof-hugo-lino.png' },
  { name: 'Heriberto Rojas', role: 'Baixo, Contrabx, Combo e Música & Tecnologia', image: '/media/prof-heriberto-rojas.jpeg' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Escola de Jazz do Barreiro — início">
          <Image src="/media/logo-principal.png" alt="Escola de Jazz do Barreiro — José Cardoso Ferreira" width={244} height={141} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#escola">A escola</a>
          <a href="#cursos">Cursos</a>
          <a href="#instalacoes">Instalações</a>
          <a href="#docentes">Docentes</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="/documentos/ficha-inscricao-2026-27.pdf" target="_blank">
          Inscrições <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <Image src="/media/hero-palco.jpg" alt="Alunos e professores da Escola de Jazz do Barreiro em palco" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-edition" aria-hidden="true"><span>ANO LETIVO</span><strong>26/27</strong></div>
        <div className="hero-content">
          <p>Escola de Jazz do Barreiro · José Cardoso Ferreira</p>
          <h1 id="hero-title">Inscrições abertas</h1>
          <a href="/documentos/ficha-inscricao-2026-27.pdf" target="_blank">
            Ficha de inscrição 2026/2027 <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <a className="scroll-cue" href="#escola">Conhecer a escola <ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="welcome section-shell" id="escola">
        <div className="welcome-image image-frame">
          <Image src="/media/fachada-escola.jpg" alt="Fachada da Escola de Jazz do Barreiro" fill sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div className="welcome-copy">
          <SectionLabel>Bem-vindo</SectionLabel>
          <h2>Bem-vindo à Escola de Jazz do Barreiro</h2>
          <p className="dedication">José Cardoso Ferreira</p>
          <div className="body-copy">
            <p>A Escola de Jazz do Barreiro dispõe de vários cursos de música adaptados à sua faixa etária e experiência musical.</p>
            <p>Na EJB existe sempre uma opção que lhe permitirá aprender um instrumento ao seu ritmo, de acordo com a sua disponibilidade e objetivos. Atualmente, a escola de jazz dispõe das seguintes vertentes: iniciação, intermédio, geral de jazz, pop &amp; rock e livre.</p>
            <p>Para mais informações poderá contactar-nos diretamente por aqui e teremos todo o gosto em ajudar.</p>
          </div>
          <a className="text-link" href="#contacto">Falar com a escola <ArrowRight aria-hidden="true" /></a>
          <div className="school-stats" aria-label="A escola em números">
            <div><strong>5</strong><span>percursos de formação</span></div>
            <div><strong>9</strong><span>salas de música</span></div>
            <div><strong>16</strong><span>docentes</span></div>
          </div>
        </div>
      </section>

      <section className="director section-shell">
        <div className="director-copy">
          <SectionLabel>Direção pedagógica</SectionLabel>
          <blockquote>“Desde a nossa inauguração, temos o compromisso de ajudar pessoas a seguirem as carreiras que amam. Com professores dedicados, uma equipa excepcional e uma comunidade de alunos talentosa, confiamos na educação, orientação e rede de apoio que encontrará por aqui.”</blockquote>
          <h3>José Soares</h3>
          <p className="director-role">Diretor pedagógico</p>
          <p>A Escola de Jazz do Barreiro oferece um método de ensino personalizado e único, criando um ambiente que inspira, educa e encoraja mentes criativas a atingirem o maior nível de sucesso.</p>
        </div>
        <div className="director-image image-frame">
          <Image src="/media/jose-soares-diretor.jpg" alt="José Soares, diretor pedagógico" fill sizes="(max-width: 800px) 100vw, 46vw" />
        </div>
      </section>

      <section className="courses" id="cursos">
        <div className="section-intro section-shell">
          <div><SectionLabel>Formação</SectionLabel><h2>Os nossos cursos</h2></div>
          <p>Cinco percursos de ensino, organizados por idade, experiência e objetivos musicais.</p>
        </div>
        <div className="course-grid section-shell">
          {courses.map((course, index) => (
            <article className={`course-card course-card-${index + 1}`} key={course.title}>
              <div className="course-image">
                <Image src={course.image} alt="" fill sizes="(max-width: 800px) 100vw, 34vw" />
                <span>0{index + 1}</span>
              </div>
              <div className="course-copy">
                <p>{course.age}</p><h3>{course.title}</h3>
                <div className="course-description">{course.description}</div>
                <a href={course.document} target="_blank">Saiba mais <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="enrol-banner section-shell">
          <p>Pronto para começar?</p>
          <a href="/documentos/ficha-inscricao-2026-27.pdf" target="_blank">Faça a sua inscrição <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="ensembles section-shell">
        <div className="ensembles-copy">
          <SectionLabel>Prática coletiva</SectionLabel>
          <div><h2>Orquestra de Guitarras</h2><p>Dirigida por Davide Zaccaria</p></div>
          <div><h2>Coro de Jazz</h2><p>Dirigido por Maria Meireles</p></div>
        </div>
        <div className="ensembles-image image-frame">
          <Image src="/media/orquestra-coro.avif" alt="Clave de sol e notas musicais" fill sizes="(max-width: 800px) 100vw, 48vw" />
        </div>
      </section>

      <section className="facilities" id="instalacoes">
        <div className="section-intro section-shell">
          <div><SectionLabel>A casa da EJB</SectionLabel><h2>Instalações EJB</h2></div>
          <p>A Escola de Jazz do Barreiro funciona no edifício histórico da cidade, pertencente à Cooperativa Operária Barreirense, conhecida por “Os Corticeiros”, composto por r/ch e 1º andar numa área de implantação de 854 m². Neste momento estão disponíveis 9 salas para aulas de música.</p>
        </div>
        <div className="facility-gallery section-shell">
          {facilities.map((image, index) => (
            <figure className={`facility-${index + 1}`} key={image}>
              <Image src={image} alt={`Instalações da Escola de Jazz do Barreiro — imagem ${index + 1}`} fill sizes="(max-width: 800px) 100vw, 40vw" />
              <figcaption>0{index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cafe section-shell">
        <div className="cafe-heading"><SectionLabel>Espaço de encontro</SectionLabel><h2>Sala 6 —<br />Be Jazz Café</h2><span className="cafe-mark" aria-hidden="true">06</span></div>
        <div className="cafe-copy"><p>No mesmo edifício da Escola funciona a Sala 6 — Be Jazz Café, um bar que funciona como espaço de convívio e divulgação da EJB com audições, concertos, masterclasses e jam sessions.</p></div>
        <div className="cafe-image"><Image src="/media/sala-6.png" alt="Sala 6 — Be Jazz Café" width={1126} height={207} sizes="100vw" /></div>
      </section>

      <section className="faculty" id="docentes">
        <div className="faculty-intro section-shell">
          <div><SectionLabel>A equipa</SectionLabel><h2>Corpo Docente</h2></div>
          <div className="body-copy">
            <p>O corpo docente da Escola de Jazz do Barreiro conta com os melhores profissionais no ensino do jazz. Formados nas melhores escolas nacionais e internacionais, os nossos professores mantêm carreiras como músicos profissionais na área do jazz e outros estilos musicais, trazendo toda a experiência resultante para as aulas da EJB.</p>
            <p>Alguns dos nossos professores deram os seus primeiros passos no jazz como alunos da Escola de Jazz do Barreiro, que após completarem a sua formação, voltaram à EJB de forma a passar o seu conhecimento às novas gerações de músicos.</p>
          </div>
        </div>
        <div className="teacher-grid section-shell">
          {teachers.map((teacher, index) => (
            <article className="teacher-card" key={teacher.name}>
              <div className="teacher-image"><Image src={teacher.image} alt={teacher.name} fill sizes="(max-width: 650px) 50vw, 25vw" /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="teacher-copy"><p>{teacher.role}</p><h3>{teacher.name}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className="documents section-shell">
        <div><SectionLabel>Informação 2026/27</SectionLabel><h2>Documentos</h2></div>
        <div className="document-list">
          <a href="/documentos/precario-2026-27.pdf" target="_blank"><span>Preçário</span><small>2026–27 · PDF</small><Download aria-hidden="true" /></a>
          <a href="/documentos/programa-ensino-2026-27.pdf" target="_blank"><span>Programa de ensino</span><small>2026–27 · PDF</small><Download aria-hidden="true" /></a>
          <a href="/documentos/ficha-inscricao-2026-27.pdf" target="_blank"><span>Ficha de inscrição</span><small>2026–27 · PDF</small><Download aria-hidden="true" /></a>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-image image-frame"><Image src="/media/contacto.jpg" alt="Concerto da Escola de Jazz do Barreiro" fill sizes="(max-width: 800px) 100vw, 52vw" /></div>
        <div className="contact-copy">
          <SectionLabel>Estamos ao seu dispor</SectionLabel><h2>Contacto</h2>
          <p>Estamos ao seu dispor para esclarecer qualquer dúvida quer presencialmente quer por um dos diversos canais que colocamos à sua disposição.</p>
          <p>Poderá contactar a nossa secretaria nos horários de segunda a sexta entre as 15:00h e as 23:00h e aos sábados das 9:30h às 13:00h.</p>
          <div className="contact-details">
            <a href="https://maps.google.com/?q=Rua+Dr.+Eusébio+Leão+11+Barreiro" target="_blank"><MapPin aria-hidden="true" /><span>Rua Dr. Eusébio Leão nº11<br />2830-301 Barreiro, Portugal</span></a>
            <a href="mailto:escolajazzdobarreiro@gmail.com"><Mail aria-hidden="true" /><span>escolajazzdobarreiro@gmail.com</span></a>
            <a href="tel:+351933827650"><Phone aria-hidden="true" /><span>933 827 650</span></a>
            <div><Clock3 aria-hidden="true" /><span>Segunda–sexta · 15:00–23:00<br />Sábado · 09:30–13:00</span></div>
          </div>
          <div className="social-links">
            <a href="https://instagram.com/escolajazzbarreiro/" target="_blank">Instagram <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://facebook.com/escolajazz.barreiro/?locale=pt_PT" target="_blank">Facebook <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <iframe className="map" title="Mapa da Escola de Jazz do Barreiro" src="https://www.google.com/maps?q=Escola%20de%20Jazz%20do%20Barreiro&output=embed" loading="lazy" />
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-brand"><Image src="/media/logo-principal.png" alt="Escola de Jazz do Barreiro" width={220} height={127} /><p>Escola de Jazz do Barreiro<br />José Cardoso Ferreira</p></div>
        <div className="footer-support"><Image src="/media/logo-jf-barreiro.png" alt="Junta de Freguesia do Barreiro" width={146} height={60} /><Image src="/media/logo-parceiro.png" alt="Entidade parceira" width={121} height={60} /></div>
        <div className="footer-end"><a href="#inicio">Voltar ao início <ArrowUpRight aria-hidden="true" /></a><p>© {new Date().getFullYear()} Escola de Jazz do Barreiro</p></div>
      </footer>
    </main>
  );
}
