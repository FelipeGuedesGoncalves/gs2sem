import '../app/Home.scss';
import Image from 'next/image';
import { Philosopher } from "next/font/google";
const philo = Philosopher({
  subsets: ['latin'],
  weight: ['400','700']
});

export const metadata = {
  title: 'BabyCare',
  description: 'Sua Jornada Materna, Nosso Cuidado Exclusivo ;)',
}

export default function Home() {
  return (
    <main className='mainHome'>

      {/* ===== HEADER ===== */}

      <header>
        <div id="conteudoDiv" className={philo.className}>
          <p id='bemvindo' >
            Bem-vindo ao BabyCare: Sua Jornada Materna, Nosso Cuidado Exclusivo ;)
          </p>
          <div className='linha'></div>
          <div className='sugerido'>
            <p>
              Projeto sugerido por:
            </p>
            <Image
              className='medicalogo'
              src="/medicalogo.png"
              width={425}
              height={60}
              alt="BabyCare"
            />
          </div>
        </div>
      </header>

      {/* ===== MISSÃO DA PLATAFORMA ===== */}

      <p className='missiontext'>Na BabyCare, acreditamos que a jornada da maternidade deve ser guiada pelo apoio, cuidado e conhecimento. Estamos aqui para oferecer uma experiência única, abrangendo desde a gestação até os primeiros anos de vida do seu bebê.</p>
      <br />
      <p className='missiontext'>Nossa plataforma foi criada com o objetivo de proporcionar um ambiente online seguro e acolhedor para mães, gestantes e profissionais de saúde.</p>
      <Image
        className='maeicon'
        src="/maeicon.png"
        width={165}
        height={165}
        alt="BabyCare"
      />

      {/* ===== SEÇÕES QUE O SITE TEM ===== */}

      <div className="blueCard">
        <div id='bluecardtext' className={philo.className}>

          <p>Descubra o Universo da Maternidade com BabyCare!
            Na jornada incrível da maternidade, o conhecimento é a chave para uma experiência mais confiante e plena. Com as nossas cinco abas principais, oferecemos uma fonte rica de informações essenciais para cada fase:</p>
          <br />
          <p>Cuidados Pré-Natais
            <br />
            Saúde Materna
            <br />
            Nutrição Infantil
            <br />
            Cuidados Pós-Parto</p>
        </div>
        <Image
          className='gravida'
          src="/mulhergravida.png"
          width={300}
          height={400}
          alt="BabyCare"
        />
      </div>

      {/* ===== PEDIDO PARA CADASTRO ===== */}

      <div className="whiteCard">
        <Image
          className='mulhercelular'
          src="/mulhercelular.png"
          width={280}
          height={340}
          alt="BabyCare"
        />
        <p id='whitecardtext' className={philo.className}>Potencialize sua jornada no BabyCare! Cadastre-se agora para acesso a consultas médicas online, suporte e uma comunidade de mães. Garanta o cuidado que você e seu bebê merecem. Junte-se a nós hoje!</p>
      </div>
    </main>
  )
}
