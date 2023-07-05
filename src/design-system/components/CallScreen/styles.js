import styled from 'styled-components'
import { Theme } from '../../utils/theme/theme'

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .5rem;
    width: 65vw;
    margin-block: 10rem;
`
export const H4 = styled.div`
    text-transform: uppercase;
    color: ${Theme.lightBlue};
    padding: 1rem;
    border: 2px solid ${Theme.lightBlue};
    border-radius: 2rem 2rem 2rem .5rem;
`

export const H2 = styled.div`
    font-size: 3.4rem;
    color: ${Theme.darkBlue};
`


export const H1 = styled.div`
    font-size: 6.5rem;
    background-image: linear-gradient(-45deg, #2c83fb, #1f76f0);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-align: center;
    line-height: 9.2rem;
`

export const WrapperH1 = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const WrapperAssetHeader = styled.div`
    position: absolute;
    margin: 0.2% -1.3%;
`

export const P = styled.div`
    color: ${Theme.darkBlue};
`