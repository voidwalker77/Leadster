import React from "react"
import * as Styled from "./styles"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function Modal({ colorTitle, title, text, onClose }) {

    return (
        <Styled.Overlay onClick={onClose}>
            <Styled.ModalContainer onClick={(e) => e.stopPropagation()}>
                <Styled.CloseButton onClick={onClose}>X</Styled.CloseButton>
                <Styled.Title>
                    {colorTitle}
                    {title}
                </Styled.Title>
                <Styled.Iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
                <Styled.SectionTitle>Descrição</Styled.SectionTitle>
                <Styled.Paragraph>{text}</Styled.Paragraph>
                <Styled.SectionTitle>Downloads</Styled.SectionTitle>
                <Styled.IconsContainer>
                    <Styled.SpreadsheetIconContainer>
                        <Styled.SpreadsheetIcon>
                            <CloudDownloadIcon sx={{ fontSize: 22 }} />
                        </Styled.SpreadsheetIcon>
                        Spreadsheet.xls
                    </Styled.SpreadsheetIconContainer>

                    <Styled.DocumentIconContainer>
                        <Styled.DocumentIcon>
                            <CloudDownloadIcon sx={{ fontSize: 22 }} />
                        </Styled.DocumentIcon>
                        Document.doc
                    </Styled.DocumentIconContainer>

                    <Styled.PresentationIconContainer>
                        <Styled.PresentationIcon>
                            <CloudDownloadIcon sx={{ fontSize: 22 }} />
                        </Styled.PresentationIcon>
                        Presentation.xls
                    </Styled.PresentationIconContainer>
                </Styled.IconsContainer>
            </Styled.ModalContainer>
        </Styled.Overlay>
    )
}