"use client"

import './/ChatProf.scss';
import { Philosopher } from "next/font/google";
import Image from 'next/image';
const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

// 1- a aplicação irá conferir os dados do profissional que estão cadastrados na session estorage

// 2- após verificar os dados do profissional na session estorage, a constante irá verificar se no banco de dados existe uma sala com as mesmas informações do profissional na session estorage



// 3- após confirmar que existe uma sala no banco de dados com as informações daquele profissional, a aplicação irá ler todas as mensagens presentes no array da key mensagens

// 4 - preciso de uma constante que, pegue as mensagens anteriormente lidas e faça a distinção entre mensagens de cliente e mensagens de profissional da seguinte forma: toda mensagem que tiver id, conteúdo e email pertence a um cliente, logo, a div da mensagem na aplicação terá uma className="mensagemCliente" e apresentará o conteúdo da mensagem do cliente. E toda mensagem que tiver id, conteúdo e rm_profissional pertence a um profissional, logo, a div da mensagem na aplicação terá uma className="mensagemProfissional" e apresentará o conteúdo da mensagem do profissional

// 5 - a ordem das mensagens na aplicação será feito com base no número da id, portanto se a mensagem tiver id 1 ela é a primeira mensagem, se tem id 2 é a segunda mensagem e assim por diante

// 6 - posteriormente irei tratar sobre o envio de mensagens ao banco então por hora se preocupe em implementar o que eu pedi

import { useEffect, useState } from 'react';

export default function ChatProfissional({ params }) {
    const idSala = params.id == 0 ? '' : params.id
    const [profissional, setProfissional] = useState({});
    const [sala, setSala] = useState({});
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        // Obter dados do profissional da sessionStorage
        const profissionalData = JSON.parse(sessionStorage.getItem('loginprof'));

        if (!profissionalData) {
            // Se não houver dados do profissional, você pode redirecionar ou tratar de acordo com seus requisitos
            console.error('Dados do profissional não encontrados na sessionStorage');
            return;
        }
        setProfissional(profissionalData);

        // Assumindo que o ID da sala está armazenado no profissionalData.id_sala (ajuste conforme necessário)

        // Consultar o banco de dados para obter os detalhes da sala pelo ID
        fetch(`http://localhost:3001/salas/${idSala}`, {
            method: 'GET',
        })
            .then((resp) => resp.json())
            .then((salaEncontrada) => {
                if (salaEncontrada) {
                    setSala(salaEncontrada);
                    // Ordenar mensagens com base no número da ID
                    const mensagensOrdenadas = salaEncontrada.mensagens.sort((a, b) => a.id - b.id);
                    setMensagens(mensagensOrdenadas);
                } else {
                    // Caso não encontre a sala, você pode lidar com isso de acordo com seus requisitos
                    console.error(`Não foi possível encontrar a sala com o ID ${idSala}`);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // Adicionando classe à mensagem com base no remetente
    const renderizarMensagens = () => {
        return mensagens.map((mensagem) => (
            <div key={mensagem.id} className={`mensagem ${mensagem.email ? 'mensagemCliente' : 'mensagemProfissional'}`}>
                {mensagem.conteudo}
            </div>
        ));
    };

    return (
        <main className='mainChat'>
            <h1 className={philo.className} id='titulo'>
                Assistência Médica
            </h1>

            <div className='cliente'></div>
            <div className='conversa'>
                <div className='mensagens'>{renderizarMensagens()}</div>
            </div>
            <form className='enviarMensagem'>
                <input className='escreverMsg' />
                <button className='enviarmsg'>Enviar</button>
            </form>
        </main>
    );
}