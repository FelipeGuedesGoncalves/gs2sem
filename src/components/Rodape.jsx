import '../app/globals.scss';
import Image from 'next/image';

export default function Rodape() {
    return (
        <footer>
            <div className="empresas">
                <p className="apoiado">Projeto sugerido e apoiado por:</p>
                <Image
                    classNameName='empresalogo1'
                    src="/empresalogos.png"
                    width={200}
                    height={70}
                    alt="BabyCare"
                />

            </div>
            <div className="divisao"></div>
            <div className="textofooter">
                <p>INTEGRANTES DO GRUPO</p>
                <p>(Nina Rebello francisco - RM: 99509)
                    (Camila dos Santos Cunha - RM: 551785)
                    (Guilherme Rodrigues de Castro - RM: 99624)
                    (Luiz Fellipe Soares de Sousa Lucena - RM: 551365)
                    (Felipe Guedes Gonçalves - RM: 550906)</p>
                <p>© 2023 Hunzer. Todos os direitos reservados. Junte-se a nós na luta contra a fome e pela agricultura
                    sustentável.</p>
            </div>
        </footer>
    );
}
