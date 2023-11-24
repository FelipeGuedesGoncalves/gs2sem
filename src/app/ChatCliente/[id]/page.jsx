"use client"

import './/ChatCliente.scss';  // Certifique-se de criar este arquivo de estilo
import { Philosopher } from "next/font/google";
const philo = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700']
});

import { useEffect, useState } from 'react';

export default function ChatCliente({ params }) {
  const idSala = params.id == 0 ? '' : params.id
  const [cliente, setCliente] = useState({});
  const [sala, setSala] = useState({});
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');

  useEffect(() => {
    // Obter dados do cliente da sessionStorage
    const clienteData = JSON.parse(sessionStorage.getItem('login'));
  
    if (!clienteData) {
      // Se não houver dados do cliente, você pode redirecionar ou tratar de acordo com seus requisitos
      console.error('Dados do cliente não encontrados na sessionStorage');
      return;
    }
    setCliente(clienteData);
  
    // Consultar o banco de dados para encontrar uma sala com mensagens vazias
    fetch(`http://localhost:3001/salas`, {
      method: 'GET',
    })
      .then((resp) => resp.json())
      .then((salas) => {
        // Verificar se há uma sala disponível para o cliente
        const salaDisponivel = salas.find((sala) => sala.mensagens.length === 0);
        if (salaDisponivel) {
          setSala(salaDisponivel);
          setMensagens(salaDisponivel.mensagens);
        } else {
          // Caso não encontre uma sala vazia, verificar salas com mensagens do cliente
          const salaComMensagensDoCliente = salas.find(
            (sala) => sala.mensagens.some((mensagem) => mensagem.email === clienteData.email)
          );
  
          if (salaComMensagensDoCliente) {
            // Se encontrar uma sala com mensagens do cliente, o cliente pode usar a sala
            setSala(salaComMensagensDoCliente);
            setMensagens(salaComMensagensDoCliente.mensagens);
          } else {
            // Caso não encontre uma sala com mensagens do cliente, você pode lidar com isso de acordo com seus requisitos
            console.error('Todos os profissionais estão ocupados no momento. Aguarde um instante.');
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  const handleEnviarMensagem = async (e) => {
    e.preventDefault();
    try {
      // Cria um objeto representando a nova mensagem
      const novaMensagemObj = {
        id: mensagens.length + 1, // Gera um ID único para a nova mensagem
        conteudo: novaMensagem,
        email: cliente.email,
      };

      // Atualiza a variável localmente com a nova mensagem
      const mensagensAtualizadas = [...mensagens, novaMensagemObj];
      setMensagens(mensagensAtualizadas);

      // Adiciona as informações da sala e as mensagens atualizadas
      const dadosParaPut = {
        ...sala,
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