import styled, { css } from 'styled-components';
import Image from 'next/image';
import { Theme } from '../../utils/theme/theme'

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const StyledLink = styled.a`
    color: ${Theme.black};
    display: inline-block;
`

export const TextP = styled.p`
    color: ${Theme.darkBlue};
`

export const containerMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
`

export const cardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    margin-top: 4rem;
    position: relative;
`

export const OverlayImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #2081ff81;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 1rem 1rem 0rem 0rem;

  ${({ active }) =>
        active &&
        css`
      opacity: 1;
    `}
`;

export const Divider = styled.div`

`

export const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  border-radius: 1rem 1rem 0rem 0rem;
`
export const CardWrapper = styled.div`
  box-shadow: 2px 0 14px rgba(0, 0, 0, 0.2), -2px 0 14px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 1rem;
  cursor: pointer;
`


export const RoundedImage = styled(Image)`
  border-radius: 1rem;
  width: 100%;
`;

export const CardTitle = styled.h1`
    font-size: 1.6rem;
    max-width: 78%; 
    word-wrap: break-word; 
    color: #06293a;
    margin-block: 2rem;
    &:hover {
        color: #0099ff;
    }
    
`