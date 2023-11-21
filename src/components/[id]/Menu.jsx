"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.scss';
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900']
});

export default function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCadastroOpen, setCadastroOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {


    // ===== LÓGICA PARA DROPDOWN DO "INFORMAÇÕES PRECIOSAS" =====

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  // ===== LÓGICA PARA HABILITAR LOGIN E CADASTRO =====

  const enableLogin = () => {
    setLoginOpen(true);
    setCadastroOpen(false);
  };

  const enableCadastro = () => {
    setCadastroOpen(true);
    setLoginOpen(false);
  };

  const closeModal = () => {
    setLoginOpen(false);
    setCadastroOpen(false);
  };


  // ===== LÓGICA PARA CADASTRAR CLIENTE =====

  return (
    <nav id='nav' className={outfit.className}>

      <Link className="homeLogoLink" href="/">
        <Image
          src="/babycarelogowhite.png"
          width={200}
          height={80}
          alt="BabyCare"
        />
      </Link>

      <Link className="itemNav" href='/'>Página Inicial</Link>


      <div className="itemNav" onClick={toggleDropdown} ref={dropdownRef}>
        Informações Preciosas
        {isDropdownOpen && (
          <ul id="dropdown" className="dropdown">
            <li>
              <Link className="info" href="/Prenatal">Cuidados Pré-natais</Link>
            </li>
            <li>
              <Link className="info" href="/Materno">Cuidados Maternos</Link>
            </li>
            <li>
              <Link className="info" href="/Nutri">Nutrição Infantil</Link>
            </li>
            <li>
              <Link className="info" href="/Posparto">Cuidados Pós-parto</Link>
            </li>
          </ul>
        )}
      </div>

      <Link className="itemNav" href={'/Doacao/0'}>Doação</Link>

      <Link className="itemNav" href="/Chat">Assistência Médica</Link>


      <button className="itemNav" onClick={enableLogin}>Entrar</button>

      <div className="bloqueio" style={{ display: isLoginOpen || isCadastroOpen ? 'flex' : 'none' }}>



        {/* ===== LOGIN ===== */}

        {isLoginOpen && (
          <div className="login">
            <button className='fechar' onClick={closeModal}>x</button>
            <p className='logintext'>Seja Bem-Vindo(a) ao</p>
            <Image
              src="/babycarelogowhite.png"
              width={200}
              height={80}
              alt="BabyCare"
            />
            <form className='formlogin' action="">
              <input className='inputlogin' type="email" id="email" name="email" placeholder='Email' required />
              <input className='inputlogin' type="password" id="senha" name="senha" placeholder='Senha' required />
              <button className='entrar' type='submit'>Entrar</button>
            </form>
            <p className='logintext'>ou</p>
            <button className='cadastre' onClick={enableCadastro}>Cadastrar-se</button>
          </div>
        )}



        {/* ===== CADASTRO ===== */}
        
        {isCadastroOpen && (
          <div className="cadastro">
            <button className='fechar' onClick={closeModal}>x</button>
            <p className='cadastrotext'>Cadastre-se no</p>
            <Image
              src="/babycarelogowhite.png"
              width={200}
              height={80}
              alt="BabyCare"
            />
            <form className='formcadastro' action="">
              <input className='inputcadastro' type="name" id="nome" name="nome" placeholder='Nome' required />
              <input className='inputcadastro' type="email" id="email" name="email" placeholder='Email' required />
              <input className='inputcadastro' type="password" id="senha" name="senha" placeholder='Senha' required />
              <input className='inputcadastro' type="tel" id="telefone" name="telefone" placeholder='Tel.' required />
              <input className='inputcadastro' type="number" id="cpf" name="cpf" placeholder='CPF' required />
              <button className='cadastre' type='submit'>Cadastrar-se</button>
            </form>
            <p className='cadastrotext'>ou</p>
            <button className='entrar' onClick={enableLogin}>Entrar</button>
          </div>
        )}

      </div>
    </nav>
  );
}
