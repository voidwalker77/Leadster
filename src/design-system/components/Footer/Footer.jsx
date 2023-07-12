import React from 'react';
import * as Styled from './styles';
import Image from 'next/image';

import { IconButton, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreakLine from '../BreakLine/BreakLine';

import { isMobile } from 'react-device-detect';

const linksData = [
    {
        title: 'Links principais',
        links: ['Home', 'Ferramenta', 'Preços', 'Contato'],
    },
    {
        title: 'Cases',
        links: ['Geração de Leads B2B', 'Geração de Leads em Software', 'Geração de Leads em Imobiliária', 'Cases de sucesso'],
    },
    {
        title: 'Materiais',
        links: ['Blogs', 'Parceria com Agências', 'Guia Definitivo do Marketing', 'Materiais Gratuitos'],
    },
];

const socialMediaIcons = [
    { id: 1, name: 'facebook', url: 'https://www.facebook.com' },
    { id: 2, name: 'linkedin', url: 'https://www.linkedin.com' },
    { id: 3, name: 'instagram', url: 'https://www.instagram.com' },
];

export default function Footer() {
    if (isMobile) {
        return (
            <Styled.FooterContainer>
                <Styled.LogoSection>
                    <Image src="/img/logo.png" width={194} height={42} alt='logo footer' />
                    <Styled.FooterText>Transformando visitantes em clientes.</Styled.FooterText>
                </Styled.LogoSection>

                {linksData.map((section, index) => (
                    <Accordion key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            sx={{
                                width: '100%',

                            }}
                            button
                        >
                            <Typography
                            variant="body1"
                                sx={{
                                    fontSize: '1.7rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    color: '#073541',
                                }}
                            >
                                {section.title}
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ textAlign: 'center' }}>
                            <Styled.Column>
                                <Styled.LinkList>
                                    {section.links.map((link, linkIndex) => (
                                        <Styled.FooterLink key={linkIndex}><Styled.Links href='/'>{link}</Styled.Links></Styled.FooterLink>
                                    ))}
                                </Styled.LinkList>
                            </Styled.Column>
                        </AccordionDetails>
                    </Accordion>
                ))}
                <Accordion sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        sx={{
                            width: '100%',
                        }}
                        button
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.7rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexGrow: 1,
                                color: '#073541',
                            }}
                        >
                            Siga a Leadster
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'center' }}>
                        <Styled.Column>
                            <Styled.LogoRow>
                                {socialMediaIcons.map((icon) => (
                                    <IconButton key={icon.id} href={icon.url} target="_blank" rel="noopener noreferrer" sx={{ color: '#8e8a9e', backgroundColor: '#f0f0f0', borderRadius: '5rem', }}>
                                        {icon.name === 'facebook' && <FacebookIcon sx={{ fontSize: '2.5rem', }} />}
                                        {icon.name === 'linkedin' && <LinkedInIcon sx={{ fontSize: '2.5rem' }} />}
                                        {icon.name === 'instagram' && <InstagramIcon sx={{ fontSize: '2.5rem' }} />}
                                    </IconButton>
                                ))}
                            </Styled.LogoRow>
                            <Styled.ContactInfo>
                                <Styled.FooterText><Styled.Black>E-mail:</Styled.Black> contato@leadster.com.br</Styled.FooterText>
                                <Styled.FooterText><Styled.Black>Telefone:</Styled.Black> (42) 98828-9851</Styled.FooterText>
                            </Styled.ContactInfo>
                        </Styled.Column>
                    </AccordionDetails>
                </Accordion>
                <Styled.CopyRights>
                    <Styled.FooterText>
                        Copyright 2015 - 2022 Todos os direitos reservados |
                        <Styled.LinkFooterLeadster> Leadster</Styled.LinkFooterLeadster>
                    </Styled.FooterText>
                    <Styled.FooterText>
                        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
                    </Styled.FooterText>
                </Styled.CopyRights>
            </Styled.FooterContainer>
        );
    }

    return (
        <Styled.FooterContainer>
            <Styled.LogoSection>
                <Image src="/img/logo.png" width={194} height={42} alt='logo footer' />
                <Styled.FooterText>Transformando visitantes em clientes.</Styled.FooterText>
            </Styled.LogoSection>

            <Styled.LinksSection>
                {linksData.map((section, index) => (
                    <Styled.Column key={index}>
                        <Styled.Title>{section.title}</Styled.Title>
                        <Styled.LinkList>
                            {section.links.map((link, linkIndex) => (
                                <Styled.FooterLink key={linkIndex}><Styled.Links href='/'>{link}</Styled.Links></Styled.FooterLink>
                            ))}
                        </Styled.LinkList>
                    </Styled.Column>
                ))}

                <Styled.Column>
                    <Styled.Title>Siga a Leadster</Styled.Title>
                    <Styled.LogoRow>
                        {socialMediaIcons.map((icon) => (
                            <IconButton key={icon.id} href={icon.url} target="_blank" rel="noopener noreferrer" sx={{ color: '#8e8a9e' }}>
                                {icon.name === 'facebook' && <FacebookIcon sx={{ fontSize: '2.5rem' }} />}
                                {icon.name === 'linkedin' && <LinkedInIcon sx={{ fontSize: '2.5rem' }} />}
                                {icon.name === 'instagram' && <InstagramIcon sx={{ fontSize: '2.5rem' }} />}
                            </IconButton>
                        ))}
                    </Styled.LogoRow>
                    <Styled.ContactInfo>
                        <Styled.FooterText><Styled.Black>E-mail:</Styled.Black> contato@leadster.com.br</Styled.FooterText>
                        <Styled.FooterText><Styled.Black>Telefone:</Styled.Black> (42) 98828-9851</Styled.FooterText>
                    </Styled.ContactInfo>
                </Styled.Column>
            </Styled.LinksSection>

            <BreakLine />
            <Styled.CopyRights>
                <Styled.FooterText>
                    Copyright 2015 - 2022 Todos os direitos reservados |
                    <Styled.LinkFooterLeadster> Leadster</Styled.LinkFooterLeadster>
                </Styled.FooterText>
                <Styled.FooterText>
                    Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
                </Styled.FooterText>
            </Styled.CopyRights>
        </Styled.FooterContainer>
    );
}
