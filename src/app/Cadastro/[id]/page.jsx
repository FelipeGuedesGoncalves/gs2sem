"use client"
import './Cadastro.scss';
import Image from 'next/image';
import Link from 'next/link';
import {  useEffect, useState } from 'react';

export default function Cadastro({params}) {
    const formId = params.id == 0 ? '' : params.id

    const [novo, setNovo] = useState({
        
        nm_completo:'',
        email:'',
        senha:'',
        telefone:'',
        cpf:'',
    })

    let metodo = 'post'

    const handleChange = e => {
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`http://localhost:3001/clientes/${formId}`,{
        method: metodo,
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(novo)
      })
      .then(window.location = '/')
      .catch(error => console.error(error))    
    }

    useEffect(()=>{
        if(formId){
            fetch(`http://localhost:3001/clientes/${formId}`)
            .then(resp => resp.json())
            .then(resp => setNovo(resp))
            .catch(error => console.error(error))     
        }
    },[formId])
    
    return (
        <main className='mainCadastro'>
            <p className='cadastrotext'>Cadastre-se no</p>
            <Image
                src="/babycarelogowhite.png"
                width={200}
                height={80}
                alt="BabyCare"
            />
            <form className='formcadastro' onSubmit={handleSubmit}>
                <input onChange={handleChange} className='inputcadastro' type="name" id="nm_completo" name="nm_completo" placeholder='Nome' required />
                <input onChange={handleChange} className='inputcadastro' type="email" id="email" name="email" placeholder='Email' required />
                <input onChange={handleChange} className='inputcadastro' type="password" id="senha" name="senha" placeholder='Senha' required />
                <input onChange={handleChange} className='inputcadastro' type="tel" id="telefone" name="telefone" placeholder='Tel.' required />
                <input onChange={handleChange} className='inputcadastro' type="number" id="cpf" name="cpf" placeholder='CPF' required />
                <button className='cadastre' type='submit'>Cadastrar-se</button>
            </form>
            <p className='oucadastro'>ou</p>
            <Link className="entrar" href="/Login">Entrar</Link>
        </main>
    )
}
