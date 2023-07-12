import Image from "next/image"
import * as Styled from './styles'

export default function Header() {
    return (
        <>
            <Styled.Wrapper>
                <Image src='/img/logo.png' width='194' height='42' alt='logo header'/>
            </Styled.Wrapper>
        </>
    )
}
