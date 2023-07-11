import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography, ButtonBase } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';

const DropdownContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid #0a4461',
    color: '#0a4461',
    borderRadius: '1rem',
    padding: '.5rem',
    cursor: 'pointer',
});

export default function PublicationDateDropdown () {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };

    const handleClose = () => {2
        setAnchorEl(null);
        setOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        handleClose();
    };

    return (
        <>
            <ButtonBase onClick={handleClick} focusRipple>
                <DropdownContainer>
                    <Typography
                        variant="body1"
                        component="span"
                        style={{
                            outline: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            fontSize: '1.4rem',
                            ...(window.innerWidth <= 767 && {
                                fontSize: '1.1rem',
                            })
                        }}
                    >
                        Data de publicação
                    </Typography>
                    <IconButton disableRipple>
                        <ArrowDropDownIcon
                            sx={{
                                color: '#0a4461',
                                fontSize: '2.2rem',
                                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease-in-out',
                                ...(window.innerWidth <= 767 && {
                                    fontSize: '1.6rem',
                                })
                            }}
                        />
                    </IconButton>
                </DropdownContainer>
            </ButtonBase>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >   
                <MenuItem onClick={() => handleDateChange('2023-06-01')}
                    sx={{
                        fontSize: '1.3rem',
                        color: '#041d29',
                        ...(window.innerWidth <= 767 && {
                            fontSize: '1.2rem',
                        })
                    }}
                >
                    1 de junho de 2023
                </MenuItem>
                <MenuItem onClick={() => handleDateChange('2023-06-15')}
                    sx={{
                        fontSize: '1.3rem',
                        color: '#041d29',
                        ...(window.innerWidth <= 767 && {
                            fontSize: '1.2rem',
                        })
                    }}
                >
                    15 de junho de 2023
                </MenuItem>
            </Menu>
        </>
    );
};
