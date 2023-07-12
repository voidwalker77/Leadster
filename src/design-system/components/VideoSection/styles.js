import styled from 'styled-components'
import { Theme } from '../../utils/theme/theme'

export const Wrapper = styled.section`
    background-color: ${Theme.white};
    width: 100%;
    padding-block: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InnerWrapper = styled.div`
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1024px) {
        width: 90vw;
    }
`

export const Div = styled.div`
    
`