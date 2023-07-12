import Image from 'next/image';
import styled from 'styled-components'
import { Theme } from '../../utils/theme/theme'

export const DemoWrapper = styled.section`
    padding: 4rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

export const Graph = styled(Image)`
    @media (max-width: 1024px) {
        width: 98%;
        height: 98%;
    }
`

export const Seal = styled(Image)`
    box-shadow: 0px 0px 5px .4px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 1024px) {
        width: 80%;
        height: 80%;
    }

    @media (max-width: 480px) {
        width: 75%;
        height: 75%;
    }
`

export const Rating = styled(Image)`
    @media (max-width: 1024px) {
        width: 25%;
        height: 25%;
    }
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    flex-direction: column;


`

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    word-wrap: break-word;
    width: 76%;
    color: ${Theme.darkBlue};

    @media (max-width: 1024px) {
        font-size: 2.7rem;
        text-align: center;
    }
`

export const SubTitle = styled.p`
    padding-block: 2rem;
    width: 100%;
    font-size: 2.3rem;
    font-weight: 500;
    word-wrap: break-word;
    color: ${Theme.darkBlue};
    border-bottom: 1px solid #cecece;

    @media (max-width: 1024px) {
        font-size: 1.9rem;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin-block: 2rem;

    @media (max-width: 480px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Button = styled.button`
    background-color: #2c83fb;
    border: 1.5px solid;
    padding: 2.5rem;
    border-radius: 5rem;
    color: white;
    cursor: pointer;
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: uppercase;

    @media (max-width: 1024px) {
        padding: 1.4rem;
        font-size: 1.4rem;
    }
`

export const Informations = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 600;
    gap: .4rem;
    color: ${Theme.darkBlue};
    word-wrap: break-word;

    @media (max-width: 1024px) {
        font-size: 1.4rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`

export const Div = styled.div`
    display: flex;
    justify-content: center;
`
