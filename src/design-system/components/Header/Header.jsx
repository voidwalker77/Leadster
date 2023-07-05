import Image from "next/image"
import Logo from '../../utils/img/logo.png'
import * as Styled from './styles'

export default function Header() {
    return (
        <>
            <Styled.Wrapper>
                <Image src={Logo} width='194' height='42' alt='logo header'/>
            </Styled.Wrapper>
        </>
    )
}
