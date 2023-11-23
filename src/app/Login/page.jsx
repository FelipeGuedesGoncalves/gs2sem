"use client"

import './Login.scss';
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
    const [login, setLogin] = useState({ email:"", senha:"" });
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        // Simula a busca de clientes do servidor
        fetch(`http://localhost:3001/clientes`, {
            method: 'GET',
        })
        .then(resp => resp.json())
        .then(resp => setClientes(resp))
        .catch(error => console.error(error));
    }, []);

    const handleChange = e => setLogin({...login, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();

        // Verifica se há algum cliente com o email e senha fornecidos
        const clienteEncontrado = clientes.find(cliente => cliente.email === login.email && cliente.senha === login.senha);

        if (clienteEncontrado) {
            // Armazena todas as informações do cliente na sessionStorage
            sessionStorage.setItem("login", JSON.stringify(clienteEncontrado));
            // Redireciona para a página de perfil com o ID do cliente
            window.location = `/Perfil/${clienteEncontrado.id}`;
        } else {
            alert("Email ou senha incorretos. Tente novamente.");
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
                <input onChange={handleChange} className='inputlogin' value={login.email} type="email" id="email" name="email" placeholder='Email' required />
                <input onChange={handleChange} className='inputlogin' value={login.senha} type="password" id="senha" name="senha" placeholder='Senha' required />
                <button className='entrar' type='submit'>Entrar</button>
            </form>
            <p className='logintext'>ou</p>
            <Link className="cadastre" href={'/Cadastro/0'}>Cadastre-se</Link>
        </main>
    );
}
