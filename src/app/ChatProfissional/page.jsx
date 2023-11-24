import './/ChatProf.scss';
import { Philosopher } from "next/font/google";
import Image from 'next/image';
const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

// a aplicação irá conferir os dados do profissional que estão cadastrados na session estorage

// após verificar os dados do profissional na session estorage, a constante irá verificar se no banco de dados existe uma sala com as mesmas informações do profissional na session estorage

// após confirmar que existe uma sala no banco de dados com as informações daquele profissional, 

export default function ChatProfissional() {
    return (
        <main className='mainChat'>
            <h1 className={philo.className} id='titulo'>Assistência Médica</h1>
            
            <div className="cliente">
            </div>
            <div className="conversa">
                <div className='mensagens'>
                    {/* Mapeia todas as salas disponíveis,*/}
                </div>
            </div>
            <form className='enviarMensagem'>
                <input className='escreverMsg'/>
                <button className='enviarmsg'>Enviar</button>
            </form>
        </main>
    )
}
