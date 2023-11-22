import './Cadastro.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Cadastro() {
    return (
        <main className='mainCadastro'>
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
            <Link className="entrar" href="/Login">Entrar</Link>
        </main>
    )
}
