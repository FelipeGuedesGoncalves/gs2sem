"use client"

import './LoginPro.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Philosopher } from "next/font/google";
import { useEffect } from 'react';

const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export default function Login() {
    const [login, setLogin] = useState({ rm_profissional:"", senha:"" });
    const [profissionais, setProfissionais] = useState([]);

    useEffect(() => {
        // Simula a busca de profissionais do servidor
        fetch(`http://localhost:3001/profissionais`, {
            method: 'GET',
        })
        .then(resp => resp.json())
        .then(resp => setProfissionais(resp))
        .catch(error => console.error(error));
    }, []);

    const handleChange = e => setLogin({...login, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();

        // Verifica se há algum profissional com o rm_profissional e senha fornecidos
        const profissionalEncontrado = profissionais.find(profissional => profissional.rm_profissional === login.rm_profissional && profissional.senha === login.senha);

        if (profissionalEncontrado) {
            // Armazena todas as informações do profissional na sessionStorage
            sessionStorage.setItem("loginprof", JSON.stringify(profissionalEncontrado));
            // Redireciona para a página de chat com o ID do profissional
            window.location = "/Chat";
        } else {
            alert("RM profissional ou senha incorretos. Tente novamente.");
        }
    };

    return (
        <main className='mainLogin'>
            <p className='logintext'>Seja Bem-Vindo(a) ao</p>
            <Image
                src="/babycarelogowhite.png"
                width={200}
                height={80}
                alt="BabyCare"
            />
            <form className='formlogin' onSubmit={handleSubmit}>
                <input onChange={handleChange} className='inputlogin' value={login.rm_profissional} type="text" id="rm_profissional" name="rm_profissional" placeholder='RM proficional' required />
                <input onChange={handleChange} className='inputlogin' value={login.senha} type="password" id="senha" name="senha" placeholder='Senha' required />
                <button className='entrar' type='submit'>Entrar</button>
            </form>
            <p className='logintext'>ou</p>
            <Link className="cadastre" href="/login">Voltar</Link>
        </main>
    );
}
