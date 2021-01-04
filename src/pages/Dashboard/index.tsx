import React from 'react';
import { useSpring, animated } from 'react-spring';

import { FiInstagram } from 'react-icons/fi';

import WhatsappLogo from '../../assets/whatsapp-logo.png';
import Banner01 from '../../assets/image2.png';

import {
  Title,
  HeaderSite,
  AboutMe,
  ImgPerson,
  Contact,
  Skills,
} from './styles';

const Dashboard: React.FC = () => {
  //inicia a renderização em tela
  const props = useSpring({
    opacity: 1,
    delay: 600,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: 'translateX(-400px)',
    },
  });

  const props2 = useSpring({
    opacity: 1,
    delay: 1000,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: 'translateY(-400px)',
    },
  });
  return (
    <>
      <Title>Dra. Letícia Rodrigues </Title>

      <HeaderSite>
        <animated.a
          style={props2}
          key="Whatssap"
          href="https://api.whatsapp.com/send?phone=553195862703"
          target="blank"
        >
          Entre em contato
          <img src={WhatsappLogo} alt="WhatsApp" />
        </animated.a>

        <ImgPerson>
          <animated.div style={props}>
            <img src={Banner01} alt="Banner" />
          </animated.div>
        </ImgPerson>
      </HeaderSite>

      <AboutMe>
        <h2>Sobre mim</h2>
        <p>
          É um fato estabelecido há muito tempo que um leitor se distrai com o
          conteúdo legível de uma página ao examinar seu layout. O objetivo de
          usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou
          menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui', fazendo
          com que pareça um inglês legível.
        </p>
      </AboutMe>

      <Skills>
        <div>
          <strong>Habilidade</strong>
          <img
            src="https://cdn.pixabay.com/photo/2014/12/13/18/27/physiotherapy-567021_960_720.jpg"
            alt=""
          />

          <p>
            Lorem Ipsum é simplesmente um texto fictício da indústria
            tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do
            setor desde os anos 1500, quando uma impressora desconhecida pegou
            uma galera do tipo e a mexeu para fazer um livro de amostras do
            tipo.
          </p>
        </div>

        <div>
          <strong>Habilidade</strong>
          <img
            src="https://cdn.pixabay.com/photo/2014/12/13/18/27/physiotherapy-567021_960_720.jpg"
            alt=""
          />

          <p>
            Lorem Ipsum é simplesmente um texto fictício da indústria
            tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do
            setor desde os anos 1500, quando uma impressora desconhecida pegou
            uma galera do tipo e a mexeu para fazer um livro de amostras do
            tipo.
          </p>
        </div>

        <div>
          <strong>Habilidade</strong>
          <img
            src="https://cdn.pixabay.com/photo/2014/12/13/18/27/physiotherapy-567021_960_720.jpg"
            alt=""
          />

          <p>
            Lorem Ipsum é simplesmente um texto fictício da indústria
            tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do
            setor desde os anos 1500, quando uma impressora desconhecida pegou
            uma galera do tipo e a mexeu para fazer um livro de amostras do
            tipo.
          </p>
        </div>
      </Skills>

      <Contact>
        <h2>Contato</h2>
        <div>
          <span>
            <a
              href="https://www.instagram.com/dra.leticia.rodrigues/"
              target="blank"
            >
              <FiInstagram size={48} />
              <p>Clique aqui e me siga no Instagram</p>
            </a>
          </span>
          <p>
            <b>Celular:</b> (31) 9586-2703
          </p>
          <p>
            <b>E-mail:</b> email@email.com
          </p>
        </div>
      </Contact>
    </>
  );
};

export default Dashboard;
