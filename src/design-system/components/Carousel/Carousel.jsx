import * as Styled from './styles'
import Slider from "react-slick";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        adaptiveHeight: true,
        pauseOnHover: true,
        appendDots: dots => (
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBlock: "-6.8rem"
            }}>
                <ul style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
                >
                    {dots} </ul>
            </div>
        ),
        dotsClass: `slick-dots`

    }

    return (
        <Styled.CarouselWrapper>
            <div>
                <Slider {...settings}>
                    <>
                        Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
                    </>
                </Slider>
            </div>
        </Styled.CarouselWrapper>
    )
}
