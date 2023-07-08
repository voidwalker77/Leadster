import Image from 'next/image';
import styled from 'styled-components'
import { Theme } from '../../utils/theme/theme'

export const DemoWrapper = styled.section`
    padding-block: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const Graph = styled(Image)`

`

export const Seal = styled(Image)`
    box-shadow: 0px 0px 5px .4px rgba(0, 0, 0, 0.3);
`

export const Rating = styled(Image)`

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
`

export const SubTitle = styled.p`
    padding-block: 2rem;
    width: 100%;
    font-size: 2.3rem;
    font-weight: 500;
    word-wrap: break-word;
    color: ${Theme.darkBlue};
    border-bottom: 1px solid #cecece;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin-block: 2rem;
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
`

export const VerticalBar = styled.div`
  width: 1px;
  height: 100%;
  background-color: #000000;
  display: inline-block;
`;