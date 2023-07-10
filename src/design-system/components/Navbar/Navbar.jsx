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
import Modal from '../Modal/Modal'
import dynamic from "next/dynamic";
import { isMobile } from 'react-device-detect';
import { IconButton, Drawer, List, ListItem } from '@mui/material';

const StyledTab = styled(Tab)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundColor: '#2c83fb',
        border: '1.5px solid',
        padding: '1.5rem',
        borderColor: '#2c83fb',
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

const Navbar = () => {

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

    const [showModal, setShowModal] = useState(false);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    }

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const tabStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70vw',
        gap: '1.5rem',
        ...(window.innerWidth <= 767 && {
            flexDirection: 'column',
        })
    };
    const tabsListDiv = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        ...(window.innerWidth <= 767 && {
            flexDirection: 'column',
        })

    };

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <Styled.Wrapper>
                <Tabs value={activeTab} onChange={handleTabChange}>
                    {isMobile ?
                        <Styled.MenuContainer>
                            <IconButton onClick={toggleMenu}>
                                <Styled.MenuIcon />
                            </IconButton>
                            <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu} >
                                <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                                    <ListItem sx={{ justifyContent: 'center' }}>
                                        <TabsList style={tabStyle} >
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
                                                
                                                <PublicationDateDropdown />
                                            </Styled.containerMenu>
                                        </TabsList>
                                    </ListItem>
                                </List>
                            </Drawer>
                        </Styled.MenuContainer>
                        :
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
                    }
                    <BreakLine />
                    {links.map((link) => (
                        <TabPanel key={link.id} value={link.id}>
                            <Styled.cardsWrapper>
                                {link.content.map((content, index) => (
                                    <Styled.Divider key={content.id}>
                                        <Styled.CardWrapper>
                                            <Styled.Card
                                                onClick={handleOpenModal}
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
                                            <Styled.CardTitle onClick={handleOpenModal}>
                                                {content.label}
                                                {showModal && (
                                                    <Modal
                                                        colorTitle={<span style={{ color: '#0077b6' }}>Webinar: </span>}
                                                        title='Como aumentar sua Geração de Leads feat. Traktor'
                                                        text={content.description}
                                                        onClose={handleCloseModal}
                                                    />
                                                )}
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
export default dynamic(() => Promise.resolve(Navbar), { ssr: false })