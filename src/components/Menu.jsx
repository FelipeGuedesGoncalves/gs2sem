'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.scss';

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
    <nav className="nav">
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
    </nav>
  );
}
