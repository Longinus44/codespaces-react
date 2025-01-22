import React, { Component } from 'react';
import { AspectRatio } from '@mui/icons-material';
import data from './bodydata.jsx';
import { Typography, Container, Box, Card } from '@mui/material';

class Bodycard extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<Container sx={{ padding: 3 }}>
				<div>
					{/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> */}

					<Typography variant='h4'>
						NOW ON VIEW
					</Typography>

					<Typography variant='h4'>
						View More
					</Typography>

				</div>

				<Box
					sx={{
						display: 'flex',
						gap: 1,
						py: 1,
						overflow: 'auto',
						width: 343,
						scrollSnapType: 'x mandatory',
						'& > *': {
							scrollSnapAlign: 'center',
						},
						'::-webkit-scrollbar': { display: 'none' },
					}}
				>
					{data.map((item) => (
						<Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
							<AspectRatio ratio="1" sx={{ minWidth: 60 }}>
								<img
									srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
									src={`${item.src}?h=120&fit=crop&auto=format`}
									alt={item.title}
								/>
							</AspectRatio>
							<Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
								<Typography level="title-md">{item.title}</Typography>
								<Typography level="body-sm">{item.description}</Typography>
							</Box>
						</Card>
					))}
				</Box>
			</Container>
		);
	}
}

export default Bodycard;
