'use client';

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
  const dropdownRef = useRef(null);

  useEffect(() => {
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
      <Link className="itemNav" href="/Doacao">Doação</Link>
      <Link className="itemNav" href="/Chat">Assistência Médica</Link>
      <Link className="itemNav" href="/Login">Entrar</Link>

      <div className="bloqueio">
        <div className="login">
          <button className='fechar'>x</button>
          <p className='logintext'>Seja Bem-Vindo(a) ao</p>
          <Image
            src="/babycarelogowhite.png"
            width={200}
            height={80}
            alt="BabyCare"
          />
          <input className='inputlogin' type="text" placeholder='Email' />
          <input className='inputlogin' type="text" placeholder='Senha' />
          <button className='entrar'>Entrar</button>
          <p className='logintext'>ou</p>
          <button className='cadastre'>Cadastrar-se</button>
        </div>
      </div>

    </nav>

  );
}
