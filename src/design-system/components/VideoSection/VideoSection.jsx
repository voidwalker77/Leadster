import Navbar from '../Navbar/Navbar'
import BreakLine from '../BreakLine/BreakLine'
import * as Styled from './styles'
import PaginationComponent from '../Pagination/Pagination'

export default function VideoSection() {
    return (
        <>
            <Styled.Wrapper>
                <Styled.InnerWrapper>
                    <Styled.Div>
                        <Navbar />
                        
                    </Styled.Div>
                    <BreakLine />
                    <PaginationComponent />
                </Styled.InnerWrapper>
            </Styled.Wrapper>
        </>
    )
}
