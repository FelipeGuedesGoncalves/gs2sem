import '../app/Home.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='mainHome'>

      {/* ===== HEADER ===== */}

      <header>
        <div className='conteudoDiv'>
          <p>
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
              height={165}
              alt="BabyCare"
            />
          </div>
        </div>
      </header>

      {/* ===== MISSÃO DA PLATAFORMA ===== */}

      <p>Na BabyCare, acreditamos que a jornada da maternidade deve ser guiada pelo apoio, cuidado e conhecimento. Estamos aqui para oferecer uma experiência única, abrangendo desde a gestação até os primeiros anos de vida do seu bebê.</p>
      <br />
      <p>Nossa plataforma foi criada com o objetivo de proporcionar um ambiente online seguro e acolhedor para mães, gestantes e profissionais de saúde.</p>
      <Image
        className='maeicon'
        src="/maeicon.png"
        width={425}
        height={165}
        alt="BabyCare"
      />

      {/* ===== SEÇÕES QUE O SITE TEM ===== */}

      <div className="blueCard">
        <div className="textos">

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
          className='maeicon'
          src="/mulhergravida.png"
          width={425}
          height={165}
          alt="BabyCare"
        />
      </div>

      {/* ===== PEDIDO PARA CADASTRO ===== */}

      <div className="whiteCard">
        <Image
          className='maeicon'
          src="/mulhercelular.png"
          width={425}
          height={165}
          alt="BabyCare"
        />
        <p>Potencialize sua jornada no BabyCare! Cadastre-se agora para acesso a consultas médicas online, suporte e uma comunidade de mães. Garanta o cuidado que você e seu bebê merecem. Junte-se a nós hoje!</p>
      </div>
    </main>
  )
}
