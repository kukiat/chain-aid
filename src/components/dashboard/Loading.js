import React from 'react'
import ContentLoader from "react-content-loader"
import ReactLoading from 'react-loading'
import '../../Styles/Manage.css';

export const FacebookLoading = props => (
  <ContentLoader
		height={200}
		width={700}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
		{...props}
	>
		<circle cx="10" cy="20" r="8" /> 
		<rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
		<circle cx="10" cy="50" r="8" /> 
		<rect x="25" y="45" rx="5" ry="5" width="220" height="10" /> 
		<circle cx="10" cy="80" r="8" /> 
		<rect x="25" y="75" rx="5" ry="5" width="220" height="10" /> 
		<circle cx="10" cy="110" r="8" /> 
		<rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
	</ContentLoader>
)

export const Loading = () => (
  <ReactLoading className="spin-loading" type="spin" color="#EA5C99" height={100} width={100} />
)