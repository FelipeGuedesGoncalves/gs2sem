"use client"

import './/ChatProf.scss';
import { Philosopher } from "next/font/google";
const philo = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700']
});

import { useEffect, useState } from 'react';

export default function ChatProfissional({ params }) {
  const idSala = params.id == 0 ? '' : params.id
  const idMensagem = params.id == 0 ? '' : params.id
  const [profissional, setProfissional] = useState({});
  const [sala, setSala] = useState({});
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');

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


  // ... (código anterior)

  const handleEnviarMensagem = async (e) => {
    e.preventDefault();
    try {
      // Cria um objeto representando a nova mensagem
      const novaMensagemObj = {
        id: mensagens.length + 1, // Gera um ID único para a nova mensagem
        conteudo: novaMensagem,
        rm_profissional: profissional.rm_profissional,
      };

      // Atualiza a variável localmente com a nova mensagem
      const mensagensAtualizadas = [...mensagens, novaMensagemObj];
      setMensagens(mensagensAtualizadas);

      // Extrai informações do loginref da sessionStorage
      const loginRefInfo = JSON.parse(sessionStorage.getItem('loginprof'));

      // Adiciona as informações do loginref às mensagens
      const dadosParaPut = {
        ...loginRefInfo,
        mensagens: mensagensAtualizadas,
      };

      // Atualiza as mensagens no servidor usando o método PUT
      await fetch(`http://localhost:3001/salas/${idSala}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosParaPut),
      });

      // Limpa a caixa de mensagem após o envio
      setNovaMensagem('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  // ... (restante do código)

  const handleEncerrarConversa = async () => {
    try {
      // Cria um objeto representando a sala com mensagens vazias
      const salaEncerrada = {
        ...sala,
        mensagens: [],
      };

      // Atualiza as mensagens no servidor usando o método PUT
      await fetch(`http://localhost:3001/salas/${idSala}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(salaEncerrada),
      });

      // Limpa a lista local de mensagens
      setMensagens([]);
    } catch (error) {
      console.error('Erro ao encerrar conversa:', error);
    }
  };



  const renderizarMensagens = () => {
    return mensagens.map((mensagem) => (
      <div
        key={mensagem.id}
        className={`mensagem ${mensagem.email ? 'mensagemCliente' : 'mensagemProfissional'}`}
      >
        {mensagem.conteudo}
      </div>
    ));
  };

  return (
    <main className='mainChat'>
      <h1 className={philo.className} id='titulo'>
        Assistência Médica
      </h1>
      <button className='encerrarConversa' onClick={handleEncerrarConversa}>
        Encerrar Conversa
      </button>
      <div className='cliente'></div>
      <div className='conversa'>
        <div className='mensagens'>{renderizarMensagens()}</div>
      </div>
      <form className='enviarMensagem'>
        <input
          className='escreverMsg'
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
        />
        <button className='enviarmsg' onClick={handleEnviarMensagem}>
          Enviar
        </button>
      </form>
    </main>
  );
}