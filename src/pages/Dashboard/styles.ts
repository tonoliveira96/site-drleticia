import styled from 'styled-components';
import { shade } from 'polished';

import Banner01 from '../../assets/massage2.jpg';

export const Title = styled.h1`
  display: flex;
  font-size: 42px;
  color: #f0f0f5;
  background: #3a3a3a;
  width: 100%;
  position: fixed;
  top: 0;

  padding-top: 15px;
  padding-left: 30px;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const HeaderSite = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Banner01}) no-repeat center top fixed;

  a {
    display: flex;
    padding: 10px;
    text-decoration: none;
    background: #04d361;
    align-items: center;
    justify-content: center;
    position: absolute;

    border-radius: 10px;
    border: 1px solid #f0f0f5;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }

    img {
      width: 24px;
      height: 24px;
      margin-left: 8px;
    }
  }

  @media (max-width: 640px) {
    width: auto;
    height: 500px;

    a {
      position: fixed;
      bottom: 0;
      margin-bottom: 24px;
    }
  }
`;

export const ImgPerson = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: auto;
  padding-right: 30px;
  img {
    height: 300px;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 12px 30px;

  h2 {
    color: #3a3a3a;
  }

  p {
    max-width: 1024px;
    display: flex;
    font-size: 16px;
    text-align: justify;
  }
`;

export const Skills = styled.div`
  display: flex;
  background: #f0f0f5;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid #ccc 1px;
    border-radius: 5px;
    margin: 0 16px;
    flex: 1;
    padding: 20px 2px 10px 2px;
    margin: 10px;
    strong {
      font-size: 16px;
      text-align: center;
    }

    img {
      display: flex;
      margin-left: auto;
      margin-right: auto;
      width: 300px;
      height: 200px;
      margin: 10px;
      border-radius: 5px;

    }

    p {
      margin: 10px;
      text-align: justify;
      font-size: 14px;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    display: flex;
    flex: 1;
  }
`;

export const Contact = styled.div`
  background: #3a3a3a;
  height: 300px;

  h2 {
    color: #fff;
  }

  div {
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
      text-decoration: none;
    }

    p {
      font-size: 18px;
      color: #f0f0f5;
      margin-top: 4px;
      padding: 5px;
    }
  }
  svg {
    margin-left: auto;
    color: #fff;
    transition: color 0.2s;
  }
  &:hover {
    color: ${shade(0.8, '#fff')};
  }
`;

export const Developer = styled.div`
  padding-left: 30px;
  padding-bottom: 12px;
  background: #3a3a3a;
  color: #fff;
  font-size: 16px;

  a {
    text-decoration: none;
    color: #25fbe0;
    font-weight: bold;
  }
`;
