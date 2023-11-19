import '../app/globals.scss';
import Image from 'next/image';

export default function Rodape() {
    return (
        <footer>
            <div className="empresas">
                <p className="apoiado">Projeto sugerido e apoiado por:</p>
                <Image
                    className='empresalogo1'
                    src="/empresalogos.png"
                    width={425}
                    height={165}
                    alt="BabyCare"
                />

            </div>
            <div className="divisao"></div>
            <div className="textofooter">
                <p>INTEGRANTES DO GRUPO</p>
                <br />
                <p>(Nina Rebello francisco - RM: 99509) <br />
                    (Camila dos Santos Cunha - RM: 551785) <br />
                    (Guilherme Rodrigues de Castro - RM: 99624) <br />
                    (Luiz Fellipe Soares de Sousa Lucena - RM: 551365) <br />
                    (Felipe Guedes Gonçalves - RM: 550906)</p>
                    <br />
                <p>© 2023 Hunzer. Todos os direitos reservados. Junte-se a nós na luta contra a fome e pela agricultura
                    sustentável.</p>
            </div>
        </footer>
    );
}
