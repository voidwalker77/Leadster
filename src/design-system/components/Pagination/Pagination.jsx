import { Pagination, PaginationItem } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledPagination = styled(PaginationItem)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundColor: 'transparent',
        border: '1.5px solid',
        borderColor: '#0a77d1',
        borderRadius: '.5rem',
        color: '#0a77d1',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    '&:not(.Mui-selected)': {
        backgroundColor: 'transparent',
        borderRadius: '.5rem',
        color: '#06293a',
        fontWeight: 'bold',
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

export default function PaginationComponent () {
	const [currentPage, setCurrentPage] = useState(1)

	const handleChangePage = (event, page) => {
		setCurrentPage(page);
	}
	

	return (
		<>
			<Pagination
				count={4}
				page={currentPage}
				onChange={handleChangePage}
				renderItem={(item) => (
					<StyledPagination
						component="a"
						href="#"
						sx={{
							fontSize: '1.5rem',
						}}
						{...item}
					/>
				)}
			/>
		</>

	);
};
