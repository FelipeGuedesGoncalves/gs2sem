import Link from "next/link";
import '../app/globals.scss';
import Image from "next/image";


export default function Menu() {
  return (
    <nav className="nav">
      <Link className="homeLogoLink" href='/'>
        <Image src="/babycarelogowhite.png"
          width={200}
          height={80}
          alt="BabyCare">
        </Image>
      </Link>
      <Link className="itemNav" href='/'>Página Inicial</Link>
      <div className="itemNav">Informações Preciosas
        <ul className="itemNav listainfos">
          <li><Link className="info" href='/Prenatal'>Cuidados Pré-natais</Link></li>
          <li><Link className="info" href='/Materno'>Cuidados Maternos</Link></li>
          <li><Link className="info" href='/Nutri'>Nutrição Infantil</Link></li>
          <li><Link className="info" href='/Posparto'>Cuidados Pós-parto</Link></li>
        </ul>
      </div>
      <Link className="itemNav" href='/Doacao'>Doação</Link>
      <Link className="itemNav" href='/Chat'>Assistência Médica</Link>
      <Link className="itemNav" href='/Perfil'>Meu Perfil</Link>
    </nav>
  );
}