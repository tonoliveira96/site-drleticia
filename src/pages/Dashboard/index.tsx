import React from 'react';
import { useSpring, animated } from 'react-spring';

import { FiInstagram } from 'react-icons/fi';

import WhatsappLogo from '../../assets/whatsapp-logo.png';
import Banner01 from '../../assets/image2.png';

import {
  Title,
  WhatsAppButton,
  HeaderSite,
  AboutMe,
  ImgPerson,
  Contact,
  Skills,
  Developer,
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

  const propsWhatappButton = useSpring({
    opacity: 1,
    delay: 1500,
    margin: 0,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: 'translateX(400px)',
    },
  });
  return (
    <>
      <Title>Dra. Letícia Rodrigues </Title>
      <WhatsAppButton>
      <animated.a
          style={propsWhatappButton}
          key="Whatssap"
          href="https://api.whatsapp.com/send?phone=553195862703"
          target="blank"
        >

          <img src={WhatsappLogo} alt="WhatsApp" />
        </animated.a>
      </WhatsAppButton>
      <HeaderSite>

        <ImgPerson>
          <animated.div style={props}>
            <img src={Banner01} alt="Banner" />
          </animated.div>
        </ImgPerson>
      </HeaderSite>

      <AboutMe>
        <h2>Sobre mim</h2>
        <p>
          Sou fisioterapeuta e meu foco de trabalho é tratamento de coluna. Meu
          compromisso é proporcionar sempre ao meu paciente uma melhor qualidade
          de vida, solucionando sua dor com o melhor atendimento que eu possa
          oferecer. Meu lema será sempre ajudar o meu paciente a resolver o
          problema que tanto lhe incomoda.
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
      <Developer>
        <span>
          Desenvolvido por{' '}
          <a href="https://www.linkedin.com/in/tonoliveira96/" target="blank">
            Everton Oliveira
          </a>{' '}
        </span>{' '}
      </Developer>
    </>
  );
};

export default Dashboard;
