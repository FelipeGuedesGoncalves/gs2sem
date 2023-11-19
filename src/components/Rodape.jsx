import '../app/globals.scss';

export default function Rodape() {
  return (
    <footer>
      <p className="textoFooter">© 2023 Porto Seguro. Todos os direitos reservados. Av. Paulista, 1234 - São Paulo, SP. Telefone: (00) 1234-5678. Email: contato@portoseguro.com.br. Aviso Legal | Política de Privacidade | Termos de Uso</p>
      <div className="linha"></div>
      <div className="portoFiap">
        <div className="logoPortoF"></div>
        <div className="fiapBranco"></div>
      </div>
    </footer>
  );
}
