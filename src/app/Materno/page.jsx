import './/Materno.scss';
import Image from 'next/image';
import { Philosopher } from "next/font/google";

const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const metadata = {
    title: 'BabyCare',
    description: 'Sua Jornada Materna, Nosso Cuidado Exclusivo ;)',
}

export default function Materno() {
    return (
        <main className='maininfo'>
            <h1 className={philo.className}>Cuidados Maternos</h1>

            <p>Bem-vinda à nossa dedicada seção de Saúde Materna no BabyCare, onde priorizamos o seu bem-estar físico e emocional durante essa jornada extraordinária. Reconhecemos a importância vital da saúde materna não apenas para você, mas também para o desenvolvimento saudável do seu bebê. Vamos explorar informações valiosas e dicas essenciais para promover uma maternidade saudável e equilibrada.</p>
            <br />
            <ul>
                <li><strong>Bem-Estar Emocional:</strong>  A maternidade é uma experiência emocional intensa. Reserve momentos para se conectar consigo mesma, pratique a meditação ou a respiração profunda e, sempre que necessário, compartilhe suas emoções com entes queridos ou profissionais de saúde.</li>
                <li><strong>Exercícios Pós-Parto:</strong>  Incorporar atividades físicas leves em sua rotina pós-parto pode proporcionar benefícios físicos e emocionais. Consulte seu médico antes de começar qualquer programa de exercícios e explore opções como caminhadas suaves, ioga pós-natal ou exercícios específicos para a recuperação pós-parto.</li>
                <li><strong>Nutrição Adequada:</strong>  A alimentação desempenha um papel crucial na sua recuperação e na produção de leite materno. Priorize uma dieta rica em nutrientes, incluindo proteínas, fibras, vitaminas e minerais. Não hesite em buscar a orientação de um nutricionista para um plano alimentar personalizado.</li>
                <li><strong>Descanso e Sono:</strong>  Entendemos que o sono pode ser um desafio com um recém-nascido. Aproveite os momentos em que o bebê descansa para descansar também. Considere cochilos durante o dia para compensar as noites agitadas.</li>
                <li><strong>Gestão do Tempo:</strong>  Organize sua rotina de maneira realista. Não hesite em pedir ajuda para tarefas domésticas e divida responsabilidades. Isso permitirá que você se concentre não apenas no bebê, mas também em sua própria recuperação.</li>
                <li><strong>Acompanhamento Médico Regular:</strong>  Manter consultas médicas regulares é fundamental. Comunique qualquer sintoma ou preocupação ao seu profissional de saúde. Estamos aqui para apoiá-la e fornecer orientações específicas para suas necessidades individuais.</li>
            </ul>

            <Image
                className='infofoto'
                src="/maefeliz.png"
                width={1000}
                height={500}
                alt="BabyCare"
            />

            <h2 className={philo.className}>Dicas Adicionais para uma Maternidade Plena</h2>

            <ul>
                <li><strong>Rede de Apoio:</strong>  Cultive uma rede de apoio forte. Compartilhe experiências, peça conselhos e sinta-se apoiada por amigos, familiares e comunidades de mães.</li>
                <li><strong>Autocuidado Prioritário:</strong>  Reserve momentos para autocuidado. Isso pode incluir leitura, banhos relaxantes, ou qualquer atividade que traga alegria e relaxamento.</li>
                <li><strong>Compreensão das Mudanças Hormonais:</strong>  Esteja ciente das mudanças hormonais pós-parto. Isso não apenas ajuda na compreensão das emoções, mas também na preparação para os desafios que podem surgir.</li>
            </ul>

            <p>Cada mãe é única, e sua jornada materna merece atenção personalizada. Conte com a equipe BabyCare para apoiá-la em cada passo. Estamos comprometidos em ser seu guia confiável para uma maternidade saudável e recompensadora.</p>
        </main>
    )
}
