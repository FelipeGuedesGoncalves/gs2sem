import './/Doacao.scss';
import { Philosopher } from "next/font/google";

const philo = Philosopher({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const metadata = {
    title: 'Doação',
    description: 'Faça Doação na nossa plataforma'
}

export default function Doacao() {
    return (
        <main className='mainDoacao'>

            <h1 className={philo.className}>Doação</h1>

            <h2 className={philo.className}>Qualquer quantia é mais que bem-vinda</h2>

            <form className='formDoar'>
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required />

                <label for="formaPagamento">Forma de Pagamento:</label>
                <select id="formaPagamento" name="formaPagamento" required>
                    <option value="cartao">Cartão de Crédito</option>
                    <option value="boleto">Boleto Bancário</option>

                </select>

                <label for="valor">Valor da Doação:</label>
                <input type="number" id="valor" name="valor" min="1" step="any" required />

                <button type="submit">Doar</button>
            </form>
        </main>
    )
}