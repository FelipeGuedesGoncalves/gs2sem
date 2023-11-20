import './/Posparto.scss';
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

export default function Posparto() {
    return (
        <main className='maininfo'>
            <h1 className={philo.className}>Cuidados pós-parto</h1>
            <p>Um capítulo especial na sua jornada materna. Nesta seção, compartilhamos informações cruciais para garantir que você se sinta apoiada e informada durante este período único. Aqui estão alguns pontos importantes:</p>

            <br />
            <h2 className={philo.className}>Recuperação Física:</h2>
            <p>Um dos aspectos mais importantes dos cuidados pós-parto é a recuperação física, essencial para promover seu bem-estar geral. Durante as primeiras semanas após o parto, concentre-se em descansar e permitir que seu corpo se recupere do processo do nascimento. Dê prioridade ao sono sempre que possível e não hesite em pedir ajuda para as tarefas diárias. Este período é uma oportunidade para se conectar consigo mesma, aprender sobre seu bebê e se adaptar às mudanças físicas e emocionais. A recuperação física após uma cesariana envolve atenção especial à incisão abdominal. Mantenha a área limpa e seca, evite movimentos bruscos e escolha roupas confortáveis que não pressionem a região. Caminhadas leves podem ser benéficas para estimular a circulação, mas consulte seu médico antes de iniciar qualquer programa de exercícios. Para mães que tiveram uma episiotomia ou laceração perineal, os cuidados físicos incluem manter a área limpa e aplicar compressas frias para aliviar o desconforto. Banhos de assento mornos também podem ser úteis na redução da inflamação. Esteja atenta aos sinais de infecção e comunique qualquer preocupação ao seu profissional de saúde. Além dos cuidados físicos, a recuperação pós-parto também abrange aspectos emocionais. Aceitar e adaptar-se às mudanças corporais pode levar tempo. Compartilhe seus sentimentos com seus entes queridos e, se necessário, considere a busca por apoio emocional. Conversar com outras mães que passaram por experiências semelhantes pode ser reconfortante.</p>

            <Image
                className='infofoto'
                src="/mulhercabeloo.jpg"
                width={1000}
                height={500}
                alt="BabyCare"
            />

            <h2 className={philo.className}>Cuidados com a Saúde Mental:</h2>
            <p>A maternidade traz consigo uma variedade de emoções. Não hesite em expressar seus sentimentos e compartilhar suas experiências. O apoio emocional é crucial. Converse com amigos, familiares ou profissionais de saúde sobre suas emoções. Se necessário, considere a possibilidade de procurar aconselhamento.</p>

            <br />
            <h2 className={philo.className}>Alimentação Adequada:</h2>
            <p>Manter uma dieta equilibrada é essencial para fornecer os nutrientes necessários durante o período pós-parto, especialmente se estiver amamentando. Consulte um profissional de saúde para orientações personalizadas sobre suas necessidades nutricionais específicas.</p>

            <br />
            <h2 className={philo.className}>Exercícios Pós-Parto:</h2>
            <p>Iniciar atividades físicas leves pode beneficiar sua recuperação. Consulte seu médico antes de começar qualquer programa de exercícios e comece com atividades suaves, como caminhadas curtas. Exercícios específicos de fortalecimento do assoalho pélvico também são recomendados.</p>

            <br />
            <h2 className={philo.className}>Sono e Descanso:</h2>
            <p>O sono pode ser desafiador nos primeiros meses após o parto. Tente descansar sempre que possível. Estabeleça uma rotina de sono saudável, delegue tarefas para permitir períodos de descanso e aproveite a ajuda de familiares e amigos.</p>

            <br />
            <h2 className={philo.className}>Dicas Adicionais:</h2>

            <ul>
                <li><strong>Hidratação:</strong> Mantenha-se bem hidratada, especialmente se estiver amamentando.</li>
                <li><strong>Compartilhe a Responsabilidade:</strong> Divida as tarefas com o parceiro ou familiares para reduzir a carga de trabalho.</li>
                <li><strong>Participe de Grupos de Apoio:</strong> Junte-se a grupos locais ou online de mães pós-parto para compartilhar experiências e receber apoio mútuo.</li>
            </ul>

            <p>Lembre-se, cada mãe tem uma jornada única. Adaptar-se às mudanças pós-parto leva tempo, e é fundamental ouvir seu corpo e buscar apoio sempre que necessário. Se precisar de orientações específicas para a sua situação, não hesite em consultar profissionais de saúde qualificados. A BabyCare está aqui para apoiar você em cada passo do caminho.</p>
        </main>
    )
}
