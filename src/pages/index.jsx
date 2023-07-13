import styled from 'styled-components'
import CallScreen from "../design-system/components/CallScreen/CallScreen";
import Footer from '../design-system/components/Footer/Footer';
import Header from '../design-system/components/Header/Header';
import VideoSection from '../design-system/components/VideoSection/VideoSection';
import Demo from '../design-system/components/DemoScreen/Demo';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Home() {
	return (
		<>
			<Wrapper>
				<Header />
				<CallScreen />
				<VideoSection />
				<Demo />
				<Footer />
			</Wrapper>
		</>
	)
}
