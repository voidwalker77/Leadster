import * as Styled from './styles'
import CallScreen from "../design-system/components/CallScreen/CallScreen";
import Footer from '../design-system/components/Footer/Footer';
import Header from '../design-system/components/Header/Header';
import VideoSection from '../design-system/components/VideoSection/VideoSection';

export default function Home() {
	return (
		<>
			<Styled.Wrapper>
				<Header />
				<CallScreen />
				<VideoSection />
				<Footer />
			</Styled.Wrapper>
		</>
	)
}
