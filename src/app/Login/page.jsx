import './/Login.scss';
import { Philosopher } from "next/font/google";

const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const metadata = {
    title: 'Login',
    description: 'Faça Login na nossa plataforma'
}

export default function Login() {
    return (
        <main className='mainlogin'>
            
        </main>
    )
}