import './/Prenatal.scss';
import { Philosopher } from "next/font/google";

const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const metadata = {
    title: 'BabyCare - Cuidados Pré-Natais',
    description: 'Descubra a importância dos cuidados pré-natais para garantir a saúde da mãe e do bebê desde o início da gravidez até o momento do parto.'
}

export default function Prenatal() {
    return (
        <main className='maininfo'>
            <h1 className={philo.className}>Cuidados Pré-Natais</h1>

            <p>Os cuidados pré-natais são uma parte vital da jornada materna, focados em garantir a saúde da mãe e do bebê desde o início da gravidez até o momento do parto. Essa fase inicial é crucial para monitorar o desenvolvimento fetal, proporcionar orientação à mãe e estabelecer hábitos saudáveis para uma gestação bem-sucedida.</p>

            <h2 className={philo.className}>Importância dos Cuidados Pré-Natais:</h2>

            <ul>
                <li><strong>Monitoramento do Desenvolvimento Fetal:</strong> Exames regulares asseguram que o bebê está se desenvolvendo saudavelmente, permitindo intervenções precoces, se necessário.</li>
                <li><strong>Acompanhamento da Saúde Materna:</strong> Verificações médicas regulares monitoram a saúde da mãe, abordando preocupações e garantindo que ela esteja em condições ideais para a gravidez.</li>
                <li><strong>Identificação de Fatores de Risco:</strong> Cuidados pré-natais permitem a identificação precoce de fatores de risco, como condições médicas ou genéticas, possibilitando um planejamento adequado.</li>
                <li><strong>Educação sobre Estilo de Vida:</strong> Oferece orientações sobre hábitos alimentares saudáveis, atividades físicas adequadas e outras práticas que impactam positivamente a gestação.</li>
            </ul>

            <h2 className={philo.className}>Exames a serem Marcados:</h2>

            <h2 className={philo.className}>Primeiro trimestre</h2>

            <table>
                <thead>
                    <tr>
                        <th className='coluna1'>Semanas</th>
                        <th className='coluna2'>Tipo de Consulta</th>
                        <th className='coluna3 conteudo'>Conteúdo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='coluna1'>4-8</td>
                        <td className='coluna2'>Consulta Inicial</td>
                        <td className='coluna3'>Confirmação da gravidez, histórico médico, orientações sobre hábitos saudáveis, prescrição de vitaminas pré-natais.</td>
                    </tr>
                    <tr>
                        <td className='coluna1'>8-12</td>
                        <td className='coluna2'>Primeira Consulta de Ultrassom</td>
                        <td className='coluna3'>Verificação do batimento cardíaco fetal, confirmação da idade gestacional, identificação de múltiplos fetos (se aplicável).</td>
                    </tr>
                </tbody>
            </table>

            {/* === */}


            <h2 className={philo.className}>Segundo trimestre</h2>

            <table>
                <thead>
                    <tr>
                        <th className='coluna1'>Semanas</th>
                        <th className='coluna2'>Tipo de Consulta</th>
                        <th className='coluna3 conteudo'>Conteúdo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='coluna1'>12-16</td>
                        <td className='coluna2'>Segunda Consulta de Ultrassom</td>
                        <td className='coluna3'>Avaliação detalhada da anatomia fetal, detecção precoce de anomalias.</td>
                    </tr>
                    <tr>
                        <td className='coluna1'>16-20</td>
                        <td className='coluna2'>Consulta de Rotina</td>
                        <td className='coluna3'>Monitoramento do ganho de peso, pressão arterial, exames de sangue, avaliação do bem-estar geral.</td>
                    </tr>
                    <tr>
                        <td className='coluna1'>20-24</td>
                        <td className='coluna2'>Triagem para Diabetes Gestacional</td>
                        <td className='coluna3'>Teste de glicose oral para identificar diabetes gestacional.</td>
                    </tr>
                </tbody>
            </table>


            {/* ===== */}

            <h2 className={philo.className}>Terceiro trimestre</h2>

            <table>
                <thead>
                    <tr>
                        <th className='coluna1'>Semanas</th>
                        <th className='coluna2'>Tipo de Consulta</th>
                        <th className='coluna3 conteudo'>Conteúdo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='coluna1'>24-28</td>
                        <td className='coluna2'>Consulta de Rotina</td>
                        <td className='coluna3'>Monitoramento contínuo da saúde da mãe e do bebê, incluindo exames de sangue para anemia e avaliação da pressão arterial.</td>
                    </tr>
                    <tr>
                        <td className='coluna1'>28-32</td>
                        <td className='coluna2'>Terceira Consulta de Ultrassom</td>
                        <td>Avaliação do crescimento fetal, posição do bebê e identificação de possíveis complicações.</td>
                    </tr>
                    <tr>
                        <td className='coluna1'>32-36</td>
                        <td className='coluna2'>Consulta de Rotina</td>
                        <td className='coluna3'>Monitoramento do posicionamento do bebê, avaliação da dilatação cervical e discussão sobre o plano de parto.</td>
                    </tr>
                    <tr>
                        <td className='coluna1'>36-40</td>
                        <td className='coluna2'>Consulta Semanal</td>
                        <td className='coluna3'>Monitoramento mais frequente para garantir a preparação para o parto e avaliação contínua da saúde da mãe e do bebê.</td>
                    </tr>
                </tbody>
            </table>



            <h2 className={philo.className}>Dicas para Cuidados Pré-Natais:</h2>

            <ul>
                <li><strong>Agende Consultas Regulares:</strong> Mantenha um calendário de consultas com seu obstetra para avaliações e exames essenciais.</li>
                <li><strong>Alimentação Balanceada:</strong> Consuma uma dieta rica em nutrientes, incluindo ácido fólico, ferro e cálcio.</li>
                <li><strong>Hidratação Adequada:</strong> Beba água suficiente para garantir a hidratação, essencial para o desenvolvimento fetal.</li>
                <li><strong>Exercícios Leves:</strong> Pratique atividades físicas aprovadas pelo médico, como caminhadas suaves, para manter a forma e melhorar a circulação.</li>
                <li><strong>Evite Substâncias Nocivas:</strong> Elimine o consumo de álcool, tabaco e outras substâncias prejudiciais durante a gestação.</li>
            </ul>

            <p>Lembre-se, cada gestação é única, e os cuidados pré-natais devem ser personalizados de acordo com as necessidades específicas da mãe e do bebê. Consulte sempre seu profissional de saúde para orientações personalizadas durante esse período especial. Embarque nesta jornada conosco, onde cuidar de você é a nossa prioridade.</p>
        </main>
    )
}
