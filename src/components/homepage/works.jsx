import React, { useEffect } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos"
import "aos/dist/aos.css";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="works"
			data-aos="fade-up"
			data-aos-anchor-placement="bottom-center"
		>
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://res.cloudinary.com/dl2jsgrdi/images/c_scale,w_216,h_105/f_auto,q_auto/v1704181980/mentorsol-logo/mentorsol-logo.png?_i=AA"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">MentorSol</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
						</div>


					</div>
				}
			/>
		</div>
	);
};

export default Works;
