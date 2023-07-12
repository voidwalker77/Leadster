import * as Styled from './styles'
import AliceCarousel from 'react-alice-carousel';
import videosData from '../../Data/Videos/videos.json';
import videosDataAlternative from '../../Data/Videos/videosAlternative.json';

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export default function Carousel() {

    const links = [
        {
            id: 1,
            label: 'Agências',
            content: videosData.videos,
        },
        {
            id: 2,
            label: 'Chatbot',
            content: videosDataAlternative.videos,
        },
        {
            id: 3,
            label: 'Marketing Digital',
            content: videosData.videos,
        },
        {
            id: 4,
            label: 'Geração de Leads',
            content: videosData.videos,
        },
        {
            id: 5,
            label: 'Mídia Paga',
            content: videosDataAlternative.videos,
        },
    ];

    return (
        <Styled.CarouselWrapper>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                autoPlay
                autoPlayInterval={3000}
                disableButtonsControls
            />
        </Styled.CarouselWrapper>
    )
}
