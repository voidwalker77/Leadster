import styled from 'styled-components'
import { Theme } from '../../utils/theme/theme'

export const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 6rem 0;
  width: 100%;
`;

export const LogoSection = styled.div`
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	margin-bottom: 3rem;
  	padding: 0 20%;

  	@media (max-width: 1024px) {
		padding: 0 5%;
  	}
`

export const FooterText = styled.p`
  font-size: 1.5rem;
  color: ${Theme.gray};
  margin-top: 1rem;
`;

export const Black = styled.div`
  color: ${Theme.black};
`

export const LinksSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
  padding: 0 18%;

  
 
`;

export const Column = styled.div`
    flex: 1;
`;

export const Title = styled.h4`
  font-size: 1.8rem;
  color: #000;
  margin-bottom: 4rem;
`;

export const LinkList = styled.ul`

`;

export const Links = styled.a`
  	cursor: pointer;
  	text-decoration: none;
  	color: ${Theme.gray};

  	&:visited {
		color: ${Theme.gray};
  	}
`

export const FooterLink = styled.li`
  	font-size: 1.5rem;
  	color: #666666;
  	margin-bottom: 2rem;
`;

export const LogoRow = styled.div`
  	display: flex;
  	justify-content: flex-start;
  	gap: 1.5rem;
  	margin-bottom: 1rem;
  	margin-top: -2rem;

	@media (max-width: 1024px) {
		justify-content: center;
	}
`;

export const ContactInfo = styled.div`
  
`;

export const Divider = styled.div`
 
`

export const CopyRights = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 2rem;
  padding: 3rem 18%;

	@media (max-width: 1024px) {
		padding: 0 5%;
		flex-direction: column;
		word-wrap: break-word;
	}
`;

export const LinkFooterLeadster = styled.a`
  color: ${Theme.lightBlue};
  cursor: pointer;
`