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
  // ===== LÓGICA PARA ID DO CLIENTE =====

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

  // ===== LÓGICA PARA LOGIN =====
  
  const [user, setUser] = useState('')
  
  useEffect(()=>{
    setUser(JSON.parse(sessionStorage.getItem('login')))
  },[])
  
  const usuario = clientes.length > 0 ? clientes[0] : null;

  // ===== LÓGICA PARA DROPDOWN DO "INFORMAÇÕES PRECIOSAS" =====

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

      <Link className="itemNav" href={'/Doacao/0'}>Doação</Link>

      <Link className="itemNav" href="/Chat">Assistência Médica</Link>
      <Link className="itemNav" href={user ? `/Perfil/${usuario ? usuario.id : ''}` : '/Login'}>{user ? "Meu Perfil" : 'Entrar'}</Link>
      
    </nav>
  );
}
