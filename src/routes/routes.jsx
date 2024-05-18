// import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Navbar } from '../components';
// import Protected from './protected';
// import { useAuth } from '../modules/auth/context';
import { Home, Service, AboutUs, Faqs, ContactUs } from '../pages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Login } from '../pages';

function Router() {
	// const { user } = useAuth();
	// const isAllowed = !user;

	return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				{/* <Route path="/auth" element={<Protected allowed={isAllowed} to="/" />}>
				<Route path="register" element={<Register />} />
			</Route> */}

				{/* {user ? (
				<Route path="/profile" element={<Profile />} />
			) : (
				<Route path="/profile" element={<Navigate to="/auth/login" />} />
			)} */}

				<Route path="/service" element={<Service />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/faqs" element={<Faqs />} />
				<Route path="/contact-us" element={<ContactUs />} />

				{/* <Route path="*" element={<Navigate to="/auth/login" />} /> */}
			</Routes>
			<Footer />
		</div>
	);
}

export default Router;
