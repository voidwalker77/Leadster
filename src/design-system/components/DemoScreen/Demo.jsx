import * as Styled from './styles'
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';

export default function Demo() {
    return (
        <Styled.DemoWrapper>
            <Styled.Graph src='/img/comparativo_img_CTA.png' alt='gráfico' width='628' height='585' />

            <Styled.Box>
                <Styled.Title>
                    Pronto para triplicar sua <strong>Geração de Leads?</strong>
                    <Styled.SubTitle>
                        Criação e ativação em <strong>4 minutos</strong>
                    </Styled.SubTitle>
                </Styled.Title>
                <Styled.ButtonWrapper>
                    <Styled.Button>
                        ver demonstração
                    </Styled.Button>
                    <Styled.Seal src='/img/selo_RD.png' alt='selo' width='205' height='73' />
                </Styled.ButtonWrapper>
                <Styled.Informations>
                    <Styled.Div>
                        <div><CreditCardOffIcon sx={{ fontSize: 20 }} /></div>

                        <div>
                            <p>
                                <strong>Não </strong>é necessário Cartão de Crédito |
                            </p>
                            <div>
                            <Styled.Rating src='/img/rating.webp' alt='avaliação' width='92' height='16' />
                                &nbsp;&nbsp;4.9/5 média de satisfação
                            </div>
                        </div>
                    </Styled.Div>
                </Styled.Informations>
            </Styled.Box>
        </Styled.DemoWrapper>
    )
}
