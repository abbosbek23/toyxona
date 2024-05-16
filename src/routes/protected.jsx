// import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = ({ allowed, to }) => {
	if (!allowed) return <Navigate to={to} />;

	return <Outlet />;
};

Protected.propTypes = {
	allowed: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
};

export default Protected;
