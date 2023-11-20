import './/Nutri.scss';
import Image from 'next/image';
import { Philosopher } from "next/font/google";

const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const metadata = {
    title: 'BabyCare - Nutrição Infantil',
    description: 'Explore a importância da alimentação desde a gestação até os primeiros anos de vida do seu bebê.',
}

export default function Nutri() {
    return (
        <main className='maininfo'>
            <h1 className={philo.className}>Nutrição Infantil</h1>

            <p>Bem-vindo à nossa dedicada seção de Nutrição Infantil, onde mergulhamos profundamente na importância da alimentação desde a gestação até os primeiros anos de vida do seu bebê. Reconhecemos a influência significativa da nutrição no desenvolvimento saudável, e aqui estão detalhes adicionais para orientar você em cada fase:</p>

            <br />

            {/* Informações sobre Nutrição Durante a Gestação */}
            <h2 className={philo.className}>Nutrição Durante a Gestação:</h2>

            <ul>
                <li><strong>Ácido Fólico:</strong> Contribui para o desenvolvimento do sistema nervoso do feto. Fontes incluem folhas verdes escuras, leguminosas e cereais fortificados.</li>
                <li><strong>Ferro:</strong> Importante para prevenir anemia em gestantes e garantir um fornecimento adequado de oxigênio para o feto. Encontrado em carnes magras, leguminosas e vegetais de folhas verdes.</li>
                <li><strong>Cálcio:</strong> Fundamental para o desenvolvimento ósseo do feto. Laticínios, folhas verdes e alimentos fortificados são boas fontes.</li>
                <li><strong>Ômega-3:</strong> Contribui para o desenvolvimento do cérebro e da visão. Peixes de água fria, sementes de chia e nozes são excelentes fontes.</li>
            </ul>

            {/* Imagem relacionada à gestação */}
            <Image
                className='infofoto'
                src="/bebecomendoo.jpg"
                width={1000}
                height={500}
                alt="BabyCare"
            />

            {/* Informações sobre Dicas para Nutrir o Bebê Após o Nascimento */}
            <h2 className={philo.className}>Dicas para Nutrir o Bebê Após o Nascimento</h2>

            <p>Após a chegada do bebê, a alimentação torna-se mais específica e deve ser construída com responsabilidade, visto que a nutrição adequada durante os primeiros anos de vida é fundamental para o crescimento, desenvolvimento cognitivo e fortalecimento do sistema imunológico. Estabelecer hábitos alimentares saudáveis desde cedo contribui para a saúde a longo prazo.</p>

            <br />

            {/* Informações adicionais sobre nutrição pós-nascimento */}
            <ul>
                <li><strong>Amamentação:</strong> Se possível, amamente exclusivamente nos primeiros seis meses. O leite materno fornece os nutrientes essenciais e ajuda a fortalecer os laços emocionais.</li>
                <li><strong>Introdução de Alimentos Sólidos:</strong> Inicie a introdução de alimentos sólidos por volta dos seis meses, começando com papinhas de frutas e vegetais. Introduza novos alimentos gradualmente para observar possíveis alergias.</li>
                <li><strong>Variedade de Nutrientes:</strong> Ofereça uma variedade de alimentos para garantir uma ingestão equilibrada de nutrientes, incluindo frutas, vegetais, grãos integrais, proteínas e laticínios.</li>
                <li><strong>Tamanho das Porções:</strong> Respeite o apetite do seu bebê e evite forçar a alimentação. Esteja atento aos sinais de saciedade.</li>
                <li><strong>Evite Adição de Açúcares e Sal:</strong> Limite a adição de açúcares e sal nos alimentos do bebê. Isso ajuda a desenvolver preferências por sabores naturais.</li>
                <li><strong>Hidratação Adequada:</strong> Introduza água potável após a introdução de alimentos sólidos. Mantenha a hidratação ao longo do dia.</li>
            </ul>

            <p>Lembre-se de que cada bebê é único, e a introdução de alimentos deve ser adaptada às necessidades individuais. Consulte o pediatra regularmente para garantir que o plano nutricional esteja alinhado com o desenvolvimento saudável do seu pequeno. Na BabyCare, comprometemo-nos a fornecer informações detalhadas e práticas para tornar sua jornada na maternidade mais segura e informada. Para dúvidas específicas ou orientações personalizadas, nossa equipe de especialistas em saúde está pronta para ajudar no nosso serviço de chat. Cuidamos do bem-estar do seu bebê, cada passo do caminho.</p>

        </main>
    )
}
