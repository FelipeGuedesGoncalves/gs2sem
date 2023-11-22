"use client"
// ======= IMPORTAÇÕES E ESTILO DO COMPONENTE =======

import React, { useState, useEffect } from 'react';
import './Perfil.scss';
import { Philosopher } from "next/font/google";
const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export default function Perfil() {
    const [perfilData, setPerfilData] = useState({
        nm_completo: '',
        telefone: '',
        email: '',
        genero: '',
        dataNascimento: '',
        cpf: '',
        endereco: '',
        imagemPerfil: '/imagem_ausente2.png', // caminho relativo da imagem
    });

    const [inputsBloqueados, setInputsBloqueados] = useState(true);
    const [nm_completoExibido, setnm_completoExibido] = useState('Cliente BabyCare');

    useEffect(() => {
        // Faz uma requisição GET para obter os dados do cliente do servidor
        fetch('http://localhost:3001/clientes/1', {
            method: 'GET',
        })
            .then(resp => resp.json())
            .then(resp => {
                // Verifica se a resposta está vazia
                if (Object.keys(resp).length === 0) {
                    // Se a resposta estiver vazia, define o nome exibido como 'Cliente BabyCare'
                    setnm_completoExibido('Cliente BabyCare');
                } else {
                    // Se houver dados na resposta, atualiza o nome exibido e os dados do perfil
                    setnm_completoExibido(resp.nm_completo);
                    setPerfilData(resp);
                }
            })
            .catch(error => {
                // Captura e registra qualquer erro ocorrido durante a requisição
                console.error('Erro ao obter dados do cliente:', error);
            });
    }, []);


    const handleInputChange = (event, campo) => {
        if (!inputsBloqueados) {
            setPerfilData({ ...perfilData, [campo]: event.target.value });
        }
    };

    const handleImagemChange = (event) => {
        const novaImagem = URL.createObjectURL(event.target.files[0]);
        setPerfilData({ ...perfilData, imagemPerfil: novaImagem });
    };

    const handleBloquearInputs = () => {
        setInputsBloqueados(true);
    };

    const handleDesbloquearInputs = () => {
        setInputsBloqueados(false);
    };

    const handleSalvar = () => {
        fetch('http://localhost:3001/clientes/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(perfilData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Perfil salvo com sucesso:', data);
            })
            .catch(error => console.error('Erro ao salvar perfil:', error));

        setnm_completoExibido(perfilData.nm_completo);
        setInputsBloqueados(true);
    };

    return (
        <main className='mainPerfil'>
            <h1 id="h1Perfil" className={philo.className}>Meu Perfil</h1>

            <section className="perfil">
                <div className="fotoPerfil">
                    {!inputsBloqueados ? (
                        <label className="botaoMudarImagem">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImagemChange}
                                disabled={inputsBloqueados}
                                style={{ display: 'none' }}
                            />
                            <img className="imagemPerfil" src={'/mudar-foto.png'} alt="foto de perfil" />
                        </label>
                    ) : (
                        <img className="imagemPerfil" src={perfilData.imagemPerfil} alt="foto de perfil" />
                    )}
                    <h3 className="nm_completoPerfil">{nm_completoExibido}</h3>
                    <div className='btns'>
                        {inputsBloqueados ? (
                            <button className='btnPerfil' onClick={handleDesbloquearInputs}>Editar</button>
                        ) : (
                            <>
                                <button className='btnPerfil' onClick={handleSalvar}>Salvar</button>
                                <button className='btnPerfil' onClick={handleBloquearInputs}>Cancelar</button>
                            </>
                        )}
                    </div>
                </div>

                <form className="infosPerfil">
                    
                        <label className="secaoPerfil">Nome Completo</label>
                        <input
                            className="textoPerfil"
                            type="text"
                            value={perfilData.nm_completo}
                            onChange={(e) => handleInputChange(e, 'nm_completo')}
                            placeholder="-"
                            disabled={inputsBloqueados}
                            required
                        />
                    
                        <label className="secaoPerfil">Telefone</label>
                        <input
                            className="textoPerfil"
                            type="tel"
                            value={perfilData.telefone}
                            onChange={(e) => handleInputChange(e, 'telefone')}
                            placeholder="-"
                            disabled={inputsBloqueados}
                            required
                        />
                    
                        <label className="secaoPerfil">Email</label>
                        <input
                            className="textoPerfil"
                            type="email"
                            value={perfilData.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            placeholder="-"
                            disabled={inputsBloqueados}
                            required
                        />
                    
                        <label className="secaoPerfil">CPF</label>
                        <input
                            className="textoPerfil"
                            type="text"
                            value={perfilData.cpf}
                            onChange={(e) => handleInputChange(e, 'cpf')}
                            placeholder="-"
                            disabled={inputsBloqueados}
                            required
                        />
                </form>
            </section>
        </main>
    );
}