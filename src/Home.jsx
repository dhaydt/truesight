import React from 'react';
import web from "./images/img2.svg";
import {NavLink} from "react-router-dom";
import Commom from "./Commom";

const Home =() => {
	return (
		<>
			<Commom name='Grow Your Websites with' imgsrc={web} visit="/service" btname="Get Started" />
		</>
		);
};
export default Home;