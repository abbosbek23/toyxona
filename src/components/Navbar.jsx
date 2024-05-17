// import React from 'react'
import { Box } from '@mui/system';
import logo from '../assets/Logo.png';
import { Typography, useMediaQuery } from '@mui/material';
import './index.css';
import { useState } from 'react';
// import { Link } from "react-router-dom";

const Navbar = () => {
	const [clicded, setClicked] = useState(false);
	const point1100 = useMediaQuery('(max-width:1100px)');
	const point620 = useMediaQuery('(max-width:620px)');

	return (
		<div>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					marginTop: '30px',
					alignItems: 'center',
				}}
			>
				<Box display={'flex'}>
					{/* <Link
            to={"/"}
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginRight: "0px",
              cursor: "pointer",
            }}
          > */}
					<img
						src={logo}
						width={50}
						height={50}
						style={{
							backgroundColor: 'white',
							marginRight: '0px',
							marginLeft: '64px',
						}}
						alt="logo"
					/>

					{/* </Link> */}
				</Box>
				<Box
					sx={{
						position: point1100 && 'absolute',
						zIndex: point1100 && '1',
						top: point1100 && '0',
						right: point1100 && (clicded ? '0' : '-300px'),
						width: point1100 ? '300px' : '620px',
						display: 'flex',
						flexDirection: point1100 && 'column',
						transition: 'linear all 300ms',
						marginLeft: '340px',
					}}
				>
					{clicded ? (
						<button
							style={{
								width: '30px',
								height: '30px',
								border: 'none',
								background: 'transparent',
								cursor: 'pointer',
							}}
							className="burgerBtn"
							onClick={() => setClicked(false)}
						></button>
					) : (
						''
					)}
					<a
						style={{
							borderBottom: point1100 && '1px solid #000',
							fontFamily: 'Poppins, sans-serif',
							fontWeight: '500',
							marginInline: '20px',
							padding: point1100 && '25px 15px',
						}}
						href="/"
					>
						Home
					</a>
					<a
						style={{
							borderBottom: point1100 && '1px solid #000',
							fontFamily: 'Poppins, sans-serif',
							fontWeight: '500',
							marginInline: '20px',
							padding: point1100 && '25px 15px',
						}}
						href="/service"
					>
						Services
					</a>
					<a
						style={{
							borderBottom: point1100 && '1px solid #000',
							fontFamily: 'Poppins, sans-serif',
							fontWeight: '500',
							marginInline: '20px',
							padding: point1100 && '25px 15px',
						}}
						href="/about-us"
					>
						About Us
					</a>
					<a
						style={{
							borderBottom: point1100 && '1px solid #000',
							fontFamily: 'Poppins, sans-serif',
							fontWeight: '500',
							marginInline: '20px',
							padding: point1100 && '25px 15px',
						}}
						href="/faqs"
					>
						FAQs
					</a>
				</Box>
				<button
					style={{
						marginLeft: '30px',
						background: '#D3874A',
						border: 'none',
						padding: '10px 30px',
						borderRadius: '30px',
						color: 'white',
						fontSize: '18px',
					}}
				>
					Sign in
				</button>

				{point1100 && (
					<button
						style={{
							background: 'transparent',
							border: 'none',
							cursor: 'pointer',
							marginRight: point620 && '30px',
						}}
						onClick={() => setClicked(true)}
					>
						<Typography>Menu</Typography>
					</button>
				)}
			</Box>
		</div>
	);
};

export default Navbar;
