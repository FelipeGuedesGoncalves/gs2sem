"use client"

import './Login.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Philosopher } from "next/font/google";
import { useState } from 'react';

const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export default function Login() {

    const [login, setLogin] = useState({ email:"", senha:"" })

    const handleChange = e=> setLogin({...login, [e.target.name]:e.target.value})
    
    const handleSubmit = e=>{
        e.preventDefault()
        sessionStorage.setItem("login", JSON.stringify(login))
        window.location = "/Perfil"
    }
    
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
    )
}