import * as Styled from './styles'
import CallScreen from "../design-system/components/CallScreen/CallScreen";
import Footer from '../design-system/components/Footer/Footer';
import Header from '../design-system/components/Header/Header';
import VideoSection from '../design-system/components/VideoSection/VideoSection';
import Demo from '../design-system/components/DemoScreen/Demo';
import {isMobile} from 'react-device-detect';

export default function Home() {
	return (
		<>
			<Styled.Wrapper>
				<Header />
				<CallScreen />
				<VideoSection />
				<Demo />
				<Footer />
			</Styled.Wrapper>
		</>
	)
}
