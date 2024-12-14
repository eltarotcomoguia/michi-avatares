import styled, { css } from 'styled-components';
import Michiguardia from '../image/Password.PNG';

export const Title = styled.h1`
    font-family: 'Cosmic_cat', sans-serif;
    text-align: center;
    font-size: 4rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
        font-size: 3rem;
    }
`;


export const Mainn = styled.main`
    position: relative;
    z-index: 2;
    padding:1rem;
`


export const Section = styled.section`
    position: relative;
    width: 45rem;
    padding: 2rem 3rem;
    display: table;
    margin: auto;
    border: 0.8rem solid #342224;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(255, 255, 255, 0.6);
    background: linear-gradient(45deg, #e3e3e3, #ffffff);

    @media (max-width: 768px) {
        width: 90%;
        padding: 2rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 1.5rem 1rem;
    }

    ${props => props.seguridad && css`
        border:none;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 54%, white 50%);
        box-shadow:none;
    `};
`


export const Div = styled.div`
    ${props => props.texto && css`
        text-align: center;
        width: 45rem;
        height: auto;
        clear: both;
        font-weight: 500;
        font-size: 2rem;

        @media (max-width: 768px) {
            width: 90%;
            font-size: 1.5rem;
            margin: auto;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    `};

    ${props => props.boton && css`
        width: 45rem;
        margin: auto;
        display: flex;
        justify-content: center;
        gap: 1rem;

        @media (max-width: 768px) {
            width: 100%;
            gap: 0.5rem;
        }

        @media (max-width: 480px) {
            align-items: center;
            gap: 0.5rem;
        }
    `};
`


export const I = styled.div`
  width:300px;
  height: 200px;
  background-image: url(${Michiguardia});
  background-size:cover;
  background-position: center;
  margin:auto;
`;


export const Label = styled.label`
    margin-right:1rem;
    margin-left:1rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        margin: 0.5rem 0.5rem;
    }
`


export const Input = styled.input`

    ${props => props.radio && css`
        margin-right:1rem;
        margin-left:1rem;
    `};
`


export const Button = styled.button`

    ${props => props.siguiente && css`
        font-family: 'sans-serif', 'Cochin LT Std';
        float: right;
        height: 4.5rem;
        border: none;
        border-radius: 0.3rem;
        color: white;
        outline: none;
        font-size: 1.5rem;
        padding: 0.8rem 1.8rem 0.6rem 1.8rem;
        margin-top: 3rem;
        opacity: 1;
        cursor: pointer;

        @media (max-width: 768px) {
            font-size: 1.5rem;
            padding: 0.6rem 1.5rem;
            margin-top: 2rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
            padding: 0.5rem 0.5rem;
        }
    `};

    ${props => props.atras && css`
        font-family: 'sans-serif', 'Cochin LT Std';
        float: left;
        height: 4.5rem;
        border: none;
        border-radius: 0.3rem;
        color: white;
        outline: none;
        font-size: 1.5rem;
        padding: 0.8rem 1.8rem 0.6rem 1.8rem;
        margin-top: 3rem;
        opacity: 1;
        cursor: pointer;

        @media (max-width: 768px) {
            font-size: 1.5rem;
            padding: 0.6rem 1.5rem;
            margin-top: 2rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
            padding: 0.5rem 0,5rem;
        }
    `};
`;

export const ElegantImage = styled.img`

   // border: 8px solid #342224;
    border-radius: 15px;
    //box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(255, 255, 255, 0.6);
    padding: 0.5rem;
    //background: linear-gradient(45deg, #e3e3e3, #ffffff);
   // margin-right: 2.5rem;

    @media (max-width: 480px) {
        margin-right: 2.5rem;
    }

    &:hover {
    transform: scale(1.05);
    //box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3), inset 0px 2px 6px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease-in-out;
  }
`;

export const ElegantCanvas = styled.canvas`

    //border: 8px solid #342224;
    border-radius: 15px;
    //box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), inset 0px 2px 4px rgba(255, 255, 255, 0.6);
    padding: 0.5rem;
    //background: linear-gradient(45deg, #e3e3e3, #ffffff);
    //margin-right: 2.5rem;

    @media (max-width: 480px) {
        margin-right: 2.5rem;
    }

    &:hover {
    transform: scale(1.05);
    //box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3), inset 0px 2px 6px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease-in-out;
  }
`;