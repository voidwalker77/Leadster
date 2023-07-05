import { useState } from 'react';
import Tab from '@mui/base/Tab';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tabs from '@mui/base/Tabs';
import { styled } from '@mui/system';
import * as Styled from './styles'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PublicationDateDropdown from '../DropdownMenu/DropdownMenu';
import videosData from '../../Data/Videos/videos.json';
import videosDataAlternative from '../../Data/Videos/videosAlternative.json';
import BreakLine from '../BreakLine/BreakLine';

 const StyledTab = styled(Tab)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundColor: '#2c83fb',
        border: '1.5px solid',
        padding: '1.5rem',
        borderColor: '#0a4461',
        borderRadius: '5rem',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    '&:not(.Mui-selected)': {
        backgroundColor: 'transparent',
        border: '1.5px solid',
        padding: '1.5rem',
        borderColor: '#0a4461',
        borderRadius: '5rem',
        fontWeight: 'bold',
        color: '#0a4461',
        transition: 'background-color 0.2s ease',
        cursor: 'pointer'
    },
    '&.Mui-selected:hover': {
        color: '#fff',
    },
    '&:hover': {
        borderColor: '#2c83fb',
        color: '#fff',
        backgroundColor: '#2c83fb',
    },
}));

export default function Navbar() {

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

    const [activeTab, setActiveTab] = useState(1);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const tabStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70vw',
    };
    const tabsListDiv = {
        display: 'flex',
        gap: '1rem'
    };

    return (
        <>
            <Styled.Wrapper>
                <Tabs value={activeTab} onChange={handleTabChange}>
                    <TabsList style={tabStyle}>
                        <div style={tabsListDiv}>
                            {links.map((link) => (
                                <Styled.StyledLink >
                                    <StyledTab key={link.id} value={link.id}>
                                        {link.label}
                                    </StyledTab>
                                </Styled.StyledLink>
                            ))}
                        </div>
                        <Styled.containerMenu>
                            <Styled.TextP>Ordenar por</Styled.TextP>
                            <PublicationDateDropdown />
                        </Styled.containerMenu>
                    </TabsList>
                    <BreakLine />
                    {links.map((link) => (
                        <TabPanel key={link.id} value={link.id}>
                            <Styled.cardsWrapper>
                                {link.content.map((content, index) => (
                                    <Styled.Divider key={content.id}>
                                        <Styled.CardWrapper>
                                            <Styled.Card
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <Styled.RoundedImage
                                                    src={content.content}
                                                    width={362}
                                                    height={204}
                                                    alt={content.label}
                                                />
                                                <Styled.OverlayImg active={hoveredIndex === index}>
                                                    <PlayArrowIcon sx={{
                                                        fontSize: 120,
                                                        color: 'white',
                                                    }}
                                                    />
                                                </Styled.OverlayImg>

                                            </Styled.Card>
                                            <Styled.CardTitle>
                                                {content.label}
                                            </Styled.CardTitle>
                                        </Styled.CardWrapper>

                                    </Styled.Divider>
                                ))}
                            </Styled.cardsWrapper>
                        </TabPanel>
                    ))}
                                                </Tabs>
            </Styled.Wrapper>
        </>
    )
}
