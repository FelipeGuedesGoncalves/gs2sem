import './/Chat.scss';
import { Philosopher } from "next/font/google";
import Image from 'next/image';
const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export default function Home() {
    return (
        <main className='mainChat'>
            <h1 className={philo.className} id='titulo'>Assistência Médica</h1>
            <div className="profissional">
                <Image></Image>
                <h3 className='nomeProfissional'></h3>
            </div>
            <div className="conversa">
                <div className='mensagensCliente'>
                    {/* mapeia todas as mensagens no array conversa e exibe aquelas que tem email, id e um conteúdo*/}
                </div>
                {/* mapeia todas as mensagens no arrray conversa e exibe aquelas que tem rm_profissional, id e conteúdo */}
                <div className="mensagensProfissional"></div>
            </div>
            <form className='enviarMensagem'>
                <input className='escreverMsg'/>
                <button className='enviarmsg'>Enviar</button>
            </form>
        </main>
    )
}
