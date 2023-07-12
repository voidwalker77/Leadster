import styled from "styled-components";
import { Theme } from '../../utils/theme/theme'

export const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: default;
`;

export const ModalContainer = styled.section`
    background-color: white;
    border-radius: 1.5rem;
    padding: 2rem;
    width: 50rem;
    display: flex;
    flex-direction: column;
    position: relative;
    border-top: 4px solid ${Theme.lightBlue};
    overflow: hidden;

	@media (max-width: 1024px) {
		width: 90%;
	}
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1.3rem;
  right: 1.3rem;
  background: none;
  border: none;
  color: ${Theme.darkBlue};
  cursor: pointer;
  font-size: 2rem;
`;


export const Title = styled.h2`
  	color: ${Theme.darkBlue};
  	font-size: 2rem;
  	word-wrap: break-word;
  	white-space: pre-line;
  	padding: 0 8%;
  	margin-bottom: 2.5rem;
  	font-weight: 600;

  	@media (max-width: 1024px) {
		font-size: 1.6rem;
	}
`


export const Iframe = styled.iframe`
  	width: 100%;
  	height: 30rem;
  	margin-bottom: 2rem;
  	border: none;

  	@media (max-width: 1024px) {
		height: 18rem;
	}
`;

export const SectionTitle = styled.h3`
  	padding-bottom: 1rem;
  	border-bottom: 1px solid #cecece;
  	font-size: 1.6rem;
  	margin-bottom: 1rem;
  	text-align: left;
  	color: ${Theme.darkBlue};
  
  	@media (max-width: 1024px) {
		font-size: 1.4rem;
	}
`;

export const Paragraph = styled.p`
  color: ${Theme.darkBlue};
  font-weight: 500;
  margin-bottom: 2.5rem;
  word-wrap: break-word;

  @media (max-width: 1024px) {
		font-size: 1.3rem;
		word-spacing: .4rem;
	}
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .7rem;

	@media (max-width: 1024px) {
		flex-wrap: wrap;
	}
`

export const SpreadsheetIcon = styled.div`
    background-color: #9FEEDE;
    color: #32C6A6;
    border-radius: 7px 0px 0px 7px;
    padding: .3rem;
`

export const SpreadsheetIconContainer = styled.div`
    color: #31CFB2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;
    background-color: #C2F4EA;
    border-radius: .7rem;
    padding-inline: 0 1rem;
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;

	@media (max-width: 1024px) {
		font-size: 1rem;
	}
`
export const DocumentIcon = styled.div`
    background-color: #A1D8FE;
    color: #0195F1;
    border-radius: 7px 0px 0px 7px;
    padding: .3rem;
`

export const DocumentIconContainer = styled.div`
    background-color: #C2E7FE;
    color: #57ADF5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;
    border-radius: .7rem;
    padding-inline: 0 1rem;
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;

	@media (max-width: 1024px) {
		font-size: 1rem;
	}
`

export const PresentationIcon = styled.div`
    background-color: #FFF0A1;
    color: #EBD77E;
    border-radius: 7px 0px 0px 7px;
    padding: .3rem;
`

export const PresentationIconContainer = styled.div`
    background-color: #F3E9B9;
    color: #BDAC6A;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;
    border-radius: .7rem;
    padding-inline: 0 1rem;
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;

	@media (max-width: 1024px) {
		font-size: 1rem;
	}
`