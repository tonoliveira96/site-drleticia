import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
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
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  a {
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
    }
  }

  /* img{
    max-width:auto;
	  height:100%s;

  }*/

  @media (max-width: 640px) {
    width: auto;
    height: 500px;
    padding-bottom: 80px;

    a {
      position: fixed;
      bottom: 0;
      margin-bottom: 24px;
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-top: 20px;

    div {
      margin: 0 16px;
      flex: 1;
      padding: 20px 10px 10px 20px;

      strong {
        justify-content: center;
        font-size: 16px;
      }

      img {
        width: 300px;
        height: 200px;
        margin: 10px;
        border-radius: 5px;
      }

      p {
        margin: 10px;
        padding: 0 10px 0 0;
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
  display: flex;
  border: orange solid;
  background: #3a3a3a;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      display: flex;
      width: 24px;
      height: 24px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cdcdd6;
      transition: color 0.2s;
    }
    &hover {
      color: ${shade(0.8, '#cdcdd6')};
    }
  }
`;
