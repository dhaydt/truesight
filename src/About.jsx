import React from 'react';
import web from "./images/img.svg";
import {NavLink} from "react-router-dom";
import Commom from "./Commom";

const About =() => {
	return (
		<>
			<Commom name='Welcome to About Page' imgsrc={web} visit="/contact" btname="Contact Now" />
		</>
		);
};
export default About;