import "../style.css/style.css";
import Image from "../public/images/Grupo 2098.png";
import faceIcon from '../public/icons/Icon awesome-facebook-f.png'
export default function Home() {
  return (
    <div>
      <div className="section1">
        <div className="menu">
          <h1 className="title">agência</h1>
          <ul>
            <li>Home</li>
            <li>o que fazemos</li>
            <li>Cases</li>
          </ul>
          <button className="contact">Fale conosco</button>
        </div>
        <div className="main">
          <div className="conteudo">
            <h1 className="title">Melhor agência de marketing do bairro</h1>
            <p>
              Somos uma agência de performance digital, aceleramos vendas e
              aquisição de leads para grandes marcas.
            </p>
            <button className="button-aumentar-vendas">Aumentar vendas</button>
          </div>
          <div className="conteudo">
            <img src="/images/grupo.png" />
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="conteudo-titulos">
          <h1>
            Neste bairro, não há agência
            <br /> melhor. Garantimos.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="conteudo-blocos">
        <div className="bloco">
          <img src="/images/icon.6cd5c086.png" />
          <h1>Digital Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="bloco">
          <img src="/images/icon.6cd5c086.png" />
          <h1>Social Midia</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="bloco">
          <img src="/images/icon.6cd5c086.png" />
          <h1>Estratégia digital</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="bloco">
          <img src="/images/icon.6cd5c086.png" />
          <h1>Social Midia</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
      <div className="section3">
        <div className="container-texto">
          <h2>ENTRE EM CONTATO</h2>
          <h1>Aumente seu resultado de vendas e performance</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="container-formulario">
          <form className="form">
             <h1 id="h1-form">Fale com um especialista</h1>
            <input type="text" name="name" placeholder="Nome Completo"></input>
            <input
              type="email"
              name="email"
              placeholder="Email profissional"
            ></input>
            <input
              type="text"
              name="phone"
              placeholder="Celular/Whatsapp"
            ></input>
            <input type="text" name="site" placeholder="Site"></input>
            <select name="select">
              <option value="valor1">Orçamento para Midia</option>
              <option value="valor2" selected>Instagram</option>
              <option value="valor3">Facebook</option>
            </select>
            <button
            className="button"
            type="submit"
            placeholder="enviar"
            >Enviar
            </button>
          </form>
          <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <strong> Política de Privacidade.</strong></p>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="footer-contacts">
            <h1>agência</h1>
            <h2>0800 800 800</h2>
            <h3>comercial@agencia.com.br</h3>
            
          </div>
          <ul className="footer-list">
            <li> <h3>menu</h3></li>
            <li>
              <a className="footer-link">Quem somos</a>
            </li>
            <li>
              <a  className="footer-link">Cases</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li> <h3>Conteúdo</h3></li>
            <li>
              <a className="footer-link">E-books</a>
            </li>
            <li>
              <a  className="footer-link">Fórmulas prontas</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li><h3>Social</h3></li>
            <div className="social">
            <li className="footer-icon">
              <img className="icon"src='/icons/Icon awesome-facebook-f.png'/>
            </li>
            <li className="footer-icon">
            <img className="icon" src='/icons/Icon awesome-instagram.png'/>
            </li>
            <li className="footer-icon">
            <img className="icon" src='/icons/Icon awesome-linkedin.png'/>
            </li>
            <li className="footer-icon">
            <img className="icon" src='/icons/Icon awesome-youtube.png'/>
            </li>
            </div>
          </ul>
        </div>
        
        <div className="footer-copyhigth">
        ©2022 AGENCIA - Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
