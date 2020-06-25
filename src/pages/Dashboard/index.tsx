import React, { useState, useEffect, FormEvent } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import api from '../../services/api';

import WhatsappLogo from '../../assets/whatsapp-logo.png';
import Banner01 from '../../assets/massage2.jpg';

import { Title, HeaderSite, Contact, Skills } from './styles';

// interface Repository {
//   full_name: string;
//   description: string;
//   owner: {
//     login: string;
//     avatar_url: string;
//   };
// }

const Dashboard: React.FC = () => {
  // const [newRepo, setNewRepo] = useState('');
  // const [inputError, setInputError] = useState('');
  // const [repositories, setRepository] = useState<Repository[]>(()=>{
  //   const storageRepositories = localStorage.getItem('@githubExplorer:repositories');

  //   if(storageRepositories){
  //     return JSON.parse(storageRepositories);
  //   }else{
  //     return []
  //   }
  // });

  // useEffect(()=>{

  // })

  // //coloca os dados no storage
  // useEffect(()=>{
  //   localStorage.setItem('@githubExplorer:repositories',JSON.stringify(repositories))
  // })

  // //FAZ A BUSCAR NA API
  // async function handleAddRepository(
  //   event: FormEvent<HTMLFormElement>,
  // ): Promise<void> {
  //   event.preventDefault();
  //   if (!newRepo) {
  //     setInputError('Digite o nome do autor/repositório');
  //     return;
  //   }

  //   try {
  //     const response = await api.get<Repository>(`repos/${newRepo}`);

  //     const repository = response.data;

  //     setRepository([...repositories, repository]);
  //     setInputError('');
  //   } catch (err) {
  //     setInputError('Erro na busca do repositório');
  //   }
  // }

  //inicia a renderização em tela
  return (
    <>
      <Title>Dra. Letícia Rodrigues </Title>

      <HeaderSite>
        <a
          key="Whatssap"
          href="https://api.whatsapp.com/send?phone=553195862703"
          target="_blank"
        >
          Entre em contato
          <img src={WhatsappLogo} />
        </a>

        {/* <img src={Banner01} alt="" /> */}
      </HeaderSite>

      <Skills>

          <div>
            <strong>Habilidade</strong>
            <img
              src="https://cdn.pixabay.com/photo/2014/12/13/18/27/physiotherapy-567021_960_720.jpg"
              alt=""
            />

            <p>
              Lorem Ipsum é simplesmente um texto fictício da indústria
              tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão
              do setor desde os anos 1500, quando uma impressora desconhecida
              pegou uma galera do tipo e a mexeu para fazer um livro de amostras
              do tipo.
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
              tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão
              do setor desde os anos 1500, quando uma impressora desconhecida
              pegou uma galera do tipo e a mexeu para fazer um livro de amostras
              do tipo.
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
              tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão
              do setor desde os anos 1500, quando uma impressora desconhecida
              pegou uma galera do tipo e a mexeu para fazer um livro de amostras
              do tipo.
            </p>
          </div>

      </Skills>

      <Contact>
        Contato
        <div></div>
      </Contact>
    </>
  );
};

export default Dashboard;
