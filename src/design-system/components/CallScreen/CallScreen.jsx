import Image from 'next/image'
import BreakLine from '../BreakLine/BreakLine'
import * as Styled from './styles'
import AssetHeader from '../../utils/img/asset-header.png'


export default function CallScreen() {
    return (
        <>
            <Styled.Wrapper>
                <Styled.H4>
                    <h4>Webinars Exclusivos</h4>
                </Styled.H4>

                <Styled.H2>
                    <h2 style={{ fontWeight: '200' }}>Menos Conversinha,</h2>
                </Styled.H2>

                <Styled.WrapperH1>
                    <Styled.WrapperAssetHeader>
                        <Image src={AssetHeader} />
                    </Styled.WrapperAssetHeader>

                    <Styled.H1>
                        <h1>Mais Conversão</h1>
                    </Styled.H1>
                </Styled.WrapperH1>

                <BreakLine />
                
                <Styled.P>
                    <p>Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio</p>
                </Styled.P>
            </Styled.Wrapper>
        </>
    )
}
