import './Login.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Philosopher } from "next/font/google";
const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export default function Login() {
    return (
        <main className='mainLogin'>
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
            <Link className="cadastre" href="/Cadastro">Cadastre-se</Link>
        </main>
    )
}