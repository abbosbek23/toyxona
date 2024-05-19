// import React from 'react'
import { Grid, Container, Typography, Box } from '@mui/material';
import Slider from './Components/slider';
import AdditionalBox from './Components/additionalbox';
import Perfection from './Components/perfection';
import Benefit from './Components/benefit';
import Testimonals from './Components/testimonals';

const Home = () => {
	return (
		<div>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={6} style={{ paddingLeft: '0px' }}>
						<Typography sx={{ fontSize: '48px', marginTop: '150px' }}>
							Your Love Story, Our Masterpiece
						</Typography>
						<Typography sx={{ fontSize: '16px', color: '#252A2E' }}>
							Dream Day is your trusted partner in turning your wedding dreams into reality. With
							our expertise in wedding planning, we ensure every detail is taken care of, so you can
							relax and enjoy your special day.
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Slider />
					</Grid>
				</Grid>
			</Container>
			<Box sx={{ marginTop: '120px' }}>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '112px 64px',
						textAlign: 'center',
					}}
				>
					<Typography sx={{ color: '#D3874A' }}>Unforgettable</Typography>
					<Typography
						sx={{
							color: '#252A2E',
							fontSize: '40px',
							marginBlock: '10px',
							width: '600px',
						}}
					>
						Creating Your Dream Wedding Experience
					</Typography>
					<Typography sx={{ width: '770px' }}>
						At Dream Day, we offer a range of services to make your wedding day truly special. From
						helping you select the perfect venue to managing all aspects of catering and designing
						the decor, we are here to bring your dream wedding to life.
					</Typography>
				</Box>
				<Box sx={{ padding: '112px 64px', display: 'flex' }}>
					<AdditionalBox />
				</Box>
				<Box sx={{ padding: '112px 64px', display: 'flex' }}>
					<Perfection />
				</Box>
				<Box sx={{ padding: '112px 64px', backgroundColor: '#757B67', display: 'flex' }}>
					<Benefit />
				</Box>
				<Box sx={{ padding: '112px 64px', display: 'flex' }}>
					<Testimonals />
				</Box>
			</Box>
		</div>
	);
};

export default Home;
